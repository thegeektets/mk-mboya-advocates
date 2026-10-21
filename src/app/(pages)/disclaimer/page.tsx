import type { Metadata } from "next";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl font-semibold text-ink">
        Disclaimer
      </h1>
      <p className="mt-4 leading-relaxed text-stone">
        Content on this site is general information about {firm.name} and its
        practice areas. It is not legal advice and does not create an
        advocate–client relationship. Formal instructions are accepted only
        after conflict checks and an engagement letter.
      </p>
      <p className="mt-4 leading-relaxed text-stone">
        Kenya-qualified advocates. Nothing here is an advertisement of
        litigation outcomes.
      </p>
    </div>
  );
}
