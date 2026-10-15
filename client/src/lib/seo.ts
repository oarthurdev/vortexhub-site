import { SITE_URL, company } from "@/content/site";
import { services, servicePath } from "@/content/services";

export type Crumb = { name: string; path: string };

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
};

const ORG_ID = `${SITE_URL}/#organization`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: company.name,
  legalName: company.legalName,
  taxID: company.cnpj,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-vortex.jpg`,
  image: OG_IMAGE,
  email: company.email,
  description: company.summary,
  address: {
    "@type": "PostalAddress",
    // City/state/postal code not yet confirmed — add addressLocality/addressRegion/postalCode when available.
    streetAddress: `${company.address.street}, 2º andar, sala 6, Bairro das Nações`,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  knowsAbout: services.map((s) => s.name),
};

const home: Crumb = { name: "Início", path: "/" };

function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

function page(meta: PageMeta): PageMeta {
  const jsonLd = [...(meta.jsonLd ?? [])];
  if (meta.breadcrumbs) jsonLd.push(breadcrumbLd(meta.breadcrumbs));
  return { ...meta, jsonLd };
}

export const pages: PageMeta[] = [
  page({
    path: "/",
    title: "Vortex Hub | Estratégia comercial, marketing, IA e CRM integrados",
    description:
      "A Vortex Hub conecta estratégia comercial, marketing digital, conteúdo, inteligência artificial e Kommo CRM para organizar sua operação de vendas. Solicite um diagnóstico.",
    jsonLd: [
      organization,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: company.name,
        url: `${SITE_URL}/`,
        inLanguage: "pt-BR",
        publisher: { "@id": ORG_ID },
      },
    ],
  }),
  page({
    path: "/servicos/",
    title: "Soluções | Vortex Hub",
    description:
      "Consultoria comercial, marketing digital, social media, IA e automações e implementação de Kommo CRM — cinco frentes que trabalham como um único sistema de crescimento.",
    breadcrumbs: [home, { name: "Soluções", path: "/servicos/" }],
  }),
  ...services.map((s) =>
    page({
      path: servicePath(s.slug),
      title: `${s.seo.title} | Vortex Hub`,
      description: s.seo.description,
      breadcrumbs: [home, { name: "Soluções", path: "/servicos/" }, { name: s.shortName, path: servicePath(s.slug) }],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.seo.description,
          url: `${SITE_URL}${servicePath(s.slug)}`,
          provider: { "@id": ORG_ID, "@type": "ProfessionalService", name: company.name },
          inLanguage: "pt-BR",
        },
      ],
    }),
  ),
  page({
    path: "/sobre/",
    title: "Sobre a Vortex Hub | Um hub de crescimento comercial",
    description:
      "Conheça a abordagem da Vortex Hub: um único parceiro conectando estratégia, marketing, conteúdo, inteligência artificial e CRM para organizar o crescimento de oportunidades.",
    breadcrumbs: [home, { name: "Sobre", path: "/sobre/" }],
  }),
  page({
    path: "/contato/",
    title: "Contato e diagnóstico | Vortex Hub",
    description:
      "Conte qual é o seu desafio comercial e solicite um diagnóstico. Atendimento de segunda a sexta, das 8h às 18h, pelo formulário ou por contato@vortexhub.com.br.",
    breadcrumbs: [home, { name: "Contato", path: "/contato/" }],
  }),
  page({
    path: "/privacidade/",
    title: "Política de privacidade | Vortex Hub",
    description: "Como a Vortex Hub coleta, utiliza e protege os dados pessoais enviados pelo site.",
    breadcrumbs: [home, { name: "Política de privacidade", path: "/privacidade/" }],
  }),
];

export const notFoundMeta: PageMeta = {
  path: "/404",
  title: "Página não encontrada | Vortex Hub",
  description: "A página que você procurou não existe ou mudou de endereço.",
  noindex: true,
};

/** Normalizes "/servicos" and "/servicos/" to the canonical trailing-slash form. */
export function normalizePath(path: string) {
  const clean = path.split(/[?#]/)[0] || "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function getPageMeta(path: string): PageMeta {
  const p = normalizePath(path);
  return pages.find((m) => m.path === p) ?? notFoundMeta;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Serialized <head> tags, injected at build time by scripts/prerender.mjs. */
export function renderHead(meta: PageMeta) {
  const url = `${SITE_URL}${meta.path}`;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${company.name}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.noindex ? "" : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...(meta.jsonLd ?? []).map(
      (ld) => `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.filter(Boolean).join("\n    ");
}
