import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck } from "lucide-react";
import { MkIcon } from "@/components/MkIcon";
import { getPractice, practiceAreas } from "@/content/site";
import { practiceVisual } from "@/lib/visuals";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPractice(slug);
  if (!area) return {};
  return { title: area.title, description: area.intro };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPractice(slug);
  if (!area) notFound();
  const { Icon, short } = practiceVisual(area.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/expertise"
        className="inline-flex min-h-11 items-center text-sm font-medium text-stone hover:text-turquoise"
      >
        ← Expertise
      </Link>
      <div className="mt-6 flex items-start gap-4 sm:mt-8 sm:gap-5">
        <MkIcon icon={Icon} size="lg" tone="aqua" />
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-turquoise sm:text-sm sm:tracking-[0.2em]">
            {area.signature ? "Signature practice" : short}
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            {area.title}
          </h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-stone">{area.intro}</p>
      <ul className="mt-10 space-y-3">
        {area.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-ink"
          >
            <CircleCheck
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-turquoise"
              aria-hidden
            />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="btn-primary mt-10"
      >
        Discuss this matter
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
