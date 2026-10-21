import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Leaf } from "lucide-react";
import { MkIcon } from "@/components/MkIcon";
import { PageIntro } from "@/components/PageIntro";
import { founder, firm } from "@/content/site";
import { credentialVisuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "People",
  description: `Founder-led boutique. ${founder.framing}`,
};

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        kicker="People"
        icon={BookOpen}
        title="A founder-led boutique"
      >
        {founder.framing}
      </PageIntro>

      <article className="mt-12 max-w-2xl rounded-2xl border border-[var(--line)] bg-white p-8">
        <div className="flex items-start gap-5">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] bg-forest text-white">
            <span className="font-display text-2xl font-semibold tracking-tight">
              MK
            </span>
            <span className="absolute -right-1.5 -top-1.5">
              <MkIcon icon={Leaf} size="xs" tone="brass" />
            </span>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-turquoise">
              {founder.role}
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
              {firm.shortName}
            </h2>
            <p className="mt-1 text-sm text-stone">
              Climate and corporate counsel · Kenya and East Africa
            </p>
          </div>
        </div>
        <ul className="mt-8 space-y-3">
          {founder.credentials.map((c, i) => {
            const Icon = credentialVisuals[i]?.Icon;
            return (
              <li key={c} className="flex items-start gap-3 text-sm text-ink">
                {Icon ? <MkIcon icon={Icon} size="xs" tone="aqua" /> : null}
                <span className="pt-1.5">{c}</span>
              </li>
            );
          })}
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
