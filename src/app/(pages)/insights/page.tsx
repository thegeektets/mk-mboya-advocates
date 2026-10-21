import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { MkIcon } from "@/components/MkIcon";
import { PageIntro } from "@/components/PageIntro";
import { insightsSources } from "@/content/site";
import { insightVisuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Published commentary in Mail & Guardian, Business Daily Africa and Power Shift Africa — archive forthcoming.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        kicker="Insights"
        icon={Newspaper}
        title="Writing and commentary"
      >
        Space to republish existing work. Titles are not invented — the outline
        names the outlets only. Pieces will be linked here as they are cleared
        for the site.
      </PageIntro>
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {insightsSources.map((item) => {
          const Icon = insightVisuals[item.outlet] ?? Newspaper;
          return (
            <li
              key={item.outlet}
              className="rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <MkIcon icon={Icon} size="md" tone="aqua" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
                Forthcoming archive
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                {item.outlet}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {item.blurb}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
