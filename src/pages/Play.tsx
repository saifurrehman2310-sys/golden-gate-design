import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { LightOrb, CatchBurst, useCatchLight, useInputProfile } from "@/components/site/CatchLightOrb";

const TARGET_CATCHES = 9;

/**
 * "Catch the Light" — a real reaction game dressed as a small interactive
 * installation. Loop: the orb appears at a random point and waits -> the
 * player finds and taps/clicks it -> it reacts and relocates -> repeat.
 * As catches climb it gets a little less predictable (tighter margins,
 * a chance of one mid-life "juke", faster respawns) but stays fair.
 * Pure CSS-transform driven -- no canvas, no extra dependencies.
 */
export default function Play() {
  const [phase, setPhase] = useState<"intro" | "playing" | "finished">("intro");
  const { reducedMotion, isCoarsePointer } = useInputProfile();
  const { orbAt, visible, catchAt, catches, burstKey, start, catchOne } = useCatchLight({
    targetCatches: TARGET_CATCHES,
    reducedMotion,
    onFinish: () => setPhase("finished"),
  });

  const begin = () => {
    setPhase("playing");
    start();
  };

  const particleCount = reducedMotion ? 3 : isCoarsePointer ? 5 : 8;

  return (
    <section className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-grain">
      {/* Deep gallery environment -- quietly breathing, never busy. */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(48% 48% at 50% 42%, color-mix(in oklab, var(--ice) 11%, transparent) 0%, color-mix(in oklab, var(--champagne) 6%, transparent) 40%, transparent 75%)",
          opacity: visible ? 0.95 : 0.55,
        }}
        aria-hidden
      />
      {/* Slow drifting haze -- two oversized, heavily blurred fields moving on very long cycles. */}
      {!reducedMotion && (
        <>
          <div
            className="ambient-drift pointer-events-none absolute -inset-[20%] opacity-40"
            style={{
              background:
                "radial-gradient(35% 30% at 22% 30%, color-mix(in oklab, var(--iris) 16%, transparent), transparent 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden
          />
          <div
            className="ambient-drift-slow pointer-events-none absolute -inset-[20%] opacity-35"
            style={{
              background:
                "radial-gradient(32% 28% at 78% 72%, color-mix(in oklab, var(--champagne) 14%, transparent), transparent 70%)",
              filter: "blur(64px)",
            }}
            aria-hidden
          />
        </>
      )}
      {/* Faint suspended dust -- a handful of near-static motes, not a particle system. */}
      {!reducedMotion && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
          {[
            { top: "22%", left: "18%", delay: "0s" },
            { top: "68%", left: "12%", delay: "3s" },
            { top: "34%", left: "82%", delay: "1.5s" },
            { top: "76%", left: "70%", delay: "4.5s" },
            { top: "12%", left: "56%", delay: "2.2s" },
          ].map((d, i) => (
            <span
              key={i}
              className="float-slower absolute h-1 w-1 rounded-full bg-[var(--ice)]"
              style={{ top: d.top, left: d.left, animationDelay: d.delay }}
            />
          ))}
        </div>
      )}

      <div className="relative flex min-h-0 flex-1 flex-col px-4 pt-40 pb-8 sm:px-6 lg:pt-48 lg:pb-10">
        {phase === "playing" && (
          <p className="mb-2 text-right text-xs tracking-[0.25em] text-[var(--champagne)]">
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
            <LightOrb at={orbAt} visible={visible} onCatch={catchOne} reducedMotion={reducedMotion} />
          )}

          {catchAt && <CatchBurst at={catchAt} burstKey={burstKey} particleCount={particleCount} />}

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
