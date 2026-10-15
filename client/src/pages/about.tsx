import kommoPartner from "@assets/kommo-parceiro_1753380577680.png";
import { company, differentials, primaryCta } from "@/content/site";
import { getPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { CallToAction } from "@/components/site/call-to-action";

const principles = [
  {
    title: "Estratégia",
    text: "Entender como a empresa vende e onde estão os gargalos antes de propor qualquer ferramenta.",
  },
  {
    title: "Execução",
    text: "Colocar campanhas, conteúdos, CRM e automações para funcionar — não apenas recomendar.",
  },
  {
    title: "Tecnologia",
    text: "Usar IA, integrações e automação onde elas liberam tempo e evitam perda de oportunidades.",
  },
];

export default function AboutPage() {
  const meta = getPageMeta("/sobre/");
  return (
    <>
      <PageHero
        breadcrumbs={meta.breadcrumbs}
        eyebrow="Sobre a Vortex Hub"
        title="Um hub que conecta estratégia, tecnologia e operação comercial."
        intro="A Vortex Hub nasceu para organizar o crescimento de oportunidades. Reunimos, em um só parceiro, as frentes que normalmente ficam espalhadas entre agência, consultoria e implementadores de software."
        actions={
          <ButtonLink href={primaryCta.href} arrow track="cta_primary_click">
            {primaryCta.label}
          </ButtonLink>
        }
      />

      <section className="surface-light section">
        <div className="site-container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Por que um hub"
            title="Crescer exige que as áreas trabalhem juntas."
            intro="Marketing gera contatos, o comercial atende, a tecnologia registra e automatiza. Quando cada parte é tratada isoladamente, o cliente sente a desconexão — e a empresa perde negócios sem perceber."
          />
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {principles.map((p, i) => (
              <div key={p.title} className="reveal card-light flex gap-5 p-6">
                <span className="text-sm font-bold tabular-nums text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="type-h3 text-on-light">{p.title}</h3>
                  <p className="mt-2 text-on-light-muted">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark section relative isolate overflow-hidden">
        <div aria-hidden className="glow-brand absolute -right-40 top-0 -z-10 h-[560px] w-[560px] opacity-60" />
        <div className="site-container">
          <p className="eyebrow text-brand-300">Nossa missão</p>
          <blockquote className="mt-6 max-w-4xl text-[clamp(1.4rem,1.1rem+1.4vw,2.2rem)] font-semibold leading-snug tracking-tight text-on-dark">
            “{company.mission}”
          </blockquote>
        </div>
      </section>

      <section className="section bg-white text-on-light">
        <div className="site-container">
          <SectionHeading eyebrow="Diferenciais" title="O que muda ao trabalhar com a Vortex Hub." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {differentials.map((d) => (
              <article key={d.title} className="reveal card-light p-7 md:p-8">
                <h3 className="type-h3">{d.title}</h3>
                <p className="mt-3 text-on-light-muted">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-light section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Metodologia"
            title="Como um projeto acontece."
            intro="Do primeiro diagnóstico ao acompanhamento, cada etapa tem um objetivo claro. Prazos e investimento são definidos no escopo."
          />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="section bg-white text-on-light">
        <div className="site-container grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <img src={kommoPartner} alt="Kommo partner" width={318} height={120} loading="lazy" className="h-20 w-auto" />
          <div>
            <h2 className="type-h3">Parceria oficial com a Kommo</h2>
            <p className="mt-3 max-w-2xl text-on-light-muted">
              Somos parceiros oficiais Kommo e implementamos o CRM de acordo com o processo comercial de cada cliente —
              com configuração, treinamento da equipe e automações.
            </p>
            <ButtonLink href="/servicos/kommo-crm/" variant="outline-light" arrow className="mt-6">
              Implementação de Kommo CRM
            </ButtonLink>
          </div>
        </div>
      </section>

      <CallToAction
        title="Vamos organizar o crescimento da sua empresa?"
        text="Conte qual é o seu desafio. A primeira conversa serve para entender o cenário e indicar o melhor ponto de partida."
        secondary={{ label: "Ver soluções", href: "/servicos/" }}
      />
    </>
  );
}
