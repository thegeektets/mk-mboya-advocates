import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileStack,
  Landmark,
  Leaf,
  Rocket,
  Search,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { MoleculeField } from "@/components/MoleculeField";
import { BrandMark } from "@/components/BrandMark";
import {
  firm,
  heroEyebrow,
  landing,
  practiceAreas,
  values,
  whoWeAre,
} from "@/content/site";

const ICONS = [Briefcase, Search, Landmark, Rocket, Leaf, FileStack];

export default function HomePage() {
  return (
    <>
      <SiteHeader overlay />
      <section className="relative min-h-[100svh] overflow-hidden bg-forest">
        <div className="hero-media absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,226,189,0.18),transparent_55%),linear-gradient(160deg,#19343C_0%,#244a54_48%,#19343C_100%)]" />
        <MoleculeField />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19343C]/88 via-[#19343C]/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:pb-24">
          <div className="rise-in">
            <BrandMark light variant="inverted" size="lg" />
          </div>
          <p className="rise-in-delay mt-6 text-sm font-medium uppercase tracking-[0.28em] text-brass sm:text-base">
            {heroEyebrow}
          </p>
          <h1 className="rise-in-delay mt-6 max-w-2xl font-display text-3xl font-semibold text-white sm:text-5xl">
            {firm.tagline}
          </h1>
          <p className="rise-in-late mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {landing.lead}
          </p>
          <div className="rise-in-late mt-8 flex flex-wrap gap-3">
            <Link
              href="/expertise"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm"
            >
              View expertise
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Instruct us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <ul className="grid gap-6 sm:grid-cols-3">
            {[
              { n: String(practiceAreas.length), l: "Practice areas" },
              { n: "KE + EA", l: "Kenya and East Africa" },
              { n: "Boutique", l: "Founder-led, of-counsel network" },
            ].map((s) => (
              <li
                key={s.l}
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-6 py-6"
              >
                <p className="font-display text-2xl font-semibold text-ink">
                  {s.n}
                </p>
                <p className="mt-1 text-sm text-stone">{s.l}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-4 leading-relaxed text-stone">{landing.body}</p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-turquoise hover:underline"
            >
              About the firm
              <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2 lg:mt-12">
            {values.map((v) => (
              <li
                key={v}
                className="rounded-full border border-[var(--line)] bg-aqua px-4 py-2 text-sm font-medium text-forest"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 max-w-xl text-stone">
            Areas of expertise — each written from the client’s problem, not the
            service name.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {practiceAreas.map((area, i) => {
              const Icon = ICONS[i] ?? Briefcase;
              return (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group flex gap-4 rounded-2xl p-1"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua text-forest">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink group-hover:text-canopy">
                        {area.title}
                        {area.signature ? (
                          <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[0.16em] text-turquoise">
                            Signature
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone">
                        {area.intro.length > 180
                          ? `${area.intro.slice(0, 180)}…`
                          : area.intro}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Leaf className="text-brass" size={28} />
          <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
            At the intersection of corporate law and the energy transition.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {landing.intersection} {landing.close}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-white"
          >
            Speak with the firm
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
