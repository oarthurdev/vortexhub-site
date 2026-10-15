# Vortex Hub - Institutional Website

## Overview

Institutional and lead-generation website for Vortex Hub (vortexhub.com.br): commercial strategy, digital marketing, social media, AI & automations, and Kommo CRM implementation. React frontend, prerendered to static HTML at build time, with an optional Express server.

## User Preferences

Preferred communication style: Simple, everyday language.

- **Do not change the logo or favicons.** Use `attached_assets/468512062_…jpg` and the existing favicon files exactly as supplied.

## Pages

| Route | File |
| --- | --- |
| `/` | `client/src/pages/home.tsx` |
| `/servicos/` | `client/src/pages/services.tsx` |
| `/servicos/{estrategia-comercial,marketing-digital,social-media,ia-e-automacoes,kommo-crm}/` | `client/src/pages/service.tsx` (content in `content/services.ts`) |
| `/sobre/` | `client/src/pages/about.tsx` |
| `/contato/` | `client/src/pages/contact.tsx` |
| `/privacidade/` | `client/src/pages/privacy.tsx` |
| 404 | `client/src/pages/not-found.tsx` → `404.html` |

## Where things live

- **Content** (texts, services, FAQ, method, contact data): `client/src/content/site.ts` and `client/src/content/services.ts`. Edit copy here, not in components.
- **SEO** (titles, descriptions, canonical, Open Graph, JSON-LD): `client/src/lib/seo.ts`.
- **Design tokens** (colors, type scale, spacing, motion): CSS custom properties in `client/src/index.css`, exposed to Tailwind in `tailwind.config.ts` (`ink-*`, `brand-*`, `signal`, `mist`, `on-dark`, `on-light`).
- **Shared components**: `client/src/components/site/` (buttons, section headings, page hero, FAQ, Kommo form, integration flow…) and `client/src/components/layout/` (header, footer, layout).
- **Practical cases**: `applications` in `content/site.ts`. Current entries are conceptual examples (`kind: "example"`); add real, authorized cases with `kind: "case"`.
- `client/src/components/ui/` holds unused shadcn/ui primitives from the original template.

## Lead capture

The contact form is the Kommo-hosted iframe (form 1651071) in `components/site/kommo-form.tsx`, used on the home page and `/contato/`. Submissions go directly to the Kommo CRM. Its colors are configured inside Kommo, not in this codebase.

## Build & deploy

- `npm run dev` — Express + Vite dev server (`PORT`, default 8081).
- `npm run build` — client build → SSR build → `scripts/prerender.mjs` (writes one `index.html` per route, `404.html`, `sitemap.xml`, `robots.txt`, `.htaccess` into `server/public/`) → server bundle in `dist/index.js`.
- `npm start` — serves `server/public` through Express with CSP headers.
- **Static hosting** (current production): upload the contents of `server/public/`. Routes are folders with `index.html`; canonical URLs use a trailing slash (e.g. `/servicos/`). Configure the host to serve `404.html` for missing paths (`.htaccess` does this on Apache).

## Analytics

No analytics tool is installed. Elements with `data-track="event"` (CTAs, e-mail links) push events to `window.dataLayer` only if a tag manager defines it (`client/src/lib/analytics.ts`).

## Tech stack

React 18 + TypeScript, Vite 5, Tailwind CSS 3, wouter (routing, SSR via `ssrPath`), lucide-react icons, Express 4. Font: Plus Jakarta Sans (OFL), self-hosted in `client/public/fonts/`.
