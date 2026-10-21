"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "./BrandMark";
import { nav } from "@/content/site";
import { navVisuals } from "@/lib/visuals";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const light = overlay && !open;

  return (
    <header
      className={`z-40 ${
        overlay
          ? `absolute inset-x-0 top-0 ${
              open
                ? "border-b border-[var(--line)] bg-white/95 backdrop-blur-md"
                : "bg-gradient-to-b from-[#19343C]/70 to-transparent"
            }`
          : "sticky top-0 border-b border-[var(--line)] bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:gap-4 sm:px-6 sm:py-4">
        <BrandMark
          href="/"
          light={light}
          variant="refined"
          size="sm"
          className="min-w-0 max-w-[calc(100%-3.25rem)]"
        />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.filter((link) => link.href !== "/").map((link) => {
            const active = pathname.startsWith(link.href);
            const Icon = navVisuals[link.href];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition ${
                  light
                    ? active
                      ? "text-brass"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "bg-aqua text-forest"
                      : "text-stone hover:text-ink"
                }`}
              >
                {Icon ? <Icon size={15} strokeWidth={1.8} aria-hidden /> : null}
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary ml-2">
            Instruct us
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg lg:hidden ${
            light ? "text-white" : "border border-[var(--line)] text-ink"
          }`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((link) => {
              const Icon = navVisuals[link.href];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-ink"
                >
                  {Icon ? (
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="text-turquoise"
                      aria-hidden
                    />
                  ) : null}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full"
            >
              Instruct us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
