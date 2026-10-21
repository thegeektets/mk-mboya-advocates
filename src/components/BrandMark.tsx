import Image from "next/image";
import Link from "next/link";
import { FirmLockup } from "./FirmLockup";

export type LogoVariant = "original" | "inverted" | "refined";

export function BrandMark({
  href = "/",
  light = false,
  variant = "refined",
  size = "md",
}: {
  href?: string;
  light?: boolean;
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg";
}) {
  const heights = { sm: 40, md: 48, lg: 168 };

  if (variant === "refined") {
    return (
      <Link
        href={href}
        className="group inline-flex max-w-full items-center leading-none"
        aria-label="MK Mboya Advocates LLP home"
      >
        <FirmLockup
          tone={light ? "light" : "navy"}
          layout={size === "lg" ? "stacked" : "horizontal"}
          height={heights[size]}
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
