import { primaryCta } from "@/content/site";
import { services, servicePath } from "@/content/services";
import { ButtonLink } from "@/components/site/button-link";
import { SmartLink } from "@/components/site/smart-link";

export default function NotFound() {
  return (
    <section className="surface-dark relative isolate overflow-hidden pb-[var(--section-y)] pt-[calc(var(--header-h)+4rem)]">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="site-container max-w-3xl">
        <p className="eyebrow text-brand-300">Erro 404</p>
        <h1 className="type-h1 mt-5 text-on-dark">Esta página não foi encontrada.</h1>
        <p className="type-lead mt-6 text-on-dark-muted">
          O endereço pode ter mudado ou não existir mais. Veja alguns caminhos para continuar:
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Voltar ao início
          </ButtonLink>
          <ButtonLink href={primaryCta.href} variant="outline-dark">
            {primaryCta.label}
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-1 border-t border-white/10 pt-8 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <SmartLink href={servicePath(s.slug)} className="link-arrow text-on-dark-muted hover:text-on-dark">
                {s.name}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
