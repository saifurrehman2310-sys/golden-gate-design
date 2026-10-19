import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";
import { processSteps, stageExplanations } from "@/data/processSteps";
import { previewNote } from "@/data/clientJourney";

export default function HowItWorks() {
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
              From the first conversation to handover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24 lg:px-10 lg:pb-32">
        <ol className="relative">
          {/* Thread connecting the five stages on larger screens */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--champagne) 35%, transparent) 12%, color-mix(in oklab, var(--champagne) 35%, transparent) 88%, transparent)" }}
            aria-hidden
          />
          {processSteps.map((s, i) => {
            const ex = stageExplanations[i];
            const flip = i % 2 === 1;
            return (
              <li key={s.n} className="relative py-10 lg:py-14">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-24">
                  <Reveal className={flip ? "lg:order-2" : ""}>
                    <div className="relative mx-auto aspect-square w-40 sm:w-52 lg:w-72">
                      <div
                        className="pointer-events-none absolute inset-[-25%] rounded-full opacity-60 blur-3xl"
                        style={{
                          background:
                            "radial-gradient(45% 45% at 50% 50%, color-mix(in oklab, var(--ice) 16%, transparent), transparent 70%)",
                        }}
                        aria-hidden
                      />
                      <img src={s.img} alt={`${s.step} icon`} className="float-slow relative h-full w-full object-contain" />
                    </div>
                  </Reveal>
                  <Reveal delay={100} className={`text-center ${flip ? "lg:order-1 lg:text-right" : "lg:text-left"}`}>
                    <p className="font-display text-5xl leading-none text-gold-gradient lg:text-6xl">{s.n}</p>
                    <h2 className="mt-4 text-3xl font-semibold lg:text-4xl">{s.step}</h2>
                    <p className="mt-5 font-display text-xl leading-snug text-foreground/90 lg:text-2xl">{ex.lead}</p>
                    <p className={`mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground ${flip ? "lg:mr-0 lg:ml-auto" : "lg:mx-0"}`}>
                      {ex.body}
                    </p>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {previewNote}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          After handover, optional monthly support is available through{" "}
          <Link to="/pricing#care" className="lux-link text-[var(--champagne)]">Care &amp; Optimization</Link>.
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
