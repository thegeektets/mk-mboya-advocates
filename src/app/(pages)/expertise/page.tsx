import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { practiceAreas } from "@/content/site";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Corporate, M&A and investment, local counsel, land rights, start-up advisory, climate and energy law, and company secretarial services.",
};

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        What we do
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Areas of expertise
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        High-quality, personalised counsel. Each area leads with the client’s
        problem, then the work we actually do.
      </p>
      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {practiceAreas.map((area) => (
          <li
            key={area.slug}
            className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_1px_0_rgba(25,52,60,0.04)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
              {area.signature ? "Signature practice" : "Practice"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {area.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              {area.intro}
            </p>
            <Link
              href={`/expertise/${area.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-turquoise"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
