import vortexLogo from "@assets/468512062_1011071840777526_8774782408988115845_n_1754505856480.jpg";
import { cn } from "@/lib/utils";

/**
 * Official logo, used exactly as supplied (do not recolor, crop or replace).
 * On dark surfaces it sits on a tile matching the image's own #E3E3E3 background.
 */
export function Logo({ className, size = 44 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="inline-flex shrink-0 overflow-hidden rounded-xl bg-[#E3E3E3] ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <img src={vortexLogo} alt="" width={size} height={size} className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-[0.02em] text-on-dark">VORTEX</span>
        <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.18em] text-brand-300">HUB DE SERVIÇOS</span>
      </span>
    </span>
  );
}
