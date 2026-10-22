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
import { HowWeWork } from "@/components/HowWeWork";
import { IntersectionMark } from "@/components/IntersectionMark";
import { PracticeCard } from "@/components/PracticeCard";
import { MkIcon } from "@/components/MkIcon";
import {
  firm,
  heroEyebrow,
  landing,
  practiceAreas,
  whoWeAre,
} from "@/content/site";
import { orbitIcons, practiceVisual } from "@/lib/visuals";

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
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-start px-4 pb-10 pt-24 sm:px-6 md:justify-center md:pb-16 md:pt-28">
          <p className="rise-in text-balance text-xs font-medium uppercase tracking-[0.14em] text-brass sm:text-sm sm:tracking-[0.28em] sm:text-base">
            {heroEyebrow}
          </p>
          <h1 className="rise-in-delay mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:mt-4 sm:text-5xl">
            {firm.tagline}
          </h1>
          <p className="rise-in-late mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
            {landing.lead}
          </p>
          <ul className="rise-in-late mt-5 flex flex-wrap gap-2 sm:mt-7">
            {practiceAreas.map((area) => {
              const { Icon, short } = practiceVisual(area.slug);
              return (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-2 text-xs font-medium text-white/90 hover:border-turquoise hover:text-brass"
                  >
                    <Icon size={14} strokeWidth={1.8} aria-hidden />
                    {short}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="rise-in-late mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link href="/expertise" className="btn-primary w-full sm:w-auto">
              View expertise
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost w-full sm:w-auto">
              Instruct us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <ul className="grid items-stretch gap-4 sm:grid-cols-3 sm:gap-6">
            {stats.map((s) => (
              <li
                key={s.l}
                className="flex h-full items-center gap-4 rounded-2xl border border-[var(--line)] bg-white px-5 py-6"
              >
                <MkIcon icon={s.Icon} size="sm" tone="aqua" />
                <div className="min-w-0">
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
              The firm
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-4 leading-relaxed text-stone">{landing.body}</p>
            <Link href="/about" className="btn-primary mt-8">
              About the firm
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 hidden lg:mt-0 lg:block">
            <IntersectionMark />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <HowWeWork />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 max-w-2xl text-stone">
            High-quality, personalised counsel across corporate and investment
            transactions, due diligence, local counsel support, renewable energy,
            and climate and energy advisory.
          </p>
          <ul className="mt-8 grid items-stretch gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            {practiceAreas.map((area) => (
              <li key={area.slug} className="h-full">
                <PracticeCard area={area} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
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
          <h2 className="mt-8 text-balance font-display text-3xl font-semibold sm:text-4xl">
            At the intersection of corporate law and the energy transition.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {landing.intersection} {landing.close}
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Speak with the firm
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
