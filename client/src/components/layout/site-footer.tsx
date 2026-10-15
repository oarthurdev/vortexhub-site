import { Clock, Mail, MapPin } from "lucide-react";
import kommoPartner from "@assets/kommo-parceiro_1753380577680.png";
import { company, mailto, primaryNav } from "@/content/site";
import { services, servicePath } from "@/content/services";
import { Logo } from "@/components/site/logo";
import { SmartLink } from "@/components/site/smart-link";

const linkClass = "inline-flex min-h-[32px] items-center text-sm text-on-dark-muted transition-colors hover:text-on-dark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-on-dark">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="max-w-sm">
          <SmartLink href="/" className="inline-block rounded-xl">
            <Logo size={44} />
            <span className="sr-only"> — página inicial</span>
          </SmartLink>
          <p className="mt-6 text-sm leading-relaxed text-on-dark-muted">{company.summary}</p>
          <div className="mt-6 flex items-center gap-3">
            <img src={kommoPartner} alt="Kommo partner" width={106} height={40} loading="lazy" className="h-10 w-auto" />
            <span className="text-xs leading-snug text-on-dark-muted">
              Parceiro oficial
              <br />
              Kommo CRM
            </span>
          </div>
        </div>

        <nav aria-label="Soluções">
          <h2 className="text-sm font-bold text-on-dark">Soluções</h2>
          <ul className="mt-4 grid gap-1">
            {services.map((s) => (
              <li key={s.slug}>
                <SmartLink href={servicePath(s.slug)} className={linkClass}>
                  {s.shortName}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Institucional">
          <h2 className="text-sm font-bold text-on-dark">Empresa</h2>
          <ul className="mt-4 grid gap-1">
            <li>
              <SmartLink href="/" className={linkClass}>
                Início
              </SmartLink>
            </li>
            {primaryNav.slice(1).map((item) => (
              <li key={item.href}>
                <SmartLink href={item.href} className={linkClass}>
                  {item.label}
                </SmartLink>
              </li>
            ))}
            <li>
              <SmartLink href="/privacidade/" className={linkClass}>
                Política de privacidade
              </SmartLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-on-dark">Contato</h2>
          <address className="mt-4 grid gap-4 text-sm not-italic text-on-dark-muted">
            <a href={mailto()} data-track="email_click" className="flex items-start gap-3 hover:text-on-dark">
              <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              {company.email}
            </a>
            <p className="flex items-start gap-3">
              <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <span>
                {company.hours}
                <br />
                {company.responseTime}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <span>
                {company.address.street}
                <br />
                {company.address.complement}
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} – {company.legalTagline}. Todos os direitos reservados.
            <br className="sm:hidden" /> <span className="whitespace-nowrap">{company.legalName}</span> · CNPJ{" "}
            <span className="whitespace-nowrap">{company.cnpj}</span>
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
