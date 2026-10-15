import { journeySteps } from "@/content/site";

/**
 * Commercial journey from acquisition to analysis. Rendered as an ordered list;
 * the animated connector is decorative and the content reads fine without motion.
 */
export function IntegrationFlow() {
  return (
    <div className="relative">
      {/* Desktop horizontal connector; the travelling highlight is a transform-only animation */}
      <div aria-hidden className="absolute left-[2%] right-[14%] top-[21px] hidden h-0.5 overflow-hidden rounded-full bg-white/10 lg:block">
        <span className="flow-travel absolute inset-0">
          <span className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent via-signal to-transparent" />
        </span>
      </div>

      <ol className="relative grid gap-0 lg:grid-cols-6 lg:gap-5">
        {journeySteps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
            {/* Mobile vertical connector */}
            {i < journeySteps.length - 1 && (
              <span aria-hidden className="absolute bottom-0 left-[21px] top-11 w-px bg-gradient-to-b from-signal/60 to-white/10 lg:hidden" />
            )}
            <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-signal/40 bg-ink-900 text-sm font-bold text-signal lg:mx-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="lg:mt-6">
              <h3 className="text-base font-bold text-on-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{step.text}</p>
              <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.7rem] font-semibold text-brand-300">
                {step.powered}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
