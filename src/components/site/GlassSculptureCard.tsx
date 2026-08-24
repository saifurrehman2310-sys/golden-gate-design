import type { ReactNode } from "react";
import glassRibbon from "@/assets/glass-ribbon.png";
import glassKnot2 from "@/assets/glass-knot-2.png";
import glassLeaves from "@/assets/glass-leaves.png";
import glassDroplet from "@/assets/glass-droplet.png";
import glassWave from "@/assets/glass-wave.png";
import glassCube from "@/assets/v2/cube.png";
import glassSpiral from "@/assets/v2/spiral.png";
import glassCodeBrackets from "@/assets/v2/code-brackets.png";
import glassStar from "@/assets/v2/star.png";

const sculptures = {
  ribbon: glassRibbon,
  knot: glassKnot2,
  leaves: glassLeaves,
  droplet: glassDroplet,
  wave: glassWave,
  cube: glassCube,
  spiral: glassSpiral,
  brackets: glassCodeBrackets,
  star: glassStar,
} as const;

export type SculptureName = keyof typeof sculptures;

/**
 * A card with a bright liquid-glass sculpture behind its content and a frosted
 * scrim in front — the exact same recipe as the "Ready to Build Something
 * Unforgettable" CTA box, reused for every card sitewide (Why Saif Studio,
 * Services, etc). Pass a different `sculpture` + `flip`/`rotate` per card so
 * repeated source images don't look identical.
 */
export function GlassSculptureCard({
  sculpture,
  flip = false,
  rotate = 0,
  scale = 1,
  className = "",
  children,
}: {
  sculpture: SculptureName;
  flip?: boolean;
  rotate?: number;
  scale?: number;
  className?: string;
  children: ReactNode;
}) {
  const img = sculptures[sculpture];

  return (
    <div className={`glass-panel glass-edge relative h-full overflow-hidden rounded-2xl ${className}`}>
      {/* sculpture, tucked toward a corner so it reads as a presence, not clutter */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-40 opacity-80 lg:w-52"
        style={{
          transform: `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg) scale(${scale})`,
        }}
        aria-hidden
      >
        <img src={img} alt="" className="h-auto w-full object-contain" />
      </div>

      {/* frosted scrim — same recipe as CtaGlass, keeps text legible over the glass */}
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-md"
        style={{
          background:
            "radial-gradient(65% 60% at 38% 55%, color-mix(in oklab, var(--background) 82%, transparent) 0%, color-mix(in oklab, var(--background) 60%, transparent) 45%, transparent 78%)",
        }}
        aria-hidden
      />

      <div className="relative">{children}</div>
    </div>
  );
}
