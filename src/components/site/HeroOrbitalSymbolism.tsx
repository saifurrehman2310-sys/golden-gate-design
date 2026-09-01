export function HeroOrbitalSymbolism({
  className = "",
  layer,
}: {
  className?: string;
  layer: "back" | "front";
}) {
  return (
    <svg viewBox="0 0 600 600" className={className} style={{ overflow: "visible" }} aria-hidden>
      <defs>
        <linearGradient id="arcFadeGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--champagne)" stopOpacity="0" />
          <stop offset="30%" stopColor="var(--champagne)" stopOpacity="0.4" />
          <stop offset="70%" stopColor="var(--champagne)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--champagne)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="arcFadeIce" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--ice)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--ice)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--ice)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="anchorGlow">
          <stop offset="0%" stopColor="var(--champagne)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--champagne)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {layer === "back" && (
        <>
          <path
            d="M 90,430 A 260,260 0 0 1 470,150 Q 505,128 498,95"
            fill="none"
            stroke="url(#arcFadeGold)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M 140,470 A 300,300 0 0 1 470,230"
            fill="none"
            stroke="url(#arcFadeIce)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          {[
            { x: 95, y: 120, r: 0.7, o: 0.35 },
            { x: 150, y: 80, r: 0.55, o: 0.25 },
            { x: 60, y: 210, r: 0.6, o: 0.28 },
            { x: 40, y: 340, r: 0.5, o: 0.2 },
            { x: 540, y: 380, r: 0.65, o: 0.22 },
          ].map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r * 2} fill="var(--ice)" opacity={s.o} />
          ))}
          <circle cx={498} cy={95} r="8" fill="url(#anchorGlow)" />
          <circle cx={498} cy={95} r="1.4" fill="var(--champagne)" opacity="0.85" />
        </>
      )}

      {layer === "front" && (
        <path
          d="M 470,230 A 300,300 0 0 1 500,320"
          fill="none"
          stroke="url(#arcFadeIce)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.6"
        />
      )}
    </svg>
  );
}
