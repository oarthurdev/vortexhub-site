import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const isDev = process.env.NODE_ENV !== "production";
const isReplit = typeof process.env.REPL_ID !== "undefined";

const csp = [
  "default-src 'self'",
  "script-src 'self' https://forms.kommo.com 'unsafe-inline'", // troque por nonce/hash se quiser +segurança
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "frame-src https://forms.kommo.com",        // o iframe do Kommo
  "connect-src 'self' https://forms.kommo.com",
  "font-src 'self' data:",
  "form-action 'self' https://forms.kommo.com",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

export default defineConfig({
  plugins: [
    react(),
    ...(isDev ? [runtimeErrorOverlay()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "server/public"),
    emptyOutDir: true,
  },
  server: {
    headers: {
      "Content-Security-Policy": csp,
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    headers: {
      "Content-Security-Policy": csp,
    },
  },
});
