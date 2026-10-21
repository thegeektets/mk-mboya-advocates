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
        A simple form, or write directly.
      </PageIntro>
      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
        <aside className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Chambers
          </h2>
          <p className="mt-5 flex items-center gap-3 text-stone">
            <MkIcon icon={MapPinned} size="xs" tone="aqua" />
            <span>{firm.location}</span>
          </p>
          <p className="mt-4 flex items-center gap-3 text-stone">
            <MkIcon icon={Mail} size="xs" tone="aqua" />
            <a className="hover:text-turquoise" href={`mailto:${firm.email}`}>
              {firm.email}
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
