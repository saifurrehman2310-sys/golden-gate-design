import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroGlass } from "@/components/site/HeroGlass";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink, MagneticAnchor } from "@/components/site/MagneticLink";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saif Studio — Websites Your Customers Remember" },
      {
        name: "description",
        content:
          "Premium website design, Shopify development and branding for restaurants, clinics, law firms, advisors and local businesses in the US, Canada and worldwide.",
      },
      { property: "og:title", content: "Saif Studio — Websites Your Customers Remember" },
      {
        property: "og:description",
        content: "A creative studio building conversion-focused websites that grow businesses.",
      },
    ],
  }),
  component: Home,
});

const featuredSlugs = ["burger-bliss", "financial-advisor", "sai-real-estate"];
const pillars = [
  {
    n: "01",
    title: "Strategy",
    body: "Every project starts with the business, not the browser. We map who you're selling to, what stops them, and the single action the site must drive.",
  },
  {
    n: "02",
    title: "Design",
    body: "Design that carries authority. Considered typography, generous space and imagery that makes a small business look like a category leader.",
  },
  {
    n: "03",
    title: "Performance",
    body: "Fast on a mid-range phone on mobile data. Clean markup, optimised media, accessible by default — because speed is a conversion feature.",
  },
  {
    n: "04",
    title: "Growth",
    body: "Search-ready structure, clean tracking and conversion paths you can measure. You should know exactly where enquiries come from.",
  },
];

const processSteps = [
  { step: "Discover", body: "A focused call to understand the business, the customer and what a win looks like." },
  { step: "Design", body: "Structure first, then visual direction. You see the design before a line of code." },
  { step: "Develop", body: "Hand-built, responsive and fast. Reviewed on real devices, not just a laptop." },
  { step: "Launch", body: "Domain, analytics, search setup and QA. A launch you don't have to manage." },
  { step: "Support", body: "Ongoing updates, monitoring and improvements as the business grows." },
];

function Home() {
  const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)!);
  const caseStudy = projects[0]!;

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-grain">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 70% 30%, color-mix(in oklab, var(--ice) 10%, transparent), transparent 65%), radial-gradient(70% 60% at 15% 80%, color-mix(in oklab, var(--iris) 9%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-32 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--champagne)]">
                <span className="h-px w-10 bg-[var(--champagne)]/60" /> Creative Studio · Est. Pune
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 max-w-3xl text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] font-semibold">
                Websites your <br />
                <span className="text-lux-gradient">customers remember.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We design and build premium websites that earn trust in seconds, turn visitors into
                enquiries, and give growing businesses a presence that finally matches their
                standards.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <MagneticLink to="/portfolio">
                  Explore Portfolio <ArrowRight size={16} />
                </MagneticLink>
                <MagneticLink to="/contact" variant="ghost">
                  Start a Project
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="order-first lg:order-none">
            <HeroGlass />
          </Reveal>

          <Reveal delay={460} className="lg:col-span-2">
            <dl className="glass-panel glass-edge mt-8 grid grid-cols-2 gap-8 rounded-2xl px-8 py-8 sm:grid-cols-4 lg:mt-16">
              {[
                ["7+", "Projects delivered"],
                ["3", "Markets served"],
                ["100%", "Custom builds"],
                ["48h", "Typical first draft"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-lux-gradient">{k}</dt>
                  <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Selected Work</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Work that earns the click.
            </h2>
          </div>
          <Link to="/portfolio" className="lux-link text-sm text-muted-foreground hover:text-foreground">
            View all projects
          </Link>
        </Reveal>

        <div className="mt-16 space-y-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="glass-panel glass-edge group relative block overflow-hidden rounded-2xl transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1 hover:shadow-[var(--shadow-lux)]"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[26rem]">
                    <img
                      src={p.image}
                      alt={`${p.name} website project`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1.2s] ease-[var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[color-mix(in_oklab,var(--background)_75%,transparent)]" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(70% 60% at 20% 20%, color-mix(in oklab, var(--ice) 12%, transparent), transparent 70%)",
                      }}
                      aria-hidden
                    />
                  </div>


                  <div className="flex flex-col justify-center gap-5 p-8 lg:p-14">
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight font-semibold">{p.name}</h3>
                    <p className="max-w-md text-muted-foreground">{p.tagline}</p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-[var(--gold)]">
                      View case study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="relative overflow-hidden border-y border-white/[0.08]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, color-mix(in oklab, var(--iris) 8%, transparent), transparent 70%), radial-gradient(50% 45% at 10% 90%, color-mix(in oklab, var(--ice) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Saif Studio</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Four disciplines behind every website we ship.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="glass-panel glass-edge group h-full rounded-2xl p-10 transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1 hover:shadow-[var(--shadow-glass)] lg:p-14">
                  <span className="font-display text-sm text-[var(--champagne)]">{p.n}</span>
                  <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                  <div className="gold-rule mt-5 w-16 origin-left scale-x-50 transition-transform duration-700 group-hover:scale-x-100" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 70%), radial-gradient(50% 45% at 85% 85%, color-mix(in oklab, var(--iris) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Services</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Everything your business needs to look inevitable online.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="glass-panel glass-edge group flex h-full flex-col justify-between rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--champagne)]/30"
                >
                  <div>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-[var(--champagne)]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-10 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--champagne)]"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden border-y border-white/[0.08]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, color-mix(in oklab, var(--iris) 8%, transparent), transparent 70%), radial-gradient(50% 45% at 10% 90%, color-mix(in oklab, var(--ice) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Process</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Five steps. No surprises.
            </h2>
          </Reveal>

          <div className="relative mt-20 lg:pl-10">
            <div
              className="pointer-events-none absolute top-4 bottom-4 left-[1.25rem] w-px lg:left-[3.75rem]"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--champagne) 50%, transparent) 12%, color-mix(in oklab, var(--champagne) 50%, transparent) 88%, transparent 100%)",
              }}
              aria-hidden
            />
            <ol className="space-y-6">
              {processSteps.map((s, i) => (
                <Reveal as="li" key={s.step} delay={i * 90} className="relative pl-10 lg:pl-20">
                  <span
                    className="absolute top-9 left-[0.875rem] h-3 w-3 rounded-full lg:left-[3.35rem]"
                    style={{
                      background: "var(--champagne)",
                      boxShadow: "0 0 18px 3px color-mix(in oklab, var(--champagne) 45%, transparent)",
                    }}
                    aria-hidden
                  />
                  <div className="glass-panel glass-edge rounded-2xl p-8 lg:p-10">
                    <div className="flex flex-wrap items-baseline gap-4">
                      <span className="font-display text-sm text-[var(--champagne)]">0{i + 1}</span>
                      <h3 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold">{s.step}</h3>
                    </div>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Featured Case Study</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
            Burger Bliss — built to fill tables.
          </h2>
        </Reveal>

        <Reveal delay={120} className="glass-panel glass-edge mt-14 overflow-hidden rounded-2xl p-2">
          <img
            src={caseStudy.image}
            alt="Burger Bliss restaurant website case study"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[22rem] w-full rounded-xl object-cover md:h-[34rem]"
          />
        </Reveal>


        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="glass-panel glass-edge h-full rounded-2xl p-8 lg:p-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Challenge</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="glass-panel glass-edge h-full rounded-2xl p-8 lg:p-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Solution</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="glass-panel glass-edge h-full rounded-2xl p-8 lg:p-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Results</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {caseStudy.results.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--champagne)]" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>


        <Reveal delay={120} className="mt-12 flex flex-wrap gap-4">
          <MagneticAnchor href={caseStudy.liveUrl!}>
            View Live Preview <ArrowUpRight size={16} />
          </MagneticAnchor>
          <MagneticLink to="/projects/burger-bliss" variant="ghost">
            Read full case study
          </MagneticLink>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.08] bg-grain">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center lg:py-44">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.02] font-semibold">
              Ready to Build Something <span className="text-gold-gradient">Unforgettable?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Tell us about the business. We'll come back with a plan, a timeline and a fixed price.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-12 flex justify-center">
            <MagneticLink to="/contact">
              Start Your Project <ArrowRight size={16} />
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
