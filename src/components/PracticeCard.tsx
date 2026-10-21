import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeArea } from "@/content/site";
import { practiceVisual } from "@/lib/visuals";
import { MkIcon } from "./MkIcon";

export function PracticeCard({
  area,
  compact = false,
}: {
  area: PracticeArea;
  compact?: boolean;
}) {
  const { Icon, short } = practiceVisual(area.slug);

  return (
    <Link
      href={`/expertise/${area.slug}`}
      className="group flex gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[0_1px_0_rgba(25,52,60,0.04)] transition hover:-translate-y-0.5 hover:border-turquoise/40 hover:shadow-md"
    >
      <MkIcon icon={Icon} size={compact ? "sm" : "md"} tone="aqua" />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
          {area.signature ? "Signature" : short}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink group-hover:text-canopy sm:text-xl">
          {area.title}
        </h3>
        {compact ? (
          <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-stone">
            {area.intro}
          </p>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-stone">{area.intro}</p>
        )}
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-canopy">
          Read more
          <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
