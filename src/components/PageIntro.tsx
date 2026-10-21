import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { MkIcon } from "./MkIcon";

export function PageIntro({
  kicker,
  icon,
  title,
  children,
  hideIconOnMobile = false,
}: {
  kicker: string;
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  hideIconOnMobile?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
      <span className={hideIconOnMobile ? "hidden sm:contents" : undefined}>
        <MkIcon icon={icon} size="md" tone="aqua" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-turquoise sm:text-sm sm:tracking-[0.2em]">
          {kicker}
        </p>
        <h1 className="mt-2 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
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
