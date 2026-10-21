import Image from "next/image";
import Link from "next/link";
import { FirmLockup } from "./FirmLockup";

export type LogoVariant = "original" | "inverted" | "refined";

const markWidth = {
  sm: "w-[min(100%,13.25rem)] sm:w-[min(100%,18rem)]",
  md: "w-[min(100%,16rem)] sm:w-[min(100%,20rem)]",
  lg: "w-[min(100%,13.75rem)] sm:w-[min(100%,18rem)] lg:w-[min(100%,21rem)]",
} as const;

export function BrandMark({
  href = "/",
  light = false,
  variant = "refined",
  size = "md",
  className = "",
}: {
  href?: string;
  light?: boolean;
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const heights = { sm: 40, md: 48, lg: 168 };

  if (variant === "refined") {
    return (
      <Link
        href={href}
        className={`group inline-flex min-w-0 items-center leading-none ${markWidth[size]} ${className}`}
        aria-label="MK Mboya Advocates LLP home"
      >
        <FirmLockup
          tone={light ? "light" : "navy"}
          layout={size === "lg" ? "stacked" : "horizontal"}
          className="h-auto w-full"
        />
      </Link>
    );
  }

  const src =
    variant === "inverted" || light
      ? "/logo/inverted.png"
      : "/logo/original.png";

  return (
    <Link
      href={href}
      className="group inline-flex items-center leading-none"
      aria-label="MK Mboya Advocates LLP home"
    >
      <Image
        src={src}
        alt="MK Mboya Advocates LLP"
        width={1024}
        height={512}
        className="w-auto object-contain object-left transition group-hover:opacity-90"
        style={{ height: heights[size], width: "auto" }}
        priority
      />
    </Link>
  );
}
