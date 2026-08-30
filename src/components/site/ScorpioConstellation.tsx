/**
 * A quiet constellation motif woven into the footer. Not decorative filler -
 * the shape traces Scorpio, positioned to sit low and unobtrusive.
 */
export function ScorpioConstellation({ className = "" }: { className?: string }) {
  // Simplified real star positions tracing the Scorpio hook, normalized to a 400x160 box
  const stars = [
    { x: 18, y: 40, r: 1.6 }, // beta Sco
    { x: 46, y: 30, r: 1.8 }, // delta Sco
    { x: 78, y: 42, r: 2.6 }, // Antares (heart)
    { x: 108, y: 62, r: 1.5 },
    { x: 140, y: 78, r: 1.6 },
    { x: 172, y: 88, r: 1.4 },
    { x: 208, y: 92, r: 1.5 },
    { x: 244, y: 84, r: 1.6 },
    { x: 274, y: 62, r: 1.5 },
    { x: 296, y: 32, r: 1.7 }, // curl of the tail
    { x: 306, y: 4, r: 1.9 }, // stinger
  ];
  const path = stars.map((s) => `${s.x},${s.y}`).join(" ");

  return (
    <svg
      viewBox="0 0 330 100"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <polyline
        points={path}
        fill="none"
        stroke="color-mix(in oklab, var(--champagne) 45%, transparent)"
        strokeWidth="0.6"
      />
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill={i === 2 ? "var(--champagne)" : "var(--ice)"}
          opacity={i === 2 ? 0.9 : 0.6}
        />
      ))}
    </svg>
  );
}
