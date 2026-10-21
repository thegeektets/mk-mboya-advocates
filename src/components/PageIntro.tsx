import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { MkIcon } from "./MkIcon";

export function PageIntro({
  kicker,
  icon,
  title,
  children,
}: {
  kicker: string;
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
      <MkIcon icon={icon} size="lg" tone="aqua" />
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
          {kicker}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
