type Tone = "navy" | "light";
type Layout = "horizontal" | "stacked";

function MkLetters({
  navy,
  leaf,
  shine,
}: {
  navy: string;
  leaf: string;
  shine: string;
}) {
  const serif = "Georgia, 'Times New Roman', Times, serif";
  return (
    <g>
      <text
        x="0"
        y="104"
        fill={navy}
        fontFamily={serif}
        fontSize="108"
        fontWeight="700"
      >
        M
      </text>
      <path fill={navy} d="M106 14h22v8h6v80h-6v8h-22v-8h6V22h-6V14Z" />
      <path fill={navy} d="M130 66 180 114h-26L124 74Z" />
      <path fill={leaf} d="M126 32 164 10l18 22-40 28-16-12z" />
      <path fill={shine} d="M148 18 178 32 150 48 140 28z" />
    </g>
  );
}

export function FirmLockup({
  tone = "navy",
  layout = "horizontal",
  className = "",
  height,
}: {
  tone?: Tone;
  layout?: Layout;
  className?: string;
  height?: number;
}) {
  const navy = tone === "light" ? "#F4F8F7" : "#0B3A7A";
  const leaf = tone === "light" ? "#00E2BD" : "#6FBE4A";
  const shine = tone === "light" ? "rgba(255,255,255,0.35)" : "#8ED45A";
  const muted = tone === "light" ? "rgba(244,248,247,0.88)" : "#0B3A7A";
  const serif = "Georgia, 'Times New Roman', Times, serif";

  if (layout === "stacked") {
    return (
      <svg
        viewBox="0 0 460 250"
        className={`max-w-full ${className}`}
        role="img"
        aria-label="MK Mboya Advocates LLP"
        style={{ height, width: "auto" }}
      >
        <g transform="translate(138,4) scale(1.08)">
          <MkLetters navy={navy} leaf={leaf} shine={shine} />
        </g>
        <text
          x="230"
          y="172"
          textAnchor="middle"
          fill={navy}
          fontFamily={serif}
          fontSize="26"
        >
          <tspan fontWeight="700" letterSpacing="3.4">
            MBOYA
          </tspan>
          <tspan dx="16" fontSize="18" fontWeight="600" letterSpacing="5.4">
            ADVOCATES
          </tspan>
        </text>
        <line x1="108" y1="196" x2="186" y2="196" stroke={leaf} strokeWidth="2" />
        <text
          x="230"
          y="202"
          textAnchor="middle"
          fill={navy}
          fontFamily={serif}
          fontSize="14"
          fontWeight="600"
          letterSpacing="7"
        >
          LLP
        </text>
        <line x1="274" y1="196" x2="352" y2="196" stroke={leaf} strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 520 72"
      className={`max-w-full ${className}`}
      role="img"
      aria-label="MK Mboya Advocates LLP"
      style={{ height, width: "auto" }}
    >
      <g transform="translate(0,6) scale(0.52)">
        <MkLetters navy={navy} leaf={leaf} shine={shine} />
      </g>
      <text x="112" y="34" fill={navy} fontFamily={serif} fontSize="22">
        <tspan fontWeight="700" letterSpacing="2.6">
          MBOYA
        </tspan>
        <tspan dx="12" fontSize="15" fontWeight="600" letterSpacing="4.2">
          ADVOCATES
        </tspan>
      </text>
      <line x1="112" y1="50" x2="214" y2="50" stroke={leaf} strokeWidth="1.6" />
      <text
        x="268"
        y="54"
        textAnchor="middle"
        fill={navy}
        fontFamily={serif}
        fontSize="11"
        fontWeight="600"
        letterSpacing="5.4"
      >
        LLP
      </text>
      <line x1="322" y1="50" x2="500" y2="50" stroke={leaf} strokeWidth="1.6" />
    </svg>
  );
}
