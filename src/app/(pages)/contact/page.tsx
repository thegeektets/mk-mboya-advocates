import type { Metadata } from "next";
import { Mail, MapPinned, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MkIcon } from "@/components/MkIcon";
import { PageIntro } from "@/components/PageIntro";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${firm.name} in ${firm.location}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro kicker="Contact" icon={Send} title="Instruct the firm">
        A simple form, or write directly. Physical chambers / P.O. Box will be
        added once secured — the outline leaves the office address open.
      </PageIntro>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
        <aside className="space-y-5">
          <h2 className="font-display text-xl font-semibold text-ink">
            Chambers
          </h2>
          <p className="flex items-start gap-3 text-stone">
            <MkIcon icon={MapPinned} size="xs" tone="aqua" />
            <span className="pt-1">{firm.location}</span>
          </p>
          <p className="flex items-start gap-3 text-stone">
            <MkIcon icon={Mail} size="xs" tone="aqua" />
            <a
              className="pt-1 hover:text-turquoise"
              href={`mailto:${firm.email}`}
            >
              {firm.email}
            </a>
          </p>
          <p className="text-xs text-stone">{firm.emailNote}</p>
          <p className="text-sm text-stone">
            Phone number is not in the August 2026 outline and is not invented
            here.
          </p>
        </aside>
      </div>
    </div>
  );
}
