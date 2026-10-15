import { services } from "@/content/services";
import { ServiceIcon } from "./service-icon";

const SIZE = 520;
const C = SIZE / 2;
const ORBIT = 172;

const nodes = services.map((s, i) => {
  const angle = (-90 + i * 72) * (Math.PI / 180);
  const x = C + ORBIT * Math.cos(angle);
  const y = C + ORBIT * Math.sin(angle);
  return { s, x, y, left: (x / SIZE) * 100, top: (y / SIZE) * 100 };
});

/**
 * Hero illustration: the five service fronts orbiting and feeding the
 * client's commercial operation. Decorative — the same information is in the page text.
 */
export function EcosystemVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[520px] select-none">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <radialGradient id="eco-core" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgb(168 116 245)" />
            <stop offset="100%" stopColor="rgb(79 0 109)" />
          </radialGradient>
          <radialGradient id="eco-halo">
            <stop offset="0%" stopColor="rgb(122 43 219 / 0.45)" />
            <stop offset="100%" stopColor="rgb(122 43 219 / 0)" />
          </radialGradient>
          <linearGradient id="eco-spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(79 227 193 / 0.9)" />
            <stop offset="100%" stopColor="rgb(196 161 255 / 0.9)" />
          </linearGradient>
        </defs>

        <circle cx={C} cy={C} r={250} fill="url(#eco-halo)" />
        <circle cx={C} cy={C} r={240} stroke="rgb(255 255 255 / 0.06)" />

        {nodes.map(({ s, x, y }) => (
          <line
            key={`spoke-${s.slug}`}
            x1={x}
            y1={y}
            x2={C}
            y2={C}
            stroke="url(#eco-spoke)"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        ))}

        <circle cx={C} cy={C} r={70} fill="url(#eco-core)" />
        <circle cx={C} cy={C} r={70} stroke="rgb(255 255 255 / 0.25)" />
        <text x={C} y={C - 6} textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="inherit">
          Sua operação
        </text>
        <text x={C} y={C + 14} textAnchor="middle" fill="rgb(237 226 255)" fontSize="15" fontWeight="700" fontFamily="inherit">
          comercial
        </text>

        {nodes.map(({ s, x, y }) => (
          <circle key={`node-${s.slug}`} cx={x} cy={y} r={5} fill="rgb(79 227 193)" />
        ))}
      </svg>

      {/* Moving parts live in HTML layers animated with transform/opacity only,
          so the compositor runs them without repainting the SVG every frame. */}
      <div className="orbit-spin absolute inset-0">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full" fill="none">
          <circle cx={C} cy={C} r={ORBIT} stroke="rgb(196 161 255 / 0.28)" strokeDasharray="2 10" strokeLinecap="round" />
        </svg>
      </div>
      <div className="orbit-spin-reverse absolute inset-0">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full" fill="none">
          <circle cx={C} cy={C} r={112} stroke="rgb(255 255 255 / 0.09)" strokeDasharray="40 18" />
        </svg>
      </div>
      {nodes.map(({ s, left, top }, i) => (
        <span
          key={`pulse-${s.slug}`}
          className="pulse-dot absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/50"
          style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * 0.55}s` }}
        />
      ))}

      {nodes.map(({ s, left, top }) => (
        <div
          key={s.slug}
          className="absolute flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-ink-800 px-3 py-1.5 text-[0.7rem] font-semibold text-on-dark shadow-lg sm:text-xs"
          style={{ left: `${left}%`, top: `calc(${top}% + 14px)` }}
        >
          <ServiceIcon name={s.icon} className="h-3.5 w-3.5 text-brand-300" />
          {s.shortName}
        </div>
      ))}
    </div>
  );
}
