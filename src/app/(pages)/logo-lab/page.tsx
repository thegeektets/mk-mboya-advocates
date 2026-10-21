import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "Logo lab",
  robots: { index: false, follow: false },
};

export default function LogoLabPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        Internal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
        Logo &amp; colour treatments
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        Three header treatments. Live site uses <strong>C — refined</strong> on
        dark slate. Original navy/green lockup is kept as the source of truth.
      </p>

      <div className="mt-12 grid gap-8">
        <section className="rounded-2xl border border-[var(--line)] bg-white p-8">
          <h2 className="font-display text-xl font-semibold">
            A — Original navy / leaf green
          </h2>
          <div className="mt-6">
            <BrandMark variant="original" size="lg" />
          </div>
        </section>

        <section className="rounded-2xl bg-forest p-8 text-white">
          <h2 className="font-display text-xl font-semibold">
            B — Inverted on slate (MyCFO atmosphere)
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Leaf shifted from #6FBE4A to turquoise #00E2BD.
          </p>
          <div className="mt-6">
            <BrandMark variant="inverted" light size="lg" />
          </div>
        </section>

        <section className="rounded-2xl bg-forest p-8 text-white">
          <h2 className="font-display text-xl font-semibold">
            C — Refined lockup (live header)
          </h2>
          <p className="mt-2 text-sm text-white/60">
            MK + leaf mark, tighter MBOYA tracking, wider ADVOCATES, teal LLP
            rules.
          </p>
          <div className="mt-6">
            <BrandMark variant="refined" light size="lg" />
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          <figure className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <Image
              src="/logo/favicon.svg"
              alt="SVG MK favicon"
              width={64}
              height={64}
            />
            <figcaption className="mt-3 text-sm text-stone">
              SVG monogram favicon
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <Image
              src="/logo/monogram-bubbles.svg"
              alt="Bubble-inspired MK monogram"
              width={64}
              height={64}
            />
            <figcaption className="mt-3 text-sm text-stone">
              Bubble-inspired monogram (experiment)
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <Image
              src="/logo/ref-mycfo-bubbles.png"
              alt="MyCFO connected-bubble reference"
              width={64}
              height={64}
              className="rounded-lg"
            />
            <figcaption className="mt-3 text-sm text-stone">
              MyCFO bubble reference (not used as the live mark)
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  );
}
