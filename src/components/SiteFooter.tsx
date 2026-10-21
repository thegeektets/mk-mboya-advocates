import Link from "next/link";
import { Mail, MapPinned } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { firm, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-forest text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="min-w-0">
          <BrandMark href="/" light variant="refined" size="sm" className="min-w-0" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {firm.name}. {firm.tagline} Corporate, investment and climate counsel
            in {firm.location} and across East Africa.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/55">
            <MapPinned size={14} aria-hidden />
            {firm.location}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-white/55">
            <Mail size={14} aria-hidden />
            {firm.email}
          </p>
        </div>
        <nav className="flex flex-col gap-1 text-sm sm:items-end">
          {nav
            .filter((l) => l.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-10 items-center text-white/70 hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          <Link
            href="/disclaimer"
            className="inline-flex min-h-10 items-center text-white/70 hover:text-brass"
          >
            Disclaimer
          </Link>
          <Link
            href="/privacy"
            className="inline-flex min-h-10 items-center text-white/70 hover:text-brass"
          >
            Privacy
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {firm.name} · {firm.location}
          </p>
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
