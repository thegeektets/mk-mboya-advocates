import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { IntersectionMark } from "@/components/IntersectionMark";
import { MkIcon } from "@/components/MkIcon";
import { PageIntro } from "@/components/PageIntro";
import { firm, landing, whoWeAre } from "@/content/site";
import { valueVisuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "About",
  description: whoWeAre.p1,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro kicker={firm.location} icon={Building2} title="About the firm">
        <span className="block font-medium text-turquoise">{firm.tagline}</span>
        <span className="mt-4 block">{whoWeAre.p1}</span>
        <span className="mt-4 block text-base">{whoWeAre.p2}</span>
      </PageIntro>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
        <IntersectionMark />
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why we exist
          </h2>
          <p className="mt-3 leading-relaxed text-stone">{landing.body}</p>
          <p className="mt-4 leading-relaxed text-stone">
            {landing.intersection}
          </p>
        </section>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          How we work
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone">
          {landing.close}
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {valueVisuals.map((v) => (
            <li
              key={v.label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--line)] bg-white px-4 py-5"
            >
              <MkIcon icon={v.Icon} size="sm" tone="aqua" />
              <p className="text-sm font-semibold text-ink">{v.label}</p>
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
  );
}
