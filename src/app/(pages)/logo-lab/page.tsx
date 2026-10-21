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
        Logo treatments
      </h1>
      <p className="mt-4 max-w-2xl text-stone">
        Live header, hero and footer use the client lockup — MK, MBOYA,
        ADVOCATES and LLP — navy on paper, white and teal on slate.
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
            Live lockup — navy
          </h2>
          <div className="mt-8">
            <BrandMark variant="refined" size="lg" />
          </div>
          <div className="mt-8 border-t border-[var(--line)] pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
              Header size
            </p>
            <BrandMark variant="refined" size="sm" />
          </div>
        </section>

        <section className="rounded-2xl bg-forest p-8 text-white">
          <h2 className="font-display text-xl font-semibold">
            Live lockup — on slate
          </h2>
          <div className="mt-8">
            <BrandMark variant="refined" light size="lg" />
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Header size
            </p>
            <BrandMark variant="refined" light size="sm" />
          </div>
        </section>
      </div>
    </div>
  );
}
