import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import spark from "@/assets/v3/blob-0.png";

const TARGET_CATCHES = 7;
const CENTER: Point = { x: 50, y: 46 };

type Point = { x: number; y: number };

function randomPoint(margin = 14): Point {
  return {
    x: margin + Math.random() * (100 - margin * 2),
    y: margin + Math.random() * (100 - margin * 2),
  };
}

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/**
 * "Catch the Light" — a small interactive installation, not a game embed.
 * Pure CSS-transform driven (no canvas), reusing the site's existing glass
 * blob art, colour tokens and easing so it reads as part of the same world.
 */
export default function Play() {
  const [phase, setPhase] = useState<"intro" | "playing" | "finished">("intro");
  const [lightAt, setLightAt] = useState<Point>(CENTER);
  const [catchAt, setCatchAt] = useState<Point | null>(null);
  const [catches, setCatches] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [flash, setFlash] = useState(false);

  const arenaRef = useRef<HTMLDivElement>(null);
  const moveTimer = useRef<number | null>(null);
  const lastMoveAt = useRef(0);
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const clearMoveTimer = () => {
    if (moveTimer.current) window.clearTimeout(moveTimer.current);
  };

  const scheduleNextMove = useCallback((delayOverride?: number) => {
    clearMoveTimer();
    const delay = delayOverride ?? 1800 + Math.random() * 1000;
    moveTimer.current = window.setTimeout(() => {
      setLightAt(randomPoint());
      lastMoveAt.current = Date.now();
      scheduleNextMove();
    }, delay);
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    scheduleNextMove(1400);
    return clearMoveTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleArenaPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (phase !== "playing" || isCoarsePointer || reducedMotion) return;
    const now = Date.now();
    if (now - lastMoveAt.current < 550) return;
    const rect = arenaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    if (distance({ x: px, y: py }, lightAt) < 16) {
      let candidate = randomPoint();
      let attempts = 0;
      while (distance(candidate, { x: px, y: py }) < 30 && attempts < 6) {
        candidate = randomPoint();
        attempts++;
      }
      setLightAt(candidate);
      lastMoveAt.current = now;
      scheduleNextMove();
    }
  };

  const handleCatch = () => {
    if (phase !== "playing") return;
    setCatchAt(lightAt);
    setBurstKey((k) => k + 1);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 380);
    setLightAt(randomPoint());
    lastMoveAt.current = Date.now();
    scheduleNextMove(650);
    setCatches((c) => {
      const next = c + 1;
      if (next >= TARGET_CATCHES) {
        clearMoveTimer();
        window.setTimeout(() => setPhase("finished"), 750);
      }
      return next;
    });
  };

  const begin = () => {
    setCatches(0);
    setCatchAt(null);
    setLightAt(randomPoint());
    setPhase("playing");
  };

  const particleCount = reducedMotion ? 3 : isCoarsePointer ? 5 : 8;
  const particles = useMemo(() => Array.from({ length: particleCount }), [particleCount]);

  return (
    <section className="relative overflow-hidden bg-grain">
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, color-mix(in oklab, var(--ice) 11%, transparent) 0%, color-mix(in oklab, var(--champagne) 7%, transparent) 42%, transparent 78%)",
          opacity: flash ? 1 : 0.55,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-20 lg:px-10 lg:pt-48 lg:pb-28">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
            A small discovery
          </p>
        </Reveal>

        <div
          ref={arenaRef}
          onPointerMove={handleArenaPointerMove}
          className="relative mx-auto mt-8 h-[62vh] min-h-[420px] max-w-3xl touch-none select-none"
        >
          {/* The light itself — always present, drifts idly before play begins. */}
          <div
            className="absolute flex items-center justify-center transition-[left,top] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: `${lightAt.x}%`, top: `${lightAt.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span
              className="pointer-events-none absolute inset-[-160%] rounded-full blur-2xl transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--ice) 42%, transparent) 0%, color-mix(in oklab, var(--champagne) 24%, transparent) 45%, transparent 75%)",
                opacity: phase === "playing" ? 1 : 0.4,
              }}
              aria-hidden
            />
            <button
              type="button"
              aria-label="Catch the light"
              disabled={phase !== "playing"}
              onClick={handleCatch}
              className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-20 sm:w-20"
            >
              <img
                src={spark}
                alt=""
                aria-hidden
                className={`relative h-full w-full object-contain ${reducedMotion ? "" : "float-slow"}`}
              />
            </button>
          </div>

          {/* Catch feedback — a handful of drifting motes, capped and auto-cleared. */}
          {burstKey > 0 && catchAt && (
            <div
              key={burstKey}
              className="pointer-events-none absolute"
              style={{ left: `${catchAt.x}%`, top: `${catchAt.y}%` }}
              aria-hidden
            >
              {particles.map((_, i) => {
                const angle = (360 / particles.length) * i;
                return (
                  <span
                    key={i}
                    className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={
                      {
                        background: i % 2 === 0 ? "var(--ice)" : "var(--champagne)",
                        "--angle": `${angle}deg`,
                        "--dist": "-52px",
                        animation: "catch-burst 650ms ease-out forwards",
                      } as CSSProperties
                    }
                  />
                );
              })}
            </div>
          )}

          {phase === "playing" && (
            <p className="absolute top-0 right-0 text-xs tracking-[0.25em] text-[var(--champagne)]">
              {catches} / {TARGET_CATCHES}
            </p>
          )}

          {phase === "intro" && (
            <Reveal className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-sm text-center">
                <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.1]">
                  Catch the light.
                </h1>
                <p className="mt-5 text-muted-foreground">
                  It drifts on its own — {isCoarsePointer ? "tap" : "chase and click"} it{" "}
                  {TARGET_CATCHES} times.
                </p>
                <button onClick={begin} className="lux-link mt-8 inline-flex items-center gap-2 text-sm">
                  Begin <span aria-hidden>→</span>
                </button>
              </div>
            </Reveal>
          )}

          {phase === "finished" && (
            <Reveal className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-sm text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Caught</p>
                <h2 className="mt-4 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.15]">
                  Light, held for a moment.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  You caught it {TARGET_CATCHES} times. Some things are worth chasing.
                </p>
                <div className="mt-8 flex items-center justify-center gap-6">
                  <button onClick={begin} className="lux-link text-sm">
                    Play again
                  </button>
                  <Link to="/" className="lux-link text-sm">
                    Back home
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
