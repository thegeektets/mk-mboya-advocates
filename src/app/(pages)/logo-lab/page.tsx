import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { FirmLockup } from "@/components/FirmLockup";

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
        Logo treatments
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        The client lockup is kept. The live header uses a redrawn vector with
        every word visible: MK, MBOYA, ADVOCATES, LLP.
      </p>

      <div className="mt-12 grid gap-8">
        <section className="rounded-2xl border border-[var(--line)] bg-white p-8">
          <h2 className="font-display text-xl font-semibold">
            Client original
          </h2>
          <div className="mt-6">
            <Image
              src="/logo/original.png"
              alt="Original MK Mboya Advocates LLP lockup"
              width={900}
              height={420}
              className="mx-auto h-40 w-auto max-w-full object-contain sm:h-52"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-white p-8">
          <h2 className="font-display text-xl font-semibold">
            Live lockup — navy / leaf
          </h2>
          <p className="mt-2 text-sm text-stone">
            Same words, even weight on MBOYA and ADVOCATES, LLP rules matching
            the line.
          </p>
          <div className="mt-8">
            <FirmLockup tone="navy" layout="stacked" height={220} />
          </div>
          <div className="mt-8 border-t border-[var(--line)] pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
              Header size
            </p>
            <BrandMark variant="refined" size="md" />
          </div>
        </section>

        <section className="rounded-2xl bg-forest p-8 text-white">
          <h2 className="font-display text-xl font-semibold">
            Live lockup — on slate
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Off-white type, turquoise leaf and LLP rules.
          </p>
          <div className="mt-8">
            <FirmLockup tone="light" layout="stacked" height={220} />
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <BrandMark variant="refined" light size="md" />
          </div>
        </section>
      </div>
    </div>
  );
}
