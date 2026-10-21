import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { firm, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-forest text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <BrandMark href="/" light variant="refined" size="sm" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {firm.name}. {firm.tagline} Corporate, investment and climate counsel
            in {firm.location} and across East Africa.
          </p>
          <p className="mt-3 text-sm text-white/55">{firm.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav
            .filter((l) => l.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          <Link href="/disclaimer" className="text-white/70 hover:text-brass">
            Disclaimer
          </Link>
          <Link href="/privacy" className="text-white/70 hover:text-brass">
            Privacy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6">
          <p>
            {firm.name} · Nairobi · Proposed domains {firm.domains.join(" · ")}
          </p>
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
