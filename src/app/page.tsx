import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  MapPinned,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroConstellation } from "@/components/HeroConstellation";
import { IntersectionMark } from "@/components/IntersectionMark";
import { PracticeCard } from "@/components/PracticeCard";
import { MkIcon } from "@/components/MkIcon";
import { BrandMark } from "@/components/BrandMark";
import {
  firm,
  heroEyebrow,
  landing,
  practiceAreas,
  whoWeAre,
} from "@/content/site";
import { orbitIcons, practiceVisual, valueVisuals } from "@/lib/visuals";

const stats = [
  { n: String(practiceAreas.length), l: "Practice areas", Icon: Layers },
  { n: "KE + EA", l: "Kenya and East Africa", Icon: MapPinned },
  { n: "Boutique", l: "Founder-led, of-counsel network", Icon: UsersRound },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader overlay />
      <section className="relative min-h-[100svh] overflow-hidden bg-forest">
        <Image
          src="/hero-nairobi.jpg"
          alt="Nairobi at dusk"
          fill
          priority
          className="hero-media object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19343C]/94 via-[#19343C]/72 to-[#19343C]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,226,189,0.18),transparent_55%)]" />
        <HeroConstellation />
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
          <ul className="rise-in-late mt-7 flex flex-wrap gap-2">
            {practiceAreas.map((area) => {
              const { Icon, short } = practiceVisual(area.slug);
              return (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/90 hover:border-turquoise hover:text-brass"
                  >
                    <Icon size={14} strokeWidth={1.8} aria-hidden />
                    {short}
                  </Link>
                </li>
              );
            })}
          </ul>
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
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Instruct us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <ul className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <li
                key={s.l}
                className="flex gap-4 rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-6"
              >
                <MkIcon icon={s.Icon} size="sm" tone="aqua" />
                <div>
                  <p className="font-display text-2xl font-semibold text-ink">
                    {s.n}
                  </p>
                  <p className="mt-1 text-sm text-stone">{s.l}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
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
          <div className="mt-10 lg:mt-0">
            <IntersectionMark />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            How we work
          </h2>
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
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 max-w-xl text-stone">
            Areas of expertise — each written from the client’s problem, not the
            service name.
          </p>
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <PracticeCard area={area} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {orbitIcons.map((Icon, i) => (
              <MkIcon
                key={i}
                icon={Icon}
                size="sm"
                tone={i === 4 ? "brass" : "ghost"}
              />
            ))}
          </div>
          <h2 className="mt-8 font-display text-3xl font-semibold sm:text-4xl">
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
