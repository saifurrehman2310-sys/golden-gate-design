import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Saif Studio Case Studies" },
      {
        name: "description",
        content:
          "Real websites for restaurants, financial advisors, dental clinics, law firms, Shopify brands, construction firms and real estate agencies.",
      },
      { property: "og:title", content: "Portfolio — Saif Studio Case Studies" },
      {
        property: "og:description",
        content: "Eight case studies showing how Saif Studio turns websites into business results.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 lg:px-10 lg:pt-52 lg:pb-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Portfolio</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-semibold">
              Eight builds. <span className="text-gold-gradient">Eight results.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Every project below was built for a real business with a real target — more orders, more
              enquiries, more trust. Explore the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="space-y-24 lg:space-y-36">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className={`group grid items-center gap-10 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] lg:col-span-7">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} website`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover opacity-75 transition-all duration-[1.2s] ease-[var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute top-5 left-5 rounded-full border border-white/15 bg-[#0a0a0a]/70 px-4 py-1.5 text-xs tracking-wide backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{p.category}</p>
                  <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold">{p.name}</h2>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.tagline}</p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/[0.08] px-3.5 py-1.5 text-xs text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm transition-colors group-hover:text-[var(--gold)]">
                    View case study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold">
              Your business could be next.
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
