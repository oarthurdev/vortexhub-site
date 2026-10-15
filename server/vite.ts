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
    // Fonte self-hosted (client/public/fonts)
    "font-src 'self'",
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
      // Vite injects inline scripts (React refresh preamble); give them the request nonce
      // so the dev CSP below doesn't block them.
      const transformed = (await vite.transformIndexHtml(url, withNonceMeta)).replace(
        /<script(?![^>]*\bnonce=)/g,
        `<script nonce="${nonce}"`,
      );

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
  // Bundled to dist/index.js; the prerendered site lives in server/public.
  const distPath = path.resolve(import.meta.dirname, "..", "server", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Static assets (hashed files, fonts, images, sitemap…). HTML pages are handled below.
  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), { immutable: true, maxAge: "1y" }),
  );
  app.use(express.static(distPath, { index: false, redirect: false, extensions: [] }));

  const sendHtml = (res: express.Response, file: string, status = 200) => {
    const nonce = genNonce();
    const html = injectNonceMeta(fs.readFileSync(file, "utf-8"), nonce);
    res
      .status(status)
      .set({
        "Content-Type": "text/html; charset=utf-8",
        "Content-Security-Policy": buildCsp(nonce),
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Content-Type-Options": "nosniff",
      })
      .send(html);
  };

  // Prerendered pages: /servicos and /servicos/ both resolve to servicos/index.html
  // (the former redirects to the canonical trailing-slash URL).
  app.get("*", (req, res) => {
    const reqPath = decodeURIComponent(req.path);
    const file = path.join(distPath, reqPath, "index.html");
    const insideRoot = file.startsWith(distPath + path.sep);

    if (insideRoot && fs.existsSync(file)) {
      if (!reqPath.endsWith("/")) {
        const query = req.originalUrl.slice(req.path.length);
        return res.redirect(301, `${reqPath}/${query}`);
      }
      return sendHtml(res, file);
    }

    const notFound = path.join(distPath, "404.html");
    if (fs.existsSync(notFound)) return sendHtml(res, notFound, 404);
    res.status(404).send("Not found");
  });
}
