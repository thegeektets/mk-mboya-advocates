import type { Metadata } from "next";
import Link from "next/link";
import { founder, firm } from "@/content/site";

export const metadata: Metadata = {
  title: "People",
  description: `Founder-led boutique. ${founder.framing}`,
};

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        People
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        A founder-led boutique
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
        {founder.framing}
      </p>

      <article className="mt-12 max-w-2xl rounded-2xl border border-[var(--line)] bg-white p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
          {founder.role}
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          {firm.shortName}
        </h2>
        <p className="mt-2 text-sm text-stone">
          Climate and corporate counsel · Kenya and East Africa
        </p>
        <ul className="mt-6 space-y-2">
          {founder.credentials.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-stone">{founder.note}</p>
      </article>

      <p className="mt-10 max-w-xl text-sm text-stone">
        Of-counsel and network biographies will be added as they are confirmed.
        Portrait and a full CV narrative are not in the August 2026 outline.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex text-sm font-semibold text-canopy hover:text-turquoise"
      >
        Contact chambers →
      </Link>
    </div>
  );
}
