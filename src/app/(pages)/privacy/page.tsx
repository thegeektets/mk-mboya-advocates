import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro kicker="Legal" icon={Shield} title="Privacy">
        This website is a public brochure for {firm.name}. The contact form is
        processed in the browser and turned into a mailto draft — it does not
        currently write to a database or a third-party email API.
      </PageIntro>
      <p className="mt-8 leading-relaxed text-stone">
        A full privacy notice (lawful bases, retention, cookies, analytics) will
        be added before any tracking or hosted form backend is switched on.
      </p>
    </div>
  );
}
