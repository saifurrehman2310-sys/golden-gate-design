import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 lg:px-10 lg:pt-52 lg:pb-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">About</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98] font-semibold">
              A digital partner, <span className="text-gold-gradient">not a vendor.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-[clamp(1.4rem,2.8vw,2.1rem)] leading-[1.35]">
              Saif Studio exists for one reason: too many good businesses lose customers to competitors
              with better websites.
            </p>
            <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                We work with restaurants, dental clinics, law firms, financial advisors, real estate
                agencies, gyms and education consultants across the United States, Canada and
                internationally. The pattern is always the same — the business is excellent offline, and
                invisible online.
              </p>
              <p>
                Our job is to close that gap. That means building trust in the first three seconds,
                explaining the offer without jargon, and making the next step obvious. Everything else —
                the typography, the animation, the performance budget — exists to serve that outcome.
              </p>
              <p>
                Saif is a final-year Civil Engineering student, and that background is not a footnote.
                Engineering is structure, tolerance and load-bearing decisions. The same discipline is
                what makes a website survive contact with real users — and it's why clients in real
                estate, construction and infrastructure find the conversations unusually easy: we already
                speak the language of sites, specifications and delivery timelines.
              </p>
              <p>
                Every project is handled directly. No account managers, no outsourced handoffs, no
                templates dressed up as custom work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121212] p-10">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">What we stand for</h2>
              <ul className="mt-8 space-y-8">
                {[
                  ["Clarity over cleverness", "If a visitor has to think, the design failed."],
                  ["Proof over promises", "Every claim on your site should be backed by something real."],
                  ["Speed as respect", "A slow site tells customers their time doesn't matter."],
                  ["Long-term thinking", "We build sites that can grow, not ones you replace in a year."],
                ].map(([k, v]) => (
                  <li key={k}>
                    <p className="font-semibold">{k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold">
              Let's build something worth remembering.
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <MagneticLink to="/contact">Start Your Project</MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
