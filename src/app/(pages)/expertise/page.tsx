import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { PracticeCard } from "@/components/PracticeCard";
import { practiceAreas } from "@/content/site";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Corporate, M&A and investment, local counsel, land rights, start-up advisory, climate and energy law, and company secretarial services.",
};

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro kicker="What we do" icon={Layers} title="Areas of expertise">
        High-quality, personalised counsel across corporate and investment
        transactions, due diligence, local counsel support, renewable energy,
        and climate and energy advisory.
      </PageIntro>
      <ul className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        {practiceAreas.map((area) => (
          <li key={area.slug} className="h-full">
            <PracticeCard area={area} />
          </li>
        ))}
      </ul>
    </div>
  );
}
