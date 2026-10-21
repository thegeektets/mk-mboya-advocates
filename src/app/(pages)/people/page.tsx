import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Leaf } from "lucide-react";
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

      <article className="mt-12 max-w-2xl rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-8">
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
              <li key={c} className="flex items-center gap-3 text-sm text-ink">
                {Icon ? <MkIcon icon={Icon} size="xs" tone="aqua" /> : null}
                <span>{c}</span>
              </li>
            );
          })}
        </ul>
      </article>

      <Link href="/contact" className="btn-primary mt-8">
        Contact chambers
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
