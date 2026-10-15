import { Bot, Compass, Database, Megaphone, PenTool, type LucideProps } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/content/services";

const icons = {
  strategy: Compass,
  marketing: Megaphone,
  content: PenTool,
  automation: Bot,
  crm: Database,
} as const;

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden strokeWidth={1.75} {...props} />;
}
