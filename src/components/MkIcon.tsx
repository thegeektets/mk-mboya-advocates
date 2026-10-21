import type { LucideIcon } from "lucide-react";

const sizes = {
  xs: "h-8 w-8 rounded-lg",
  sm: "h-11 w-11 rounded-xl",
  md: "h-14 w-14 rounded-2xl",
  lg: "h-[4.5rem] w-[4.5rem] rounded-[1.35rem]",
  xl: "h-24 w-24 rounded-[1.75rem]",
} as const;

const iconPx = { xs: 15, sm: 20, md: 26, lg: 34, xl: 44 } as const;

const tones = {
  aqua: "bg-aqua text-forest ring-1 ring-turquoise/30",
  forest: "bg-forest text-brass ring-1 ring-white/10",
  ghost: "bg-white/12 text-white ring-1 ring-turquoise/45 backdrop-blur-sm",
  white: "bg-white text-forest shadow-sm ring-1 ring-[var(--line)]",
  brass: "bg-turquoise text-black shadow-[0_0_40px_rgba(0,226,189,0.35)]",
} as const;

export function MkIcon({
  icon: Icon,
  size = "md",
  tone = "aqua",
  className = "",
}: {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <Icon size={iconPx[size]} strokeWidth={1.7} aria-hidden />
    </span>
  );
}
