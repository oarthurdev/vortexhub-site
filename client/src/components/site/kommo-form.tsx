import { Lock } from "lucide-react";
import { company, mailto } from "@/content/site";

// Lead capture form hosted by Kommo (form 1651071). Submissions go straight to the
// Vortex Hub Kommo CRM account — keep this URL exactly as provided by Kommo.
const KOMMO_FORM_SRC =
  "https://forms.kommo.com/forms/html/form_1651071_8d19d1a8ca3e77b5c3adf7c362202a4d.html?date=1755190987#%7B%22form_id%22:%221651071%22,%22form_hash%22:%228d19d1a8ca3e77b5c3adf7c362202a4d%22,%22user_origin%22:%7B%22datetime%22:%22Thu%20Aug%2014%202025%2014:03:07%20GMT-0300%20(Hor%C3%A1rio%20Padr%C3%A3o%20de%20Bras%C3%ADlia)%22,%22timezone%22:%22America/Sao_Paulo%22,%22referer%22:%22https://tayane.kommo.com/%22%7D,%22is_modal%22:false,%22success_message%22:%22%22,%22has_redirect%22:%22%22,%22is_dark_bg%22:true,%22utm%22:%7B%22source%22:%22%22,%22medium%22:%22%22,%22content%22:%22%22,%22campaign%22:%22%22,%22term%22:%22%22%7D,%22ga%22:%7B%7D,%22location%22:%22https://forms.kommo.com/rwdwlzc%22,%22dp%22:%7B%7D%7D";

export function KommoForm({ title = "Solicite seu diagnóstico" }: { title?: string }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white text-on-light shadow-[0_30px_80px_-40px_rgba(122,43,219,0.7)] ring-1 ring-white/10">
      <div className="px-6 pb-4 pt-7 sm:px-8">
        <h3 className="type-h3">{title}</h3>
        <p className="mt-2 text-sm text-on-light-muted">
          Preencha os campos abaixo. Nossa equipe retorna pelo contato informado, em horário comercial.
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-[500px]">
        {/* Placeholder visible until the third-party form paints over it */}
        <div aria-hidden className="absolute inset-0 grid place-items-center text-sm text-on-light-muted">
          Carregando formulário…
        </div>
        <iframe
          title="Formulário de contato da Vortex Hub"
          src={KOMMO_FORM_SRC}
          className="relative block h-[530px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-1.5 border-t border-on-light/10 px-6 py-4 text-xs text-on-light-muted sm:px-8">
        <span className="inline-flex items-center gap-1.5">
          <Lock aria-hidden className="h-3.5 w-3.5" /> Dados enviados diretamente ao nosso CRM.{" "}
          <a href="/privacidade/" className="underline underline-offset-2 hover:text-brand-700">
            Privacidade
          </a>
        </span>
        <span>
          Prefere e-mail?{" "}
          <a
            href={mailto("Solicitação de diagnóstico")}
            data-track="email_click"
            className="font-semibold text-brand-700 underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
        </span>
      </div>
    </div>
  );
}
