import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro kicker="Legal" icon={Scale} title="Disclaimer">
        Content on this site is general information about {firm.name} and its
        practice areas. It is not legal advice and does not create an
        advocate–client relationship. Formal instructions are accepted only
        after conflict checks and an engagement letter.
      </PageIntro>
      <p className="mt-8 leading-relaxed text-stone">
        Kenya-qualified advocates. Nothing here is an advertisement of
        litigation outcomes.
      </p>
    </div>
  );
}
