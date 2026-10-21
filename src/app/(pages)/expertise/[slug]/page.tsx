import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getPractice, practiceAreas } from "@/content/site";

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

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/expertise"
        className="text-sm font-medium text-stone hover:text-turquoise"
      >
        ← Expertise
      </Link>
      {area.signature ? (
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
          Signature practice
        </p>
      ) : (
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
          Practice
        </p>
      )}
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        {area.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-stone">{area.intro}</p>
      <ul className="mt-10 space-y-3">
        {area.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-ink"
          >
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="btn-primary mt-10 inline-flex items-center gap-2 px-5 py-3 text-sm"
      >
        Discuss this matter
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
