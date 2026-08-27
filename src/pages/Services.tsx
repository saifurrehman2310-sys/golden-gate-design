import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { services } from "@/data/services";
import glassLeaves from "@/assets/v3/service-leaf.png";
import glassCube from "@/assets/v3/service-cube.png";
import glassRibbon from "@/assets/v3/service-ribbon.png";
import glassSpiral from "@/assets/v3/service-spiral.png";
import glassBrackets from "@/assets/v3/service-brackets.png";
import glassStar from "@/assets/v3/service-star.png";

const serviceIcons: Record<string, string> = {
  "brand-identity": glassLeaves,
  "web-design": glassCube,
  "ui-ux-design": glassRibbon,
  "motion-design": glassSpiral,
  "web-development": glassBrackets,
  "digital-strategy": glassStar,
};

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 lg:px-10 lg:pt-52 lg:pb-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Services</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-semibold">
              Built for businesses that <span className="text-gold-gradient">need results.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Six services, one standard. Everything is custom-built, performance-tuned and designed to
              convert visitors into enquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-b border-white/[0.08] py-20 last:border-0 lg:py-28"
          >
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <div className="relative mb-8 aspect-square w-full max-w-[12rem]" aria-hidden>
                  <div
                    className="absolute inset-[-20%] rounded-full opacity-50 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 40% 40%, color-mix(in oklab, var(--ice) 14%, transparent), transparent 70%), radial-gradient(50% 50% at 65% 65%, color-mix(in oklab, var(--champagne) 12%, transparent), transparent 70%)",
                    }}
                  />
                  <img src={serviceIcons[s.slug]} alt="" className="relative h-full w-full object-contain" />
                </div>
                <span className="font-display text-sm text-[var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-semibold">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{s.short}</p>
              </Reveal>

              <div className="grid gap-10 lg:col-span-7 lg:grid-cols-2">
                <Reveal delay={80}>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">What it is</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.what}</p>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Who it's for</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.who}</p>
                </Reveal>
                <Reveal delay={160}>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Benefits</h3>
                  <ul className="mt-4 space-y-3 text-muted-foreground">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Process</h3>
                  <ol className="mt-4 flex flex-wrap gap-2">
                    {s.process.map((step) => (
                      <li
                        key={step}
                        className="rounded-full border border-white/[0.08] px-3.5 py-1.5 text-xs text-muted-foreground"
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>
            <Reveal delay={120} className="mt-12">
              <MagneticLink to="/contact" variant="ghost">
                Enquire about {s.title}
              </MagneticLink>
            </Reveal>
          </section>
        ))}
      </div>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold">
              Not sure which one you need?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Tell us the goal. We'll tell you the shortest route to it.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <MagneticLink to="/contact">Book a Free Consultation</MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
