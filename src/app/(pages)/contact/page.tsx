import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${firm.name} in ${firm.location}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-turquoise">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Instruct the firm
      </h1>
      <p className="mt-4 max-w-xl text-stone">
        A simple form, or write directly. Physical chambers / P.O. Box will be
        added once secured — the outline leaves the office address open.
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
        <aside>
          <h2 className="font-display text-xl font-semibold text-ink">
            Chambers
          </h2>
          <p className="mt-3 text-stone">{firm.location}</p>
          <p className="mt-2 text-stone">
            <a className="hover:text-turquoise" href={`mailto:${firm.email}`}>
              {firm.email}
            </a>
          </p>
          <p className="mt-2 text-xs text-stone">{firm.emailNote}</p>
          <p className="mt-6 text-sm text-stone">
            Phone number is not in the August 2026 outline and is not invented
            here.
          </p>
        </aside>
      </div>
    </div>
  );
}
