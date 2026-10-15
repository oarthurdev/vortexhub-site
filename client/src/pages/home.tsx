import { AlertTriangle, ArrowRight, Check, Clock, Mail, MapPin, Timer } from "lucide-react";
import kommoPartner from "@assets/kommo-parceiro_1753380577680.png";
import { applications, company, differentials, generalFaq, mailto, primaryCta } from "@/content/site";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { EcosystemVisual } from "@/components/site/ecosystem-visual";
import { ServiceGrid } from "@/components/site/service-grid";
import { IntegrationFlow } from "@/components/site/integration-flow";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { FaqList } from "@/components/site/faq-list";
import { KommoForm } from "@/components/site/kommo-form";
import { SmartLink } from "@/components/site/smart-link";

function Hero() {
  return (
    <section
      id="inicio"
      className="surface-dark relative isolate overflow-hidden pb-14 pt-[calc(var(--header-h)+2.5rem)] md:pb-20 md:pt-[calc(var(--header-h)+4rem)]"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="glow-brand absolute -right-32 top-0 -z-10 h-[680px] w-[680px] opacity-80" />
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <p className="eyebrow mb-6 text-brand-300">Hub de crescimento comercial</p>
          <h1 className="type-display text-on-dark">
            Transforme oportunidades em{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-signal bg-clip-text text-transparent">
              crescimento organizado.
            </span>
          </h1>
          <p className="type-lead mt-7 max-w-xl text-on-dark-muted">
            A Vortex Hub conecta estratégia comercial, marketing digital, CRM, inteligência artificial e automações para
            que nenhuma oportunidade se perca entre o primeiro contato e o fechamento.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} arrow track="cta_primary_click">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="#solucoes" variant="outline-dark">
              Explorar soluções
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-on-dark-muted">
            Para empresas que querem crescer com processo — não com improviso.
          </p>
        </div>
        <EcosystemVisual />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Credenciais" className="border-y border-white/10 bg-ink-900">
      <div className="site-container grid gap-6 py-7 xl:grid-cols-[auto_1fr] xl:items-center xl:gap-10">
        <div className="flex items-center gap-4">
          <img src={kommoPartner} alt="Kommo partner" width={106} height={40} className="h-10 w-auto" />
          <p className="text-sm leading-snug text-on-dark">
            <span className="font-semibold">{company.kommoPartner.title}</span>
            <br />
            <span className="text-on-dark-muted">{company.kommoPartner.subtitle}</span>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-on-dark-muted xl:justify-end">
          {services.map((s) => (
            <li key={s.slug} className="inline-flex items-center gap-2">
              <Check aria-hidden className="h-4 w-4 text-signal" />
              {s.shortName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const symptoms = [
  "Leads chegam por anúncios, redes e WhatsApp, mas ninguém sabe de onde vieram nem em que etapa estão.",
  "O atendimento depende da memória de cada vendedor, e o follow-up fica para depois.",
  "Mídia, conteúdo e CRM são contratados separadamente e não compartilham informação.",
];

function Approach() {
  return (
    <section id="sobre" className="surface-light section">
      <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Por que integrar"
            title="Quando marketing, vendas e tecnologia não conversam, oportunidades escapam."
          />
          <ul className="mt-10 grid gap-4">
            {symptoms.map((s) => (
              <li key={s} className="reveal flex gap-4 rounded-2xl border border-on-light/10 bg-white p-5">
                <AlertTriangle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                <p className="text-on-light-muted">{s}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pt-14">
          <p className="type-lead text-on-light">
            A Vortex Hub atua como um <strong className="font-bold text-brand-700">hub</strong>: um único parceiro
            que olha para a sua operação comercial de ponta a ponta e conecta as peças — da estratégia à automação.
          </p>
          <p className="mt-5 text-on-light-muted">
            Em vez de contratar agência, consultoria e implementador de CRM separadamente, você tem uma equipe que
            desenha o processo, gera a demanda, organiza o funil e automatiza o que for repetitivo — com cada frente
            sabendo o que a outra está fazendo.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {differentials.map((d) => (
              <div key={d.title} className="reveal border-t-2 border-brand-600 pt-4">
                <dt className="font-bold text-on-light">{d.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-on-light-muted">{d.text}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink href="/sobre/" variant="outline-light" arrow className="mt-10">
            Conhecer a Vortex Hub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solucoes" className="section bg-white text-on-light">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Ecossistema de soluções"
            title="Cinco frentes que funcionam como um só sistema."
            intro="Contrate a frente de que você precisa agora; quando for hora de expandir, as outras já estão conectadas."
          />
          <ButtonLink href="/servicos/" variant="outline-light" arrow className="shrink-0 self-start md:self-auto">
            Ver todas as soluções
          </ButtonLink>
        </div>
        <div className="mt-14">
          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}

function Integration() {
  return (
    <section id="integracao" className="surface-dark section relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <div className="site-container">
        <SectionHeading
          tone="dark"
          eyebrow="Integração"
          title="Uma jornada comercial conectada, do primeiro clique ao pós-venda."
          intro="Veja como as frentes se encadeiam em um fluxo típico. Cada etapa alimenta a próxima com dados, para que o time comercial atue com contexto."
        />
        <div className="mt-16">
          <IntegrationFlow />
        </div>
        <p className="mt-12 max-w-2xl border-l-2 border-signal/60 pl-4 text-sm text-on-dark-muted">
          Fluxo ilustrativo. A arquitetura final depende dos processos, canais e ferramentas de cada empresa e é definida
          no diagnóstico.
        </p>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="surface-light section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um método claro, do diagnóstico ao acompanhamento."
          intro="Cada projeto segue as mesmas etapas, para que você saiba o que esperar em cada momento. Prazos e investimento são definidos no escopo, antes da implementação."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="aplicacoes" className="section bg-white text-on-light">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Aplicações práticas"
            title="Como as frentes se combinam no dia a dia."
            intro="Cenários comuns em que estratégia, marketing, CRM e automação atuam juntos."
          />
          <span className="inline-flex shrink-0 items-center self-start rounded-full border border-on-light/15 px-3 py-1 text-xs font-semibold text-on-light-muted md:self-auto">
            Exemplos conceituais — não são cases de clientes
          </span>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {applications.map((a) => (
            <article key={a.title} className="reveal card-light flex flex-col p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                {a.kind === "case" ? "Case" : "Exemplo"}
              </p>
              <h3 className="type-h3 mt-3">{a.title}</h3>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold">Contexto</dt>
                  <dd className="mt-1 text-on-light-muted">{a.context}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Desafio</dt>
                  <dd className="mt-1 text-on-light-muted">{a.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Solução típica</dt>
                  <dd className="mt-1 text-on-light-muted">{a.solution}</dd>
                </div>
              </dl>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Frentes envolvidas">
                {a.fronts.map((f) => (
                  <li key={f} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="surface-light section">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns antes de começar."
          intro={
            <>
              Não encontrou o que procurava?{" "}
              <a href={mailto("Dúvida sobre os serviços")} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                Escreva para a gente
              </a>
              .
            </>
          }
        />
        <FaqList items={generalFaq} />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="surface-dark section relative isolate overflow-hidden">
      <div aria-hidden className="glow-brand absolute -left-40 bottom-0 -z-10 h-[620px] w-[620px] opacity-70" />
      <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
          <SectionHeading
            tone="dark"
            eyebrow="Vamos conversar"
            title="Conte qual é o seu desafio comercial."
            intro="Explique em poucas linhas o momento da sua empresa. A partir dessa conversa, indicamos o melhor ponto de partida — seja ele estratégia, mídia, CRM ou automação."
          />
          <ul className="mt-10 grid gap-5 text-on-dark-muted">
            <li className="flex items-start gap-3">
              <Mail aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
              <a href={mailto()} data-track="email_click" className="hover:text-on-dark">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
              {company.hours}
            </li>
            <li className="flex items-start gap-3">
              <Timer aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
              {company.responseTime}
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
              <span>
                {company.address.street}
                <br />
                {company.address.complement}
              </span>
            </li>
          </ul>
          <SmartLink href="/contato/" className="link-arrow mt-8 text-sm text-brand-300">
            Como funciona o primeiro contato <ArrowRight aria-hidden className="h-4 w-4" />
          </SmartLink>
        </div>
        <KommoForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Approach />
      <Solutions />
      <Integration />
      <Method />
      <Applications />
      <Faq />
      <FinalCta />
    </>
  );
}
