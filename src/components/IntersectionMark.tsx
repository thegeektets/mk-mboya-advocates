import { Handshake, Leaf, Scale } from "lucide-react";
import { MkIcon } from "./MkIcon";

export function IntersectionMark() {
  return (
    <figure className="relative isolate aspect-[5/4] w-full overflow-hidden rounded-[1.75rem] bg-forest shadow-[0_24px_80px_rgba(25,52,60,0.18)]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 416"
        fill="none"
        aria-hidden
      >
        <defs>
          <radialGradient id="sunGlow" cx="0" cy="0" r="1">
            <stop offset="0%" stopColor="#00E2BD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00E2BD" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="412" cy="88" r="110" fill="url(#sunGlow)" />
        <circle cx="412" cy="88" r="38" fill="#00E2BD" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={412 + Math.cos(rad) * 52}
              y1={88 + Math.sin(rad) * 52}
              x2={412 + Math.cos(rad) * 68}
              y2={88 + Math.sin(rad) * 68}
              stroke="#00E2BD"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}

        <path
          d="M40 338 H480"
          stroke="#F4F8F7"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <rect x="42" y="214" width="52" height="124" rx="8" fill="#315A65" />
        <rect x="104" y="168" width="64" height="170" rx="8" fill="#244A54" />
        <rect x="178" y="198" width="46" height="140" rx="8" fill="#315A65" />
        {[0, 1, 2, 3].flatMap((row) =>
          [0, 1].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={116 + col * 18}
              y={184 + row * 28}
              width="10"
              height="14"
              rx="2"
              fill="#00E2BD"
              opacity="0.35"
            />
          )),
        )}

        <path
          d="M318 168c0-46 58-72 92-44 28 24 24 72-8 94-42 28-84 12-84-50Z"
          fill="#00E2BD"
          opacity="0.92"
        />
        <path
          d="M360 210 C360 248 352 292 352 318"
          stroke="#19343C"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M168 250 C230 236 278 210 336 198"
          stroke="#00E2BD"
          strokeWidth="2.4"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />

        <circle cx="168" cy="250" r="5" fill="#F4F8F7" />
        <circle cx="252" cy="224" r="4" fill="#00E2BD" />
        <circle cx="336" cy="198" r="5" fill="#F4F8F7" />

        <circle cx="86" cy="86" r="3" fill="#F4F8F7" opacity="0.4" />
        <circle cx="64" cy="132" r="2" fill="#00E2BD" opacity="0.5" />
        <circle cx="248" cy="64" r="2.5" fill="#F4F8F7" opacity="0.35" />
      </svg>

      <div className="absolute bottom-5 left-5 flex gap-2">
        <MkIcon icon={Handshake} size="sm" tone="ghost" />
        <MkIcon icon={Leaf} size="sm" tone="brass" />
        <MkIcon icon={Scale} size="sm" tone="ghost" />
      </div>
      <figcaption className="sr-only">
        Abstract mark of Nairobi corporate towers meeting a sun and leaf — the
        firm’s climate and investment practice.
      </figcaption>
    </figure>
  );
}
