import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { firm, landing, values, whoWeAre } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: whoWeAre.p1,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        {firm.location}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        About the firm
      </h1>
      <p className="mt-2 text-lg font-medium text-turquoise">{firm.tagline}</p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">
        {whoWeAre.p1}
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-stone">{whoWeAre.p2}</p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why we exist
          </h2>
          <p className="mt-3 leading-relaxed text-stone">{landing.body}</p>
          <p className="mt-4 leading-relaxed text-stone">
            {landing.intersection}
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            How we work
          </h2>
          <p className="mt-3 leading-relaxed text-stone">{landing.close}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {values.map((v) => (
              <li
                key={v}
                className="rounded-full border border-[var(--line)] bg-aqua px-4 py-2 text-sm font-medium text-forest"
              >
                {v}
              </li>
            ))}
          </ul>
          <Link
            href="/people"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-turquoise"
          >
            Meet the people
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
}
