"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function BackLink({
  fallback = "/expertise",
  children = "← Back",
}: {
  fallback?: string;
  children?: ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallback);
      }}
      className="inline-flex min-h-11 items-center text-sm font-medium text-stone hover:text-turquoise"
    >
      {children}
    </button>
  );
}
