import Image from "next/image";
import Link from "next/link";

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
  const heights = { sm: 36, md: 44, lg: 72 };
  const h = heights[size];

  if (variant === "refined") {
    return (
      <Link
        href={href}
        className="group inline-flex items-center gap-3 leading-none"
        aria-label="MK Mboya Advocates LLP home"
      >
        <Image
          src={light ? "/logo/mark-inverted.png" : "/logo/mark-original.png"}
          alt=""
          width={428}
          height={170}
          className="w-auto object-contain object-left"
          style={{ height: h, width: "auto" }}
          priority
        />
        <span className="hidden min-[420px]:flex flex-col justify-center">
          <span
            className={`text-[11px] font-semibold tracking-[0.14em] sm:text-xs ${
              light ? "text-white" : "text-navy"
            }`}
          >
            MBOYA
            <span
              className={`ml-1.5 font-medium tracking-[0.22em] ${
                light ? "text-white/80" : "text-canopy"
              }`}
            >
              ADVOCATES
            </span>
          </span>
          <span
            className={`llpline mt-1 text-[9px] font-medium tracking-[0.32em] ${
              light ? "text-turquoise" : "text-stone"
            }`}
          >
            LLP
          </span>
        </span>
      </Link>
    );
  }

  const src =
    variant === "inverted" || light
      ? "/logo/inverted.png"
      : "/logo/original-transparent.png";

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
        style={{ height: h + 8, width: "auto" }}
        priority
      />
    </Link>
  );
}
