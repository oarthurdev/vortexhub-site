// server/setup.ts  (ou o arquivo que você mandou)
import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import crypto from "crypto"; // <-- NOVO

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// --------- Helpers CSP + Nonce ---------
function genNonce() {
  return crypto.randomBytes(16).toString("base64");
}

function buildCsp(nonce: string) {
  // Ajuste se seu app precisar de domínios extras
  return [
    "default-src 'self'",
    // Permite scripts do seu domínio e do Kommo; inline só com o nonce
    `script-src 'self' https://forms.kommo.com 'nonce-${nonce}'`,
    // Kommo pode injetar estilos inline
    "style-src 'self' 'unsafe-inline'",
    // Imagens locais/data e https (inclui CDN do Kommo)
    "img-src 'self' data: https:",
    // O Kommo renderiza dentro de iframe
    "frame-src https://forms.kommo.com",
    // XHR/fetch do Kommo
    "connect-src 'self' https://forms.kommo.com",
    // Fonts locais/data
    "font-src 'self' data:",
    // Submissão do form
    "form-action 'self' https://forms.kommo.com",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
  ].join("; ");
}

function injectNonceMeta(html: string, nonce: string) {
  // injeta meta antes do </head>
  return html.replace(
    /<\/head>/i,
    `  <meta name="csp-nonce" content="${nonce}">\n</head>`
  );
}
// --------------------------------------

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  // DEV + HMR: injeta CSP + nonce e meta na index.html transformada pelo Vite
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // bust cache do entry (opcional)
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      // gera nonce por request e já injeta meta no HTML-base
      const nonce = genNonce();
      const withNonceMeta = injectNonceMeta(template, nonce);

      // deixa o Vite fazer as mágicas (HMR, envs, etc.)
      const transformed = await vite.transformIndexHtml(url, withNonceMeta);

      // aplica CSP
      res
        .status(200)
        .set({
          "Content-Type": "text/html",
          "Content-Security-Policy": buildCsp(nonce),
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "X-Content-Type-Options": "nosniff",
        })
        .end(transformed);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // assets estáticos com cache
  app.use(express.static(distPath, {
    fallthrough: true,
    // você pode adicionar cache-control aqui se quiser
  }));

  // SPA fallback COM CSP + nonce + meta
  app.get("*", (_req, res) => {
    const indexFile = path.join(distPath, "index.html");
    if (!fs.existsSync(indexFile)) {
      return res.status(500).send("index.html not found");
    }

    const nonce = genNonce();
    let html = fs.readFileSync(indexFile, "utf-8");
    html = injectNonceMeta(html, nonce);

    res
      .status(200)
      .set({
        "Content-Type": "text/html",
        "Content-Security-Policy": buildCsp(nonce),
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Content-Type-Options": "nosniff",
      })
      .send(html);
  });
}
