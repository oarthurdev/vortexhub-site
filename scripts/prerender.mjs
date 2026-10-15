// Build-time static rendering. The production host serves plain files (no SPA
// fallback), so every public route gets its own HTML file with real content and
// route-specific <head> tags. Run after `vite build` and the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "server/public");
const ssrEntry = path.join(root, "dist/ssr/entry-server.js");
const SITE_URL = "https://vortexhub.com.br";

const { render, pages, notFoundMeta } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");

if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--app-head--> / <!--app-html--> placeholders");
}

function write(file, route) {
  const { html, head } = render(route);
  const out = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  return out.length;
}

for (const page of pages) {
  const file = path.join(outDir, page.path, "index.html");
  const size = write(file, page.path);
  console.log(`  prerendered ${page.path.padEnd(38)} ${(size / 1024).toFixed(1)} kB`);
}

write(path.join(outDir, "404.html"), notFoundMeta.path);
console.log("  prerendered /404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// Apache hosts: serve the branded 404 page. Ignored by other servers.
fs.writeFileSync(path.join(outDir, ".htaccess"), "ErrorDocument 404 /404.html\n");

console.log(`  wrote sitemap.xml (${pages.length} URLs), robots.txt, .htaccess`);
