import { ArrowRight, Check } from "lucide-react";
import { services, servicePath } from "@/content/services";
import { getPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceIcon } from "@/components/site/service-icon";
import { IntegrationFlow } from "@/components/site/integration-flow";
import { CallToAction } from "@/components/site/call-to-action";
import { SmartLink } from "@/components/site/smart-link";
import { primaryCta } from "@/content/site";

export default function ServicesPage() {
  const meta = getPageMeta("/servicos/");
  return (
    <>
      <PageHero
        breadcrumbs={meta.breadcrumbs}
        eyebrow="Soluções"
        title="Estratégia, marketing, conteúdo, IA e CRM — conectados."
        intro="Cada frente resolve um problema específico da operação comercial. Juntas, formam um sistema em que o lead gerado pelo marketing chega organizado ao CRM e é acompanhado até o fechamento."
        actions={
          <>
            <ButtonLink href={primaryCta.href} arrow track="cta_primary_click">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="#integracao" variant="outline-dark">
              Ver como se conectam
            </ButtonLink>
          </>
        }
      />

      <section className="surface-light section">
        <div className="site-container grid gap-6">
          {services.map((s) => (
            <article
              key={s.slug}
              className="reveal card-light grid gap-8 p-7 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-on-light-muted">{s.number}</span>
                </div>
                <h2 className="type-h2 mt-6 text-on-light" style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2.1rem)" }}>
                  {s.name}
                </h2>
                <p className="mt-4 text-on-light-muted">{s.hero.intro}</p>
                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-on-light">Problema que resolve</dt>
                    <dd className="mt-1 text-on-light-muted">{s.solves}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-on-light">Resultado esperado</dt>
                    <dd className="mt-1 text-on-light-muted">{s.benefit}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col rounded-2xl bg-mist p-6 md:p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-on-light-muted">Principais entregas</h3>
                <ul className="mt-4 grid gap-3">
                  {s.deliverables.map((d) => (
                    <li key={d.title} className="flex gap-3 text-on-light">
                      <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-700" />
                      <span className="font-medium">{d.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-8">
                  <SmartLink href={servicePath(s.slug)} className="link-arrow text-brand-700">
                    Conhecer {s.shortName}
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </SmartLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="integracao" className="surface-dark section">
        <div className="site-container">
          <SectionHeading
            tone="dark"
            eyebrow="Como as soluções se conectam"
            title="Do primeiro clique ao pós-venda, sem lacunas."
            intro="Fluxo ilustrativo de uma operação integrada. A arquitetura final é definida no diagnóstico, de acordo com seus processos e ferramentas."
          />
          <div className="mt-16">
            <IntegrationFlow />
          </div>
        </div>
      </section>

      <CallToAction
        title="Não sabe por onde começar?"
        text="O diagnóstico mostra quais frentes fazem sentido agora e em que ordem. Conte seu cenário e indicamos o primeiro passo."
        secondary={{ label: "Conhecer o método", href: "/#metodo" }}
      />
    </>
  );
}
