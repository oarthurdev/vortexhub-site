import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "wouter";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { getPageMeta, OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/content/site";
import { installClickTracking } from "@/lib/analytics";

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

/** Keeps title/description/canonical in sync and resets scroll on client-side navigation. */
function useRouteEffects() {
  const [location] = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const meta = getPageMeta(location);
    if (first.current) {
      // Prerendered HTML already has the full head; the dev shell only needs a title.
      first.current = false;
      if (!document.title) document.title = meta.title;
      return;
    }
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}${meta.path}`);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}${meta.path}`);
    setMeta('meta[property="og:image"]', "content", OG_IMAGE);
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.getElementById("conteudo")?.focus({ preventScroll: true });
  }, [location]);

  useEffect(() => installClickTracking(), []);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useRouteEffects();
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only-focusable fixed left-4 top-4 z-[60] rounded-full bg-white px-4 py-2 text-sm font-semibold text-on-light"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
