import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";
import { processSteps } from "@/data/processSteps";
import { previewNote } from "@/data/clientJourney";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const current = processSteps[active];

  return (
    <>
      <section className="relative overflow-hidden bg-grain">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 20%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 70%), radial-gradient(55% 45% at 20% 90%, color-mix(in oklab, var(--iris) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-16 text-center lg:px-10 lg:pt-52 lg:pb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">How It Works</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98] font-semibold">
              Five steps, <span className="text-gold-gradient">one clear path.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              From the first conversation to handover. Choose a step to see what happens.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="glass-panel glass-edge relative overflow-hidden rounded-2xl p-6 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 50% at 20% 10%, color-mix(in oklab, var(--ice) 10%, transparent), transparent 70%), radial-gradient(60% 50% at 90% 90%, color-mix(in oklab, var(--champagne) 9%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-5" role="tablist" aria-label="Project steps">
              {processSteps.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.n}
                    type="button"
                    role="tab"
                    id={`step-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="step-panel"
                    onClick={() => setActive(i)}
                    className="group rounded-xl text-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60"
                  >
                    <div
                      className={`mx-auto aspect-square w-full transition-all duration-[400ms] ease-out motion-reduce:transition-none ${
                        isActive ? "scale-[1.05] opacity-100" : "scale-100 opacity-70 group-hover:opacity-100"
                      }`}
                    >
                      <img src={s.img} alt={`${s.step} icon`} className="h-full w-full object-contain" />
                    </div>
                    <p className={`mt-3 text-xs ${isActive ? "text-[var(--champagne)]" : "text-muted-foreground"}`}>
                      {s.n}
                    </p>
                    <p className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {s.step}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div
          id="step-panel"
          role="tabpanel"
          aria-labelledby={`step-tab-${active}`}
          aria-live="polite"
          className="glass-frame glass-edge mx-auto mt-8 max-w-3xl rounded-2xl p-8 text-center lg:p-10"
        >
          <p className="text-xs tracking-[0.25em] text-[var(--gold)] uppercase">
            Step {current.n} · {current.step}
          </p>
          <h2 className="mt-4 text-2xl font-semibold">{current.title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">{current.detail}</p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {previewNote}
        </p>

        <div className="mt-14 flex flex-col items-center gap-5">
          <MagneticLink to="/contact">Start a Project</MagneticLink>
          <p className="text-xs text-muted-foreground">
            See our <Link to="/pricing" className="lux-link text-[var(--champagne)]">pricing</Link> and{" "}
            <Link to="/terms" className="lux-link text-[var(--champagne)]">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
