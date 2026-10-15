import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", dark ? "text-brand-300" : "text-brand-700")}>{eyebrow}</p>
      )}
      <Heading id={id} className={cn("type-h2", dark ? "text-on-dark" : "text-on-light")}>
        {title}
      </Heading>
      {intro && (
        <p className={cn("type-lead mt-5", dark ? "text-on-dark-muted" : "text-on-light-muted")}>{intro}</p>
      )}
    </div>
  );
}
