import { ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { getService, services, servicePath, type Service } from "@/content/services";
import { primaryCta } from "@/content/site";
import { getPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceIcon } from "@/components/site/service-icon";
import { FaqList } from "@/components/site/faq-list";
import { CallToAction } from "@/components/site/call-to-action";
import { SmartLink } from "@/components/site/smart-link";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";

function HeroAside({ service }: { service: Service }) {
  return (
    <div className="card-dark hidden p-7 lg:block">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600/20 text-brand-300 ring-1 ring-brand-400/30">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>
        <p className="text-sm font-semibold text-on-dark">O que está incluído</p>
      </div>
      <ul className="mt-6 grid gap-3">
        {service.deliverables.map((d) => (
          <li key={d.title} className="flex gap-3 text-sm text-on-dark-muted">
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
            {d.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return <NotFound />;
  const meta = getPageMeta(servicePath(service.slug));
  const related = service.related.map((r) => services.find((s) => s.slug === r)!);

  return (
    <>
      <PageHero
        breadcrumbs={meta.breadcrumbs}
        eyebrow={`${service.number} · ${service.name}`}
        title={service.hero.title}
        intro={service.hero.intro}
        actions={
          <>
            <ButtonLink href={primaryCta.href} arrow track="cta_service_click">
              Conversar sobre {service.topic}
            </ButtonLink>
            <ButtonLink href="#entregas" variant="outline-dark">
              Ver entregas
            </ButtonLink>
          </>
        }
        aside={<HeroAside service={service} />}
      />

      {/* Problem + approach */}
      <section className="surface-light section">
        <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="O problema" title="Sinais de que sua empresa precisa disso." />
            <ul className="mt-10 grid gap-4">
              {service.problems.map((p) => (
                <li key={p} className="reveal flex gap-4 rounded-2xl border border-on-light/10 bg-white p-5">
                  <CircleAlert aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                  <p className="text-on-light-muted">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-14">
            <p className="eyebrow mb-4 text-brand-700">Nossa abordagem</p>
            <p className="type-lead text-on-light">{service.approach}</p>
            {service.tools && (
              <div className="mt-10">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-on-light-muted">
                  Integrações e plataformas
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.tools.map((t) => (
                    <li key={t} className="rounded-full border border-on-light/15 bg-white px-3.5 py-1.5 text-sm font-medium text-on-light">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="entregas" className="section bg-white text-on-light">
        <div className="site-container">
          <SectionHeading eyebrow="Escopo e entregas" title="O que fazemos nesta frente." />
          <div
            className={cn(
              "mt-14 grid gap-5 sm:grid-cols-2",
              service.deliverables.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
            )}
          >
            {service.deliverables.map((d, i) => (
              <article key={d.title} className="reveal card-light p-7">
                <span className="text-sm font-bold tabular-nums text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="type-h3 mt-4">{d.title}</h3>
                <p className="mt-3 text-on-light-muted">{d.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading eyebrow="Aplicações práticas" title="Onde isso aparece no dia a dia." />
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-on-light/10 bg-on-light/10">
              {service.applications.map((a) => (
                <li key={a} className="flex gap-4 bg-white p-5">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-700" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="surface-dark section">
        <div className="site-container">
          <SectionHeading
            tone="dark"
            eyebrow="Como funciona a implementação"
            title="Etapas claras, do início ao acompanhamento."
            intro="Prazos e investimento são definidos no escopo de cada projeto, depois do diagnóstico."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((st, i) => (
              <li key={st.title} className="reveal card-dark p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-signal/40 text-sm font-bold text-signal">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-on-dark">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + related */}
      <section className="surface-light section">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading eyebrow="Perguntas frequentes" title={`Dúvidas sobre ${service.topic}.`} />
          <FaqList items={service.faq} />
        </div>

        <div className="site-container mt-24">
          <h2 className="type-h3 text-on-light">Soluções relacionadas</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((r) => (
              <SmartLink
                key={r.slug}
                href={servicePath(r.slug)}
                className="group card-light flex items-start gap-5 p-6 transition-colors hover:border-brand-600/30"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <ServiceIcon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-bold text-on-light">{r.name}</span>
                  <span className="mt-1 block text-sm text-on-light-muted">{r.summary}</span>
                </span>
                <ArrowUpRight aria-hidden className="h-5 w-5 shrink-0 text-brand-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={`Vamos conversar sobre ${service.topic}?`}
        text="Conte em poucas linhas como sua operação funciona hoje. Avaliamos o cenário e indicamos o melhor ponto de partida."
        secondary={{ label: "Ver todas as soluções", href: "/servicos/" }}
      />
    </>
  );
}
