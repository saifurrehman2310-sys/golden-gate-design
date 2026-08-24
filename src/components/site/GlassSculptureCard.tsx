import type { ReactNode } from "react";
import glassRibbon from "@/assets/glass-ribbon.png";
import glassKnot2 from "@/assets/glass-knot-2.png";
import glassLeaves from "@/assets/glass-leaves.png";
import glassDroplet from "@/assets/glass-droplet.png";
import glassWave from "@/assets/glass-wave.png";
import glassTileDeliver from "@/assets/glass-tile-deliver.png";
import glassTileConnect from "@/assets/glass-tile-connect.png";

const sculptures = {
  ribbon: glassRibbon,
  knot: glassKnot2,
  leaves: glassLeaves,
  droplet: glassDroplet,
  wave: glassWave,
} as const;

const tiles = {
  deliver: glassTileDeliver,
  connect: glassTileConnect,
} as const;

export type SculptureName = keyof typeof sculptures;
export type TileName = keyof typeof tiles;

/**
 * A card with a bright liquid-glass sculpture behind its content and a frosted
 * scrim in front — the exact same recipe as the "Ready to Build Something
 * Unforgettable" CTA box, reused for every card sitewide (Why Saif Studio,
 * Services, etc). Pass a different `sculpture` + `flip`/`rotate` per card so
 * repeated source images don't look identical. Alternatively pass `tile` for
 * the self-contained glass icon-tile assets — these render as a small badge
 * in the corner instead of a large drifting corner overlay, since they carry
 * their own frame and ambient background rather than being isolated shapes.
 */
export function GlassSculptureCard({
  sculpture,
  tile,
  flip = false,
  rotate = 0,
  scale = 1,
  className = "",
  children,
}: {
  sculpture?: SculptureName | undefined;
  tile?: TileName | undefined;
  flip?: boolean;
  rotate?: number;
  scale?: number;
  className?: string;
  children: ReactNode;
}) {
  const img = sculpture ? sculptures[sculpture] : null;
  const tileImg = tile ? tiles[tile] : null;

  return (
    <div className={`glass-panel glass-edge relative h-full overflow-hidden rounded-2xl ${className}`}>
      {/* sculpture, tucked toward a corner so it reads as a presence, not clutter */}
      {img && (
        <div
          className="pointer-events-none absolute -top-10 -right-10 w-40 opacity-80 lg:w-52"
          style={{
            transform: `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg) scale(${scale})`,
          }}
          aria-hidden
        >
          <img src={img} alt="" className="h-auto w-full object-contain" />
        </div>
      )}

      {/* self-contained icon tile, shown as a small glass badge top-left */}
      {tileImg && (
        <div className="pointer-events-none absolute top-6 left-6 h-14 w-14 overflow-hidden rounded-xl opacity-90 shadow-[0_8px_30px_-8px_rgba(80,110,220,0.5)] lg:h-16 lg:w-16" aria-hidden>
          <img src={tileImg} alt="" className="h-full w-full object-cover" />
        </div>
      )}

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
