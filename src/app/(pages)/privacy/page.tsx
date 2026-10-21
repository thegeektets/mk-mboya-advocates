import type { Metadata } from "next";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl font-semibold text-ink">Privacy</h1>
      <p className="mt-4 leading-relaxed text-stone">
        This website is a public brochure for {firm.name}. The contact form is
        processed in the browser and turned into a mailto draft — it does not
        currently write to a database or a third-party email API.
      </p>
      <p className="mt-4 leading-relaxed text-stone">
        A full privacy notice (lawful bases, retention, cookies, analytics) will
        be added before any tracking or hosted form backend is switched on.
      </p>
    </div>
  );
}
