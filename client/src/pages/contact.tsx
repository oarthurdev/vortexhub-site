import { Clock, Mail, MapPin, Timer } from "lucide-react";
import { company, mailto } from "@/content/site";
import { getPageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/page-hero";
import { KommoForm } from "@/components/site/kommo-form";

const nextSteps = [
  { title: "Você envia sua mensagem", text: "Pelo formulário ou por e-mail, contando o momento da sua empresa." },
  { title: "Entramos em contato", text: "Em horário comercial, para entender melhor o cenário e os objetivos." },
  { title: "Indicamos o ponto de partida", text: "Apresentamos as frentes recomendadas e, se fizer sentido, uma proposta de escopo." },
];

export default function ContactPage() {
  const meta = getPageMeta("/contato/");
  return (
    <section className="surface-dark relative isolate overflow-hidden pb-[var(--section-y)] pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+4.5rem)]">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="glow-brand absolute -left-40 top-20 -z-10 h-[620px] w-[620px] opacity-70" />
      <div className="site-container">
        {meta.breadcrumbs && <Breadcrumbs items={meta.breadcrumbs} />}
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16">
          <div>
            <p className="eyebrow mb-5 text-brand-300">Contato</p>
            <h1 className="type-h1 text-on-dark">Conte qual é o seu desafio comercial.</h1>
            <p className="type-lead mt-6 max-w-xl text-on-dark-muted">
              Seja para estruturar o processo de vendas, gerar demanda, implementar o Kommo CRM ou automatizar o
              atendimento, o primeiro passo é uma conversa sobre o seu cenário.
            </p>

            <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.12em] text-on-dark-muted">O que acontece depois</h2>
            <ol className="mt-5 grid gap-5">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-signal/40 text-sm font-bold text-signal">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-on-dark">{s.title}</p>
                    <p className="mt-1 text-sm text-on-dark-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.12em] text-on-dark-muted">Outros canais</h2>
            <ul className="mt-5 grid gap-4 text-on-dark-muted">
              <li className="flex items-start gap-3">
                <Mail aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <a href={mailto()} data-track="email_click" className="font-semibold text-on-dark hover:text-brand-300">
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
          </div>
          <KommoForm />
        </div>
      </div>
    </section>
  );
}
