export function MoleculeField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden
    >
      <g opacity="0.22">
        <circle cx="980" cy="140" r="86" fill="#00E2BD" opacity="0.35" />
        <circle cx="1048" cy="210" r="52" fill="#F4F8F7" />
        <circle cx="960" cy="230" r="38" fill="#F4F8F7" opacity="0.85" />
        <circle cx="1088" cy="118" r="22" fill="#00E2BD" />
        <line
          x1="980"
          y1="140"
          x2="1048"
          y2="210"
          stroke="#F4F8F7"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="980"
          y1="140"
          x2="960"
          y2="230"
          stroke="#F4F8F7"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <g opacity="0.12">
        <circle cx="160" cy="620" r="120" stroke="#00E2BD" strokeWidth="1.2" />
        <circle cx="160" cy="620" r="72" stroke="#F4F8F7" strokeWidth="1" />
        <circle cx="240" cy="540" r="18" fill="#00E2BD" opacity="0.7" />
        <circle cx="80" cy="700" r="10" fill="#F4F8F7" />
      </g>
      <g opacity="0.08">
        <circle cx="640" cy="-40" r="280" stroke="#F4F8F7" strokeWidth="1" />
        <circle cx="640" cy="-40" r="180" stroke="#00E2BD" strokeWidth="1" />
      </g>
    </svg>
  );
}
