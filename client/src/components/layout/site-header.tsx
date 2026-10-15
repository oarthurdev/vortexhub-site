import { useEffect, useId, useRef, useState } from "react";
import { useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryCta, primaryNav, company, mailto } from "@/content/site";
import { services, servicePath } from "@/content/services";
import { normalizePath } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";
import { SmartLink } from "@/components/site/smart-link";
import { ButtonLink } from "@/components/site/button-link";
import { ServiceIcon } from "@/components/site/service-icon";

function useIsCurrent() {
  const [location] = useLocation();
  const current = normalizePath(location);
  return (href: string) => {
    if (href.includes("#")) return false;
    return href === "/" ? current === "/" : current.startsWith(href);
  };
}

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [location] = useLocation();
  const isCurrent = useIsCurrent();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex min-h-[44px] items-center gap-1 rounded-full px-4 text-sm font-semibold transition-colors hover:text-on-dark",
          isCurrent("/servicos/") ? "text-on-dark" : "text-on-dark-muted",
        )}
      >
        Soluções
        <ChevronDown aria-hidden className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full mt-3 w-[min(620px,90vw)] -translate-x-1/2 rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl backdrop-blur-xl"
      >
        <ul className="grid gap-1 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <SmartLink
                href={servicePath(s.slug)}
                aria-current={isCurrent(servicePath(s.slug)) ? "page" : undefined}
                className="flex gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5 aria-[current=page]:bg-white/5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600/15 text-brand-300">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-on-dark">{s.shortName}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-on-dark-muted">{s.summary}</span>
                </span>
              </SmartLink>
            </li>
          ))}
          <li className="flex items-center p-3">
            <SmartLink href="/servicos/" className="link-arrow text-sm text-brand-300">
              Ver todas as soluções →
            </SmartLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MobileNavigation({ id, open, onClose }: { id: string; open: boolean; onClose: () => void }) {
  const isCurrent = useIsCurrent();
  return (
    <div
      id={id}
      hidden={!open}
      className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
    >
      <nav aria-label="Menu principal" className="site-container flex min-h-full flex-col py-6">
        <p className="eyebrow mb-3 text-brand-300">Nossas frentes</p>
        <ul className="grid gap-1">
          {services.map((s) => (
            <li key={s.slug}>
              <SmartLink
                href={servicePath(s.slug)}
                onClick={onClose}
                aria-current={isCurrent(servicePath(s.slug)) ? "page" : undefined}
                className="flex min-h-[48px] items-center gap-3 rounded-xl px-2 text-base font-semibold text-on-dark aria-[current=page]:text-brand-300"
              >
                <ServiceIcon name={s.icon} className="h-5 w-5 text-brand-300" />
                {s.shortName}
              </SmartLink>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-1 border-t border-white/10 pt-6">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <SmartLink
                href={item.href}
                onClick={onClose}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className="flex min-h-[48px] items-center rounded-xl px-2 text-lg font-semibold text-on-dark aria-[current=page]:text-brand-300"
              >
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto grid gap-4 pt-8">
          <ButtonLink href={primaryCta.href} arrow track="cta_primary_click" className="w-full">
            {primaryCta.label}
          </ButtonLink>
          <a href={mailto()} data-track="email_click" className="text-center text-sm text-on-dark-muted">
            {company.email}
          </a>
        </div>
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isCurrent = useIsCurrent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = () => window.innerWidth >= 1024 && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        solid ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="site-container flex h-[var(--header-h)] items-center justify-between gap-6">
        <SmartLink href="/" className="rounded-xl">
          <Logo size={42} />
          <span className="sr-only"> — página inicial</span>
        </SmartLink>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ServicesMenu />
          {primaryNav.slice(1).map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-on-dark-muted transition-colors hover:text-on-dark aria-[current=page]:text-on-dark"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={primaryCta.href} size="sm" track="cta_primary_click" className="hidden sm:inline-flex">
            {primaryCta.label}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-on-dark lg:hidden"
          >
            {menuOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
    {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel */}
    <MobileNavigation id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
