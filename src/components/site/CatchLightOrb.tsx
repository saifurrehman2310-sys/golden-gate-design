import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import spark from "@/assets/v3/blob-0.png";

export type Point = { x: number; y: number };

export function randomPoint(margin: number): Point {
  return {
    x: margin + Math.random() * (100 - margin * 2),
    y: margin + Math.random() * (100 - margin * 2),
  };
}

/**
 * Core "catch the light" mechanic: the orb appears at a random point and
 * waits until caught, then relocates. Shared by the homepage teaser (short,
 * infinite loop) and the full /play page (progresses toward a target with
 * rising difficulty). Kept framework-light — plain state + timeouts, no
 * canvas or animation library.
 */
export function useCatchLight({
  targetCatches,
  reducedMotion,
  onFinish,
}: {
  /** Omit for an infinite, difficulty-capped loop (used by the homepage teaser). */
  targetCatches?: number;
  reducedMotion: boolean;
  onFinish?: () => void;
}) {
  const [orbAt, setOrbAt] = useState<Point>({ x: 50, y: 46 });
  const [visible, setVisible] = useState(false);
  const [catchAt, setCatchAt] = useState<Point | null>(null);
  const [catches, setCatches] = useState(0);
  const [burstKey, setBurstKey] = useState(0);

  const jukeTimer = useRef<number | null>(null);
  const respawnTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (jukeTimer.current) window.clearTimeout(jukeTimer.current);
    if (respawnTimer.current) window.clearTimeout(respawnTimer.current);
  };
  useEffect(() => clearTimers, []);

  const spawn = useCallback(
    (level: number) => {
      const margin = Math.max(10, 18 - level);
      setOrbAt(randomPoint(margin));
      setVisible(true);

      // Growing (capped) chance of one mid-life "juke" as the level rises —
      // keeps later catches lively without ever fleeing constantly.
      if (!reducedMotion) {
        const jukeChance = Math.min(0.5, level * 0.07);
        if (Math.random() < jukeChance) {
          jukeTimer.current = window.setTimeout(
            () => setOrbAt(randomPoint(margin)),
            550 + Math.random() * 400,
          );
        }
      }
    },
    [reducedMotion],
  );

  const start = useCallback(
    (resetCount = true) => {
      clearTimers();
      if (resetCount) setCatches(0);
      setCatchAt(null);
      spawn(0);
    },
    [spawn],
  );

  const catchOne = useCallback(() => {
    if (!visible) return;
    clearTimers();
    setVisible(false);
    setCatchAt(orbAt);
    setBurstKey((k) => k + 1);

    setCatches((c) => {
      const next = c + 1;
      if (targetCatches && next >= targetCatches) {
        respawnTimer.current = window.setTimeout(() => onFinish?.(), 700);
      } else {
        const level = targetCatches ? next : Math.min(next, 12);
        const delay = Math.max(260, 520 - level * 20);
        respawnTimer.current = window.setTimeout(() => spawn(level), delay);
      }
      return next;
    });
  }, [visible, orbAt, targetCatches, onFinish, spawn]);

  return { orbAt, visible, catchAt, catches, burstKey, start, catchOne };
}

/** The light itself — halo + glass spark, positioned as a percentage of its relative parent. */
export function LightOrb({
  at,
  visible,
  onCatch,
  reducedMotion,
  size = "h-16 w-16 sm:h-20 sm:w-20",
}: {
  at: Point;
  visible: boolean;
  onCatch: () => void;
  reducedMotion: boolean;
  size?: string;
}) {
  return (
    <div
      className="absolute flex items-center justify-center transition-[left,top,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ left: `${at.x}%`, top: `${at.y}%`, transform: "translate(-50%, -50%)", opacity: visible ? 1 : 0 }}
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
        onClick={onCatch}
        disabled={!visible}
        className={`relative flex items-center justify-center ${size}`}
      >
        <img
          src={spark}
          alt=""
          aria-hidden
          className={`relative h-full w-full object-contain ${reducedMotion ? "" : "float-slow"}`}
        />
      </button>
    </div>
  );
}

/** A handful of motes bursting outward from the catch point, capped and auto-cleared via the `key` remount. */
export function CatchBurst({
  at,
  burstKey,
  particleCount,
}: {
  at: Point;
  burstKey: number;
  particleCount: number;
}) {
  const particles = useMemo(() => Array.from({ length: particleCount }), [particleCount]);
  if (!burstKey) return null;
  return (
    <div
      key={burstKey}
      className="pointer-events-none absolute"
      style={{ left: `${at.x}%`, top: `${at.y}%` }}
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
  );
}

export function useInputProfile() {
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);
  return { reducedMotion, isCoarsePointer };
}
