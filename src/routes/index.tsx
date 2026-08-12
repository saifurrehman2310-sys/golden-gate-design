import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-gold.jpg";
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
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1024}
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" /> Creative Studio · Est. Pune
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.9rem,8.5vw,7rem)] leading-[0.95] font-semibold">
              Websites Your <br />
              <span className="text-gold-gradient">Customers Remember.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design and build premium websites that earn trust in seconds, turn visitors into
              enquiries, and give growing businesses a presence that finally matches their standards.
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
          <Reveal delay={460}>
            <dl className="mt-24 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/[0.08] pt-8 sm:grid-cols-4">
              {[
                ["7+", "Projects delivered"],
                ["3", "Markets served"],
                ["100%", "Custom builds"],
                ["48h", "Typical first draft"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-[var(--gold)]">{k}</dt>
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
                className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212]"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212]/70" />
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
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Saif Studio</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Four disciplines behind every website we ship.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 90} className="bg-[#0d0d0d]">
                <div className="group h-full p-10 transition-colors duration-500 hover:bg-[#121212] lg:p-14">
                  <span className="font-display text-sm text-[var(--gold)]">{p.n}</span>
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
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
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
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121212] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40"
              >
                <div>
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-[var(--gold)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-10 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--gold)]"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Process</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Five steps. No surprises.
            </h2>
          </Reveal>
          <ol className="mt-20 border-l border-white/[0.08] pl-8 lg:pl-14">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 90} className="relative pb-14 last:pb-0">
                <span className="absolute top-2 -left-[2.3rem] h-2.5 w-2.5 rounded-full bg-[var(--gold)] lg:-left-[3.8rem]" />
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-display text-sm text-[var(--gold)]">0{i + 1}</span>
                  <h3 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold">{s.step}</h3>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
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

        <Reveal delay={120} className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08]">
          <img
            src={caseStudy.image}
            alt="Burger Bliss restaurant website case study"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[22rem] w-full object-cover md:h-[34rem]"
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <Reveal>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Challenge</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
          </Reveal>
          <Reveal delay={90}>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Solution</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
          </Reveal>
          <Reveal delay={180}>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Results</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {caseStudy.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                  {r}
                </li>
              ))}
            </ul>
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
