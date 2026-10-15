import { Plus } from "lucide-react";
import type { Faq } from "@/content/site";

/** Native <details> accordion: keyboard accessible and works without JavaScript. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-on-light/10 border-y border-on-light/10">
      {items.map((item) => (
        <details key={item.q} className="faq-item group">
          <summary className="flex min-h-[64px] items-center justify-between gap-6 py-5 text-left">
            <h3 className="text-base font-semibold text-on-light md:text-lg">{item.q}</h3>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-on-light/15 text-brand-700 transition-colors group-hover:border-brand-600/50">
              <Plus aria-hidden className="faq-icon h-4 w-4" />
            </span>
          </summary>
          <div className="faq-body max-w-prose pb-6 pr-12 text-on-light-muted">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
