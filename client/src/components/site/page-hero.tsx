import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { SmartLink } from "./smart-link";
import type { Crumb } from "@/lib/seo";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-on-dark-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-on-dark">
                  {c.name}
                </span>
              ) : (
                <>
                  <SmartLink href={c.path} className="rounded hover:text-on-dark">
                    {c.name}
                  </SmartLink>
                  <ChevronRight aria-hidden className="h-3.5 w-3.5 opacity-60" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Dark hero used by every internal page, so all pages share the same opening. */
export function PageHero({ eyebrow, title, intro, breadcrumbs, actions, aside }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden surface-dark pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+4.5rem)]">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="glow-brand absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] opacity-70" />
      <div className="site-container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]" : undefined}>
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow mb-5 text-brand-300">{eyebrow}</p>}
            <h1 className="type-h1 text-on-dark">{title}</h1>
            {intro && <p className="type-lead mt-6 max-w-2xl text-on-dark-muted">{intro}</p>}
            {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
