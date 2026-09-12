import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import spark from "@/assets/v3/blob-0.png";

const TARGET_CATCHES = 9;

type Point = { x: number; y: number };
type Phase = "intro" | "playing" | "finished";

function randomPoint(margin: number): Point {
  return {
    x: margin + Math.random() * (100 - margin * 2),
    y: margin + Math.random() * (100 - margin * 2),
  };
}

/**
 * "Catch the Light" — a real reaction game dressed as a small interactive
 * installation. Loop: the orb appears at a random point and waits -> the
 * player finds and taps/clicks it -> it reacts and relocates -> repeat.
 * As catches climb it gets a little less predictable (tighter margins,
 * a chance of one mid-life "juke", faster respawns) but stays fair.
 * Pure CSS-transform driven -- no canvas, no extra dependencies.
 */
export default function Play() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [orbAt, setOrbAt] = useState<Point>({ x: 50, y: 46 });
  const [visible, setVisible] = useState(false);
  const [catchAt, setCatchAt] = useState<Point | null>(null);
  const [catches, setCatches] = useState(0);
  const [burstKey, setBurstKey] = useState(0);

  const jukeTimer = useRef<number | null>(null);
  const respawnTimer = useRef<number | null>(null);
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);

  const clearTimers = () => {
    if (jukeTimer.current) window.clearTimeout(jukeTimer.current);
    if (respawnTimer.current) window.clearTimeout(respawnTimer.current);
  };

  useEffect(() => clearTimers, []);

  const spawn = useCallback(
    (level: number) => {
      const margin = Math.max(10, 18 - level);
      const point = randomPoint(margin);
      setOrbAt(point);
      setVisible(true);

      // From a handful of catches on, there's a growing (capped) chance the
      // orb slips to a new spot once before it's caught -- a fair, small
      // "juke" rather than constant unpredictable fleeing.
      if (!reducedMotion) {
        const jukeChance = Math.min(0.5, level * 0.07);
        if (Math.random() < jukeChance) {
          jukeTimer.current = window.setTimeout(
            () => {
              setOrbAt(randomPoint(margin));
            },
            550 + Math.random() * 400,
          );
        }
      }
    },
    [reducedMotion],
  );

  const begin = () => {
    clearTimers();
    setCatches(0);
    setCatchAt(null);
    setPhase("playing");
    spawn(0);
  };

  const handleCatch = () => {
    if (phase !== "playing" || !visible) return;
    clearTimers();
    setVisible(false);
    setCatchAt(orbAt);
    setBurstKey((k) => k + 1);

    setCatches((c) => {
      const next = c + 1;
      if (next >= TARGET_CATCHES) {
        respawnTimer.current = window.setTimeout(() => setPhase("finished"), 700);
      } else {
        const delay = Math.max(260, 520 - next * 20);
        respawnTimer.current = window.setTimeout(() => spawn(next), delay);
      }
      return next;
    });
  };

  const particleCount = reducedMotion ? 3 : isCoarsePointer ? 5 : 8;
  const particles = useMemo(() => Array.from({ length: particleCount }), [particleCount]);

  return (
    <section className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-grain">
      {/* Deep gallery environment -- mostly empty, light concentrated near the orb. */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 45%, color-mix(in oklab, var(--ice) 10%, transparent) 0%, color-mix(in oklab, var(--champagne) 6%, transparent) 40%, transparent 75%)",
          opacity: visible ? 0.9 : 0.5,
        }}
        aria-hidden
      />

      <div className="relative flex min-h-0 flex-1 flex-col px-4 pt-24 pb-6 sm:px-6 sm:pt-28 lg:px-10">
        {phase === "playing" && (
          <p className="pointer-events-none absolute top-24 right-5 text-xs tracking-[0.25em] text-[var(--champagne)] sm:top-28 sm:right-8">
            {String(catches).padStart(2, "0")} caught
          </p>
        )}

        <div className="relative min-h-0 w-full flex-1 overflow-hidden">
          {phase === "intro" && (
            <div
              role="button"
              tabIndex={0}
              onClick={begin}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  begin();
                }
              }}
              aria-label="Begin -- catch the light"
              className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center text-center"
            >
              <Reveal>
                <h1 className="font-display text-[clamp(1.9rem,6vw,3.2rem)] leading-[1.1]">
                  Catch the Light.
                </h1>
                <p className="mt-4 text-sm tracking-[0.15em] text-muted-foreground uppercase">
                  {isCoarsePointer ? "Tap" : "Click"} to begin
                </p>
              </Reveal>
            </div>
          )}

          {phase !== "intro" && (
            <div
              className="absolute flex items-center justify-center transition-[left,top,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: `${orbAt.x}%`,
                top: `${orbAt.y}%`,
                transform: "translate(-50%, -50%)",
                opacity: visible ? 1 : 0,
              }}
            >
              <span
                className="pointer-events-none absolute inset-[-170%] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--ice) 44%, transparent) 0%, color-mix(in oklab, var(--champagne) 24%, transparent) 45%, transparent 75%)",
                }}
                aria-hidden
              />
              <button
                type="button"
                aria-label="Catch the light"
                onClick={handleCatch}
                disabled={!visible}
                className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20"
              >
                <img
                  src={spark}
                  alt=""
                  aria-hidden
                  className={`relative h-full w-full object-contain ${reducedMotion ? "" : "float-slow"}`}
                />
              </button>
            </div>
          )}

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

          {phase === "finished" && (
            <Reveal className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-sm px-4 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Caught</p>
                <h2 className="mt-4 font-display text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.15]">
                  Light, held for a moment.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {TARGET_CATCHES} catches. Some things are worth chasing.
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
