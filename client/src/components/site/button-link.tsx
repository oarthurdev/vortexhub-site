import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartLink } from "./smart-link";

// Static class names so Tailwind keeps them (dynamic `btn-${variant}` would be purged).
const variants = {
  primary: "btn-primary",
  "outline-dark": "btn-outline-dark",
  "outline-light": "btn-outline-light",
} as const;

type Variant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  arrow?: boolean;
  /** Analytics event name, see lib/analytics.ts */
  track?: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  track,
  className,
}: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      data-track={track}
      className={cn("btn", variants[variant], size === "sm" && "btn-sm", className)}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="icon-shift h-4 w-4" />}
    </SmartLink>
  );
}
