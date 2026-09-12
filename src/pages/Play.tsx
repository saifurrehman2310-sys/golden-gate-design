import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";

import serviceLeaf from "@/assets/v3/service-leaf.png";
import serviceCube from "@/assets/v3/service-cube.png";
import serviceRibbon from "@/assets/v3/service-ribbon.png";
import serviceSpiral from "@/assets/v3/service-spiral.png";
import serviceBrackets from "@/assets/v3/service-brackets.png";
import serviceStar from "@/assets/v3/service-star.png";

type Veil = "floor" | "glass" | "high" | "corner" | "reflection" | "fog";

type HiddenObject = {
  slug: string;
  label: string;
  icon: string;
  x: number; // percent
  y: number; // percent
  size: number; // px, before scale
  veil: Veil;
};

// The six collectible pieces -- the same artwork used in the Services
// section, reused as-is (no new assets). Short labels stand in for the
// real service names so the payoff ("oh, these are the services") lands
// once the visitor connects the two sections themselves.
const OBJECTS: HiddenObject[] = [
  { slug: "brand-identity", label: "BRAND", icon: serviceLeaf, x: 20, y: 76, size: 76, veil: "floor" },
  { slug: "web-design", label: "WEB", icon: serviceCube, x: 63, y: 38, size: 96, veil: "glass" },
  { slug: "ui-ux-design", label: "UI/UX", icon: serviceRibbon, x: 84, y: 18, size: 62, veil: "high" },
  { slug: "motion-design", label: "MOTION", icon: serviceSpiral, x: 10, y: 24, size: 58, veil: "corner" },
  { slug: "web-development", label: "DEV", icon: serviceBrackets, x: 45, y: 82, size: 70, veil: "reflection" },
  { slug: "digital-strategy", label: "STRATEGY", icon: serviceStar, x: 76, y: 60, size: 78, veil: "fog" },
];

const BASE_OPACITY: Record<Veil, number> = {
  floor: 0.22,
  glass: 0.26,
  high: 0.18,
  corner: 0.16,
  reflection: 0.14,
  fog: 0.2,
};

// The roaming light's waypoints -- it drifts slowly between these, and its
// proximity to an object is one of the two ways an object gets brighter
// (the other being the visitor's own cursor on desktop).
const LIGHT_WAYPOINTS = [
  { x: 30, y: 30 },
  { x: 70, y: 25 },
  { x: 55, y: 70 },
  { x: 22, y: 65 },
  { x: 80, y: 55 },
];

function distance(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(ax - bx, ay - by);
}

/**
 * "The Hidden Collection" -- a small interactive installation, not a game.
 * Six of the studio's own service artworks are placed, dim and partly
 * obscured, through a dark architectural space. The light drifts through
 * the room and the visitor's own attention (cursor on desktop, touch on
 * mobile) brightens what's nearby; clicking a found piece collects it.
 * Pure CSS-transform / gradient driven -- no canvas, no dependencies.
 */
export default function Play() {
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);

  const [found, setFound] = useState<Set<string>>(new Set());
  const [revealing, setRevealing] = useState<string | null>(null);
  const [lightIndex, setLightIndex] = useState(0);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const rafPending = useRef(false);

  // The light drifts to a new waypoint on a slow, steady cycle.
  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setLightIndex((i) => (i + 1) % LIGHT_WAYPOINTS.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isCoarsePointer) return;
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect || rafPending.current) return;
      rafPending.current = true;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      requestAnimationFrame(() => {
        setPointer({ x, y });
        rafPending.current = false;
      });
    },
    [isCoarsePointer],
  );

  const lightAt = LIGHT_WAYPOINTS[lightIndex];

  const collect = (slug: string) => {
    if (found.has(slug)) return;
    setRevealing(slug);
    setFound((prev) => new Set(prev).add(slug));
    window.setTimeout(() => setRevealing((r) => (r === slug ? null : r)), 700);
  };

  const allFound = found.size === OBJECTS.length;

  return (
    <section
      ref={stageRef}
      onPointerMove={handlePointerMove}
      className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-grain"
      style={{ background: "#050506" }}
    >
      {/* Architectural depth -- a few faint vertical light columns, drifting on a very long cycle. */}
      {!reducedMotion && (
        <>
          <div
            className="ambient-drift pointer-events-none absolute inset-y-0 opacity-[0.14]"
            style={{
              left: "18%",
              width: "18%",
              background: "linear-gradient(180deg, color-mix(in oklab, var(--ice) 40%, transparent), transparent 75%)",
              filter: "blur(30px)",
            }}
            aria-hidden
          />
          <div
            className="ambient-drift-slow pointer-events-none absolute inset-y-0 opacity-[0.12]"
            style={{
              left: "68%",
              width: "16%",
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--champagne) 34%, transparent), transparent 78%)",
              filter: "blur(34px)",
            }}
            aria-hidden
          />
        </>
      )}

      {/* Reflective floor. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background: "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--ice) 6%, transparent) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 opacity-30"
        style={{ bottom: "30%", height: "1px", background: "linear-gradient(90deg, transparent, var(--ice), transparent)" }}
        aria-hidden
      />

      {/* The roaming light. */}
      <div
        className="pointer-events-none absolute rounded-full blur-3xl transition-[left,top] ease-linear"
        style={{
          left: `${lightAt.x}%`,
          top: `${lightAt.y}%`,
          width: "34%",
          paddingBottom: "34%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ice) 20%, transparent) 0%, color-mix(in oklab, var(--champagne) 10%, transparent) 45%, transparent 75%)",
          transitionDuration: reducedMotion ? "0ms" : "6500ms",
        }}
        aria-hidden
      />

      <Reveal className="pointer-events-none relative px-6 pt-8 text-center sm:pt-10">
        <p className="text-[0.65rem] tracking-[0.35em] text-muted-foreground/70 uppercase">
          The Hidden Collection
        </p>
      </Reveal>

      {/* The six objects. */}
      <div className="relative min-h-0 flex-1">
        {OBJECTS.map((obj) => {
          const isFound = found.has(obj.slug);
          const isRevealing = revealing === obj.slug;

          const lightDist = distance(lightAt.x, lightAt.y, obj.x, obj.y);
          const lightBoost = Math.max(0, 1 - lightDist / 26);
          const pointerDist = pointer ? distance(pointer.x, pointer.y, obj.x, obj.y) : 100;
          const pointerBoost = Math.max(0, 1 - pointerDist / 20);
          const boost = Math.min(1, Math.max(lightBoost, pointerBoost)) * 0.6;

          const opacity = isFound ? 1 : Math.min(0.88, BASE_OPACITY[obj.veil] + boost);
          const scale = isFound ? 1 : isRevealing ? 1.15 : 1;

          return (
            <div
              key={obj.slug}
              className="absolute"
              style={{ left: `${obj.x}%`, top: `${obj.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* A faint mirrored reflection on the floor, for the piece that's found through it. */}
              {obj.veil === "reflection" && !isFound && (
                <img
                  src={obj.icon}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 object-contain blur-[1px]"
                  style={{
                    top: `${obj.size * 0.55}px`,
                    width: obj.size * 0.8,
                    transform: "translateX(-50%) scaleY(-1)",
                    opacity: Math.min(0.5, 0.25 + boost * 0.4),
                    maskImage: "linear-gradient(180deg, black, transparent 85%)",
                  }}
                />
              )}

              <button
                type="button"
                aria-label={found.has(obj.slug) ? `${obj.label} -- found` : "A shape in the dark"}
                onClick={() => collect(obj.slug)}
                className="relative flex items-center justify-center transition-transform duration-700 ease-[var(--ease-lux)]"
                style={{ width: obj.size, height: obj.size, transform: `scale(${scale})` }}
              >
                <span
                  className="pointer-events-none absolute inset-[-90%] rounded-full blur-2xl transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--ice) 42%, transparent) 0%, color-mix(in oklab, var(--champagne) 22%, transparent) 45%, transparent 75%)",
                    opacity: isFound ? 0.8 : isRevealing ? 1 : boost * 0.7,
                  }}
                  aria-hidden
                />
                <img
                  src={obj.icon}
                  alt=""
                  aria-hidden
                  className={`relative h-full w-full object-contain transition-[opacity,filter] duration-700 ${
                    reducedMotion ? "" : "float-slow"
                  }`}
                  style={{ opacity, filter: isFound ? "none" : `brightness(${0.7 + boost * 0.5})` }}
                />

                {/* Glass veil -- partially occludes until the piece is found. */}
                {obj.veil === "glass" && !isFound && (
                  <span
                    className="pointer-events-none absolute inset-[-6%] rounded-2xl border border-white/[0.08] backdrop-blur-[2px] transition-opacity duration-700"
                    style={{
                      background: "color-mix(in oklab, var(--background) 30%, transparent)",
                      opacity: Math.max(0.15, 0.55 - boost * 0.45),
                    }}
                    aria-hidden
                  />
                )}

                {/* Fog veil -- thins as the light or cursor nears. */}
                {obj.veil === "fog" && !isFound && (
                  <span
                    className="pointer-events-none absolute inset-[-70%] rounded-full blur-xl transition-opacity duration-700"
                    style={{
                      background: "color-mix(in oklab, var(--background) 70%, transparent)",
                      opacity: Math.max(0.1, 0.6 - boost * 0.55),
                    }}
                    aria-hidden
                  />
                )}
              </button>

              {/* Brief particle response on first discovery. */}
              {isRevealing && (
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  {Array.from({ length: reducedMotion ? 3 : 6 }).map((_, i) => {
                    const angle = (360 / (reducedMotion ? 3 : 6)) * i;
                    return (
                      <span
                        key={i}
                        className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={
                          {
                            background: i % 2 === 0 ? "var(--ice)" : "var(--champagne)",
                            "--angle": `${angle}deg`,
                            "--dist": "-40px",
                            animation: "catch-burst 650ms ease-out forwards",
                          } as CSSProperties
                        }
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Minimal collection UI, part of the gallery rather than a HUD. */}
      <div className="relative border-t border-white/[0.06] px-6 py-5 text-center sm:py-6">
        <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
          The Six &nbsp;·&nbsp; {found.size} / {OBJECTS.length} found
        </p>
        <div className="mt-4 flex items-center justify-center gap-5 sm:gap-7">
          {OBJECTS.map((obj) => {
            const isFound = found.has(obj.slug);
            return (
              <div key={obj.slug} className="flex flex-col items-center gap-1.5">
                <img
                  src={obj.icon}
                  alt=""
                  aria-hidden
                  className="h-6 w-6 object-contain transition-all duration-700 sm:h-7 sm:w-7"
                  style={{
                    opacity: isFound ? 1 : 0.16,
                    filter: isFound ? "none" : "grayscale(1) brightness(0.6)",
                  }}
                />
                <span
                  className="text-[0.55rem] tracking-[0.15em] transition-opacity duration-700"
                  style={{ opacity: isFound ? 0.8 : 0.15, color: "var(--champagne)" }}
                >
                  {obj.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {allFound && (
        <Reveal className="absolute inset-0 flex items-center justify-center bg-[color-mix(in_oklab,var(--background)_78%,transparent)]">
          <div className="max-w-sm px-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Complete</p>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.15]">
              The collection, gathered.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six pieces. Six services. The studio's work, hidden in plain sight.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <Link to="/services" className="lux-link text-sm">
                See the services
              </Link>
              <Link to="/" className="lux-link text-sm">
                Back home
              </Link>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
