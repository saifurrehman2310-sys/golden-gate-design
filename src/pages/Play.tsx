import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";

import serviceLeaf from "@/assets/v3/service-leaf.png";
import serviceCube from "@/assets/v3/service-cube.png";
import serviceRibbon from "@/assets/v3/service-ribbon.png";
import serviceSpiral from "@/assets/v3/service-spiral.png";
import serviceBrackets from "@/assets/v3/service-brackets.png";
import serviceStar from "@/assets/v3/service-star.png";

type Behavior = "easy" | "hidden" | "moving" | "distant" | "subtle" | "finale";

type HiddenObject = {
  slug: string;
  label: string;
  icon: string;
  x: number; // percent, within the stage
  y: number; // percent, within the stage
  size: number; // px at desktop; scales down on small screens
  behavior: Behavior;
};

// The six collectible pieces -- the same artwork used in the Services
// section, reused as-is. Short labels stand in for the real service names
// so the payoff ("oh, these are the services") lands once the visitor
// connects the two sections themselves. Each gets a different discovery
// behavior so the six finds don't all feel the same.
const OBJECTS: HiddenObject[] = [
  { slug: "brand-identity", label: "BRAND", icon: serviceLeaf, x: 28, y: 60, size: 88, behavior: "easy" },
  { slug: "web-design", label: "WEB", icon: serviceCube, x: 68, y: 34, size: 92, behavior: "hidden" },
  { slug: "ui-ux-design", label: "UI/UX", icon: serviceRibbon, x: 50, y: 76, size: 70, behavior: "moving" },
  { slug: "motion-design", label: "MOTION", icon: serviceSpiral, x: 87, y: 20, size: 44, behavior: "distant" },
  { slug: "web-development", label: "DEV", icon: serviceBrackets, x: 15, y: 28, size: 66, behavior: "subtle" },
  { slug: "digital-strategy", label: "STRATEGY", icon: serviceStar, x: 74, y: 60, size: 90, behavior: "finale" },
];

const BASE_OPACITY: Record<Behavior, number> = {
  easy: 0.5,
  hidden: 0.22,
  moving: 0.32,
  distant: 0.48,
  subtle: 0.1,
  finale: 0.22,
};

const BOOST_CAP: Record<Behavior, number> = {
  easy: 0.95,
  hidden: 0.85,
  moving: 0.8,
  distant: 0.9,
  subtle: 0.75,
  finale: 0.85,
};

// A piece "sweeps" with a thin diagonal shine on discovery -- suits the
// more actively-hidden or energetic pieces rather than the quiet ones.
const SWEEPS_ON_DISCOVERY: Behavior[] = ["hidden", "moving", "finale"];

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

/** Responsive size: scales down on narrow screens, caps at the design size on desktop. */
function sizeStyle(px: number): CSSProperties {
  const vw = Math.round(px * 0.15);
  return { width: `clamp(52px, ${vw}vw, ${px}px)`, height: `clamp(52px, ${vw}vw, ${px}px)` };
}

/**
 * "The Hidden Collection" -- a small interactive installation, not a game.
 * Six of the studio's own service artworks are placed, dim and partly
 * obscured, through a dark architectural space. The light drifts through
 * the room and the visitor's own attention (cursor on desktop, touch on
 * mobile) brightens what's nearby; clicking a found piece collects it,
 * with a short glass-and-light reaction rather than an arcade effect.
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
  const [flash, setFlash] = useState(false);
  const [finalePhase, setFinalePhase] = useState<"idle" | "celebrating" | "done">("idle");
  const [waveKey, setWaveKey] = useState(0);

  const [lightIndex, setLightIndex] = useState(0);
  const [lightDuration, setLightDuration] = useState(6500);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const rafPending = useRef(false);

  // The light drifts to a new waypoint on a slow cycle, with a little
  // variation in timing so it never feels mechanical.
  useEffect(() => {
    if (reducedMotion) return;
    let id: number;
    const tick = () => {
      setLightIndex((i) => (i + 1) % LIGHT_WAYPOINTS.length);
      const dur = 5800 + Math.random() * 2000;
      setLightDuration(dur);
      id = window.setTimeout(tick, dur + 700);
    };
    id = window.setTimeout(tick, lightDuration + 700);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const collect = (obj: HiddenObject) => {
    if (found.has(obj.slug)) return;
    setRevealing(obj.slug);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 260);

    const nextFound = new Set(found).add(obj.slug);
    setFound(nextFound);

    window.setTimeout(() => {
      setRevealing((r) => (r === obj.slug ? null : r));

      if (nextFound.size === OBJECTS.length) {
        setFinalePhase("celebrating");
        setWaveKey((k) => k + 1);
        window.setTimeout(() => setFinalePhase("done"), 1500);
      }
    }, 700);
  };

  return (
    <section
      ref={stageRef}
      onPointerMove={handlePointerMove}
      className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-grain"
      style={{ background: "#050506" }}
    >
      {/* Architectural silhouettes -- barely visible, brighten only as the light passes. */}
      {[
        { x: 12, w: 7 },
        { x: 50, w: 5 },
        { x: 90, w: 6 },
      ].map((pillar, i) => {
        const d = Math.max(0, 1 - Math.abs(pillar.x - lightAt.x) / 30);
        return (
          <div
            key={i}
            className="pointer-events-none absolute inset-y-0 transition-opacity"
            style={{
              left: `${pillar.x}%`,
              width: `${pillar.w}%`,
              transitionDuration: "3000ms",
              opacity: 0.03 + d * 0.05,
              background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ice) 60%, white) 40%, transparent 90%)",
            }}
            aria-hidden
          />
        );
      })}

      {/* Atmospheric haze. */}
      {!reducedMotion && (
        <>
          <div
            className="ambient-drift pointer-events-none absolute inset-y-0 opacity-[0.13]"
            style={{
              left: "18%",
              width: "18%",
              background: "linear-gradient(180deg, color-mix(in oklab, var(--ice) 40%, transparent), transparent 75%)",
              filter: "blur(30px)",
            }}
            aria-hidden
          />
          <div
            className="ambient-drift-slow pointer-events-none absolute inset-y-0 opacity-[0.11]"
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

      {/* Restrained dust. */}
      {!reducedMotion && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.3]" aria-hidden>
          {[
            { top: "24%", left: "20%", delay: "0s" },
            { top: "66%", left: "14%", delay: "3s" },
            { top: "36%", left: "80%", delay: "1.5s" },
            { top: "74%", left: "68%", delay: "4.5s" },
          ].map((d, i) => (
            <span
              key={i}
              className="float-slower absolute h-1 w-1 rounded-full bg-[var(--ice)]"
              style={{ top: d.top, left: d.left, animationDelay: d.delay }}
            />
          ))}
        </div>
      )}

      {/* Reflective floor + the light's own faint reflection on it. */}
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
      <div
        className="pointer-events-none absolute rounded-full blur-2xl transition-[left] ease-linear"
        style={{
          left: `${lightAt.x}%`,
          bottom: "6%",
          width: "16%",
          paddingBottom: "4%",
          transform: "translateX(-50%)",
          background: "radial-gradient(closest-side, color-mix(in oklab, var(--ice) 22%, transparent), transparent 80%)",
          transitionDuration: reducedMotion ? "0ms" : `${lightDuration}ms`,
          opacity: 0.5,
        }}
        aria-hidden
      />

      {/* Ambient mood + catch flash. */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 45%, color-mix(in oklab, var(--ice) 10%, transparent) 0%, color-mix(in oklab, var(--champagne) 6%, transparent) 40%, transparent 75%)",
          opacity: flash || finalePhase === "celebrating" ? 1 : 0.55,
        }}
        aria-hidden
      />

      {/* The light itself -- volumetric: soft outer falloff + a brighter core, breathing gently. */}
      <div
        className="pointer-events-none absolute transition-[left,top] ease-in-out"
        style={{
          left: `${lightAt.x}%`,
          top: `${lightAt.y}%`,
          transform: "translate(-50%, -50%)",
          transitionDuration: reducedMotion ? "0ms" : `${lightDuration}ms`,
        }}
      >
        <div className={`relative ${reducedMotion ? "" : "light-breathe"}`}>
          <div
            className="rounded-full blur-3xl"
            style={{
              width: "38vmin",
              height: "38vmin",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--ice) 20%, transparent) 0%, color-mix(in oklab, var(--champagne) 10%, transparent) 45%, transparent 75%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 rounded-full blur-xl"
            style={{
              width: "9vmin",
              height: "9vmin",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, color-mix(in oklab, var(--ice) 55%, white) 0%, transparent 75%)",
            }}
          />
        </div>
      </div>

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
          const boost = Math.min(1, Math.max(lightBoost, pointerBoost)) * (BOOST_CAP[obj.behavior] - BASE_OPACITY[obj.behavior]);

          const opacity = isFound
            ? 1
            : finalePhase === "celebrating"
              ? 0.95
              : Math.min(BOOST_CAP[obj.behavior], BASE_OPACITY[obj.behavior] + boost);

          const sweeps = SWEEPS_ON_DISCOVERY.includes(obj.behavior);
          const particleCount = reducedMotion ? 3 : obj.behavior === "finale" ? 9 : 6;

          return (
            <div
              key={obj.slug}
              className={`absolute ${obj.behavior === "moving" && !reducedMotion ? "wander" : ""}`}
              style={{ left: `${obj.x}%`, top: `${obj.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Discovery label -- appears briefly, then fades. */}
              {isRevealing && (
                <p
                  className="label-flash pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 text-[0.6rem] tracking-[0.25em] whitespace-nowrap text-[var(--champagne)] uppercase"
                  aria-hidden
                >
                  {obj.label}
                </p>
              )}

              <button
                type="button"
                aria-label={isFound ? `${obj.label} -- found` : "A shape in the dark"}
                onClick={() => collect(obj)}
                className={`relative flex items-center justify-center ${isRevealing ? "discover-pop" : "transition-[transform,scale] duration-700 ease-[var(--ease-lux)]"}`}
                style={{ ...sizeStyle(obj.size), scale: isFound ? 1.06 : 1 }}
              >
                <span
                  className="pointer-events-none absolute inset-[-90%] rounded-full blur-2xl transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--ice) 42%, transparent) 0%, color-mix(in oklab, var(--champagne) 22%, transparent) 45%, transparent 75%)",
                    opacity: isFound
                      ? finalePhase === "celebrating"
                        ? 1
                        : 0.75
                      : isRevealing
                        ? 1
                        : boost,
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
                  style={{ opacity, filter: isFound ? "none" : `brightness(${0.7 + boost})` }}
                />

                {/* A thin diagonal shine sweeping across the piece as it's discovered. */}
                {isRevealing && sweeps && (
                  <span
                    className="light-sweep pointer-events-none absolute inset-[-10%] overflow-hidden rounded-full"
                    style={{
                      background:
                        "linear-gradient(75deg, transparent 35%, color-mix(in oklab, white 70%, var(--ice)) 50%, transparent 65%)",
                    }}
                    aria-hidden
                  />
                )}

                {/* Glass veil -- the "hidden" piece sits partly behind it until found. */}
                {obj.behavior === "hidden" && !isFound && (
                  <span
                    className="pointer-events-none absolute inset-[-6%] rounded-2xl border border-white/[0.08] backdrop-blur-[2px] transition-opacity duration-700"
                    style={{
                      background: "color-mix(in oklab, var(--background) 30%, transparent)",
                      opacity: Math.max(0.15, 0.55 - boost),
                    }}
                    aria-hidden
                  />
                )}
              </button>

              {/* Brief, restrained particle response on discovery -- glass and light, not confetti. */}
              {isRevealing && (
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  {Array.from({ length: particleCount }).map((_, i) => {
                    const angle = (360 / particleCount) * i + (i % 2 === 0 ? 6 : -6);
                    return (
                      <span
                        key={i}
                        className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={
                          {
                            background: i % 2 === 0 ? "var(--ice)" : "var(--champagne)",
                            "--angle": `${angle}deg`,
                            "--dist": `${-32 - (i % 3) * 8}px`,
                            animation: "catch-burst 620ms ease-out forwards",
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

        {/* The finale wave -- a single soft band of light sweeping the room once, all six echoing together. */}
        {finalePhase === "celebrating" && (
          <div
            key={waveKey}
            className="wave-sweep pointer-events-none absolute inset-y-0 w-1/2"
            style={{
              left: "25%",
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--ice) 35%, transparent), color-mix(in oklab, var(--champagne) 25%, transparent), transparent)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />
        )}
      </div>

      {/* Minimal collection UI, part of the gallery rather than a HUD. */}
      <div className="relative border-t border-white/[0.06] px-6 py-5 text-center sm:py-6">
        <p key={found.size} className="pulse-in text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
          The Six &nbsp;·&nbsp; {found.size} / {OBJECTS.length} found
        </p>
        <div className="mt-4 flex items-center justify-center gap-5 sm:gap-7">
          {OBJECTS.map((obj) => {
            const isFound = found.has(obj.slug);
            return (
              <div key={`${obj.slug}-${isFound}`} className={`flex flex-col items-center gap-1.5 ${isFound ? "pulse-in" : ""}`}>
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

      {finalePhase === "done" && (
        <Reveal className="absolute inset-0 flex items-center justify-center bg-[color-mix(in_oklab,var(--background)_78%,transparent)]">
          <div className="max-w-sm px-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">The collection is complete</p>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.15]">
              Six pieces, gathered in the dark.
            </h2>
            <div className="mt-8 flex items-center justify-center gap-6">
              <Link to="/services" className="lux-link text-sm">
                Explore the services →
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
