import type { ReactNode } from "react";
import { ButtonLink } from "./button-link";
import { primaryCta } from "@/content/site";

type CallToActionProps = {
  title: ReactNode;
  text: ReactNode;
  ctaLabel?: string;
  secondary?: { label: string; href: string };
};

/** Closing banner for internal pages; leads to the contact page. */
export function CallToAction({ title, text, ctaLabel = primaryCta.label, secondary }: CallToActionProps) {
  return (
    <section className="surface-dark section relative isolate overflow-hidden">
      <div aria-hidden className="glow-brand absolute left-1/2 top-1/2 -z-10 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="site-container">
        <div className="reveal card-dark mx-auto max-w-4xl px-6 py-12 text-center sm:px-12 md:py-16">
          <h2 className="type-h2 text-on-dark">{title}</h2>
          <p className="type-lead mx-auto mt-5 max-w-2xl text-on-dark-muted">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} arrow track="cta_primary_click">
              {ctaLabel}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline-dark">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
