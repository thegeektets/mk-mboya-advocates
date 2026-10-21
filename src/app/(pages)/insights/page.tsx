import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { MkIcon } from "@/components/MkIcon";
import { PageIntro } from "@/components/PageIntro";
import { insightsSources } from "@/content/site";
import { insightVisuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Published commentary in Mail & Guardian, Business Daily Africa and Power Shift Africa.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        kicker="Insights"
        icon={Newspaper}
        title="Writing and commentary"
      >
        Commentary and analysis on corporate, climate and energy issues,
        published in Mail & Guardian, Business Daily Africa and Power Shift
        Africa.
      </PageIntro>
      <ul className="mt-12 grid items-stretch gap-6 sm:grid-cols-3">
        {insightsSources.map((item) => {
          const Icon = insightVisuals[item.outlet] ?? Newspaper;
          return (
            <li
              key={item.outlet}
              className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <MkIcon icon={Icon} size="md" tone="aqua" />
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">
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
