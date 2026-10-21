import type { Metadata } from "next";
import { insightsSources } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Published commentary in Mail & Guardian, Business Daily Africa and Power Shift Africa — archive forthcoming.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        Insights
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Writing and commentary
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        Space to republish existing work. Titles are not invented — the outline
        names the outlets only. Pieces will be linked here as they are cleared
        for the site.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {insightsSources.map((item) => (
          <li
            key={item.outlet}
            className="rounded-2xl border border-[var(--line)] bg-white p-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
              Forthcoming archive
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold text-ink">
              {item.outlet}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {item.blurb}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
