import Image from "next/image";
import Link from "next/link";

export type LogoVariant = "original" | "inverted" | "refined";

const wrapClass = {
  sm: "max-w-[min(100%,12.5rem)]",
  md: "max-w-[min(100%,16rem)]",
  lg: "w-full max-w-[min(100%,22rem)] sm:max-w-[26rem] lg:max-w-[30rem]",
} as const;

const imageClass = {
  sm: "h-14 w-auto max-h-14 sm:h-16 sm:max-h-16",
  md: "h-16 w-auto sm:h-[4.5rem]",
  lg: "h-auto w-full max-h-[9.5rem] sm:max-h-[11rem] lg:max-h-[12.5rem]",
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
  const src =
    variant === "original"
      ? "/logo/original.png"
      : light || variant === "inverted"
        ? "/logo/lockup-light.png"
        : "/logo/lockup-navy.png";

  return (
    <Link
      href={href}
      className={`group inline-flex min-w-0 items-center leading-none ${wrapClass[size]} ${className}`}
      aria-label="MK Mboya Advocates LLP home"
    >
      <Image
        src={src}
        alt="MK Mboya Advocates LLP"
        width={880}
        height={349}
        className={`${imageClass[size]} object-contain object-left transition group-hover:opacity-90`}
        priority
      />
    </Link>
  );
}
