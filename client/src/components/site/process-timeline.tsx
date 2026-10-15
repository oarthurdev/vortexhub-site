import { processSteps } from "@/content/site";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl border border-on-light/10 bg-on-light/10 sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step, i) => (
        <li key={step.title} className="reveal relative bg-white p-7 md:p-8">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-bold tabular-nums text-brand-700">{String(i + 1).padStart(2, "0")}</span>
            <span aria-hidden className="h-px flex-1 translate-y-[-4px] bg-gradient-to-r from-brand-600/30 to-transparent ml-4" />
          </div>
          <h3 className="type-h3 mt-5 text-on-light">{step.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-on-light-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
