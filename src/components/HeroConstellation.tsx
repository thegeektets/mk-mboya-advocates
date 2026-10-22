import Link from "next/link";
import { Leaf } from "lucide-react";
import { MkIcon } from "./MkIcon";
import { getPractice } from "@/content/site";
import { orbitPractices } from "@/lib/visuals";

const SIZE = 520;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 188;

function point(angle: number, radius = RADIUS) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CX + radius * Math.sin(rad),
    y: CY - radius * Math.cos(rad),
  };
}

const ANGLES = [-8, 52, 112, 172, 232, 292];

const nodes = ANGLES.map((angle, i) => {
  const practice = orbitPractices[i];
  return {
    ...point(angle),
    ...practice,
    title: getPractice(practice.slug)?.title ?? practice.short,
  };
});

const linkClass =
  "orbit-link pointer-events-auto rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

export function HeroConstellation() {
  return (
    <div className="hero-orbit pointer-events-none absolute right-[-2%] top-[46%] z-10 hidden h-[520px] w-[520px] -translate-y-1/2 md:block xl:right-[4%] xl:h-[580px] xl:w-[580px]">
      <div className="absolute inset-[36%] rounded-full bg-turquoise/10 blur-2xl" />

      <div className="orbit-spin absolute inset-0 will-change-transform">
        <div className="absolute inset-[8%] rounded-full border border-dashed border-turquoise/30" />
        <div className="absolute inset-[22%] rounded-full border border-white/10" />

        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            fill="none"
          >
            {nodes.map((node) => (
              <line
                key={node.slug}
                x1={CX}
                y1={CY}
                x2={node.x}
                y2={node.y}
                stroke="#00E2BD"
                strokeOpacity="0.28"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />
            ))}
          </svg>
        </div>

        {nodes.map((node) => (
          <Link
            key={node.slug}
            href={`/expertise/${node.slug}`}
            aria-label={node.title}
            title={node.title}
            className={`absolute ${linkClass}`}
            style={{
              left: `${(node.x / SIZE) * 100}%`,
              top: `${(node.y / SIZE) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="orbit-counter relative will-change-transform">
              <MkIcon
                icon={node.Icon}
                size="md"
                tone="ghost"
                className="orbit-mark"
              />
              <span className="orbit-caption">{node.short}</span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/expertise"
        aria-label="View all expertise"
        title="View all expertise"
        className={`icon-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${linkClass} rounded-[1.75rem]`}
      >
        <div className="icon-pulse relative">
          <MkIcon icon={Leaf} size="xl" tone="brass" className="orbit-mark" />
          <span className="orbit-caption">Expertise</span>
        </div>
      </Link>
    </div>
  );
}
