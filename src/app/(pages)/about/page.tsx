import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { HowWeWork } from "@/components/HowWeWork";
import { IntersectionMark } from "@/components/IntersectionMark";
import { PageIntro } from "@/components/PageIntro";
import { firm, landing, whoWeAre } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: whoWeAre.p1,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        kicker={firm.location}
        icon={Building2}
        title="About the firm"
        hideIconOnMobile
      >
        <span className="block font-medium text-turquoise">{firm.tagline}</span>
        <span className="mt-4 block">{whoWeAre.p1}</span>
      </PageIntro>

      <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:items-center">
        <div className="hidden lg:block">
          <IntersectionMark />
        </div>
        <section>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Why we exist
          </h2>
          <p className="mt-3 leading-relaxed text-stone">{landing.body}</p>
          <p className="mt-4 leading-relaxed text-stone">
            {landing.intersection}
          </p>
        </section>
      </div>

      <section className="mt-16">
        <HowWeWork />
        <Link href="/people" className="btn-primary mt-8">
          Meet the people
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
