import { ArrowUpRight } from "lucide-react";
import kommoPartner from "@assets/kommo-parceiro_1753380577680.png";
import { services, servicePath, type Service } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "./service-icon";
import { SmartLink } from "./smart-link";

// Bento layout: two wide cards, then three; the CRM card is the dark accent.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const featured = service.slug === "kommo-crm";
  return (
    <article
      className={cn(
        "reveal group relative flex flex-col rounded-3xl p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 md:p-8",
        featured
          ? "border border-white/10 bg-ink-900 text-on-dark shadow-[0_30px_60px_-30px_rgba(79,0,109,0.8)]"
          : "card-light hover:border-brand-600/30 hover:shadow-[0_24px_48px_-28px_rgba(122,43,219,0.45)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid h-12 w-12 place-items-center rounded-2xl",
            featured ? "bg-brand-600/20 text-brand-300 ring-1 ring-brand-400/30" : "bg-brand-50 text-brand-700",
          )}
        >
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <span className={cn("text-sm font-bold tabular-nums", featured ? "text-on-dark-muted" : "text-on-light-muted")}>
          {service.number}
        </span>
      </div>

      <h3 className={cn("type-h3 mt-6", featured ? "text-on-dark" : "text-on-light")}>
        <SmartLink
          href={servicePath(service.slug)}
          className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
        >
          {service.name}
        </SmartLink>
      </h3>
      <p className={cn("mt-3 leading-relaxed", featured ? "text-on-dark-muted" : "text-on-light-muted")}>{service.summary}</p>

      <dl className={cn("mt-6 grid gap-3 text-sm", featured ? "text-on-dark-muted" : "text-on-light-muted")}>
        <div>
          <dt className={cn("font-semibold", featured ? "text-on-dark" : "text-on-light")}>Resolve</dt>
          <dd>{service.solves}</dd>
        </div>
        <div>
          <dt className={cn("font-semibold", featured ? "text-on-dark" : "text-on-light")}>Resultado esperado</dt>
          <dd>{service.benefit}</dd>
        </div>
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Exemplos de entregas">
        {service.examples.map((ex) => (
          <li
            key={ex}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              featured ? "border border-white/10 bg-white/5 text-on-dark" : "bg-mist text-on-light",
            )}
          >
            {ex}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <span
          aria-hidden
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold",
            featured ? "text-brand-300" : "text-brand-700",
          )}
        >
          Conhecer solução
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
        {featured && (
          <img src={kommoPartner} alt="Kommo partner" width={106} height={40} loading="lazy" className="h-10 w-auto" />
        )}
      </div>
      {/* Visible focus ring for the stretched link */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-brand-400 ring-offset-2 group-has-[a:focus-visible]:ring-2" />
    </article>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
      {services.map((s, i) => (
        <ServiceCard key={s.slug} service={s} className={cn(spans[i], i === 4 && "md:col-span-2 lg:col-span-2")} />
      ))}
    </div>
  );
}
