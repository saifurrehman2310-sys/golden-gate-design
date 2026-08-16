import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { projects } from "@/data/projects";

type ProjectStyle = {
  color: string;
  badge: string;
};

const projectStyles: Record<string, ProjectStyle> = {
  "burger-bliss": { color: "#F59E0B", badge: "Food & Hospitality" },
  "financial-advisor": { color: "#1E40AF", badge: "Finance" },
  "dental-clinic": { color: "#14B8A6", badge: "Healthcare" },
  "law-firm": { color: "#9CA3AF", badge: "Legal" },
  "ease-living-decor": { color: "#D97757", badge: "E-Commerce" },
  "pruthak-infra": { color: "#64748B", badge: "Construction" },
  "sai-real-estate": { color: "#B45309", badge: "Real Estate" },
  "goxxti": { color: "#39FF14", badge: "Music & Entertainment" },
};

const generatedAccentCss = Object.entries(projectStyles)
  .map(
    ([slug, { color }]) => `
      .project-accent-${slug} {
        --accent: ${color};
        border-color: ${color}30;
        box-shadow: 0 0 40px -12px ${color}25;
      }
      .project-accent-${slug}:hover {
        border-color: ${color}60;
        box-shadow: 0 0 60px -8px ${color}35;
      }
      .project-text-${slug} { color: ${color}; }
      .project-border-${slug} { border-color: ${color}15; }
      .project-border-light-${slug} { border-color: ${color}40; }
      .project-bg-${slug} { background-color: ${color}0D; }
    `
  )
  .join("");

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
      <style>{generatedAccentCss}</style>

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
          {projects.map((p, i) => {
            const style = projectStyles[p.slug];
            const isDefault = !style;
            return (
              <Reveal key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className={`group grid items-center gap-10 lg:grid-cols-12 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border lg:col-span-7 transition-all duration-500 ${
                      style ? `project-accent-${p.slug}` : "border-white/[0.08]"
                    }`}
                  >
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
                    {style?.badge && (
                      <span
                        className={`absolute top-5 right-5 rounded-full border px-4 py-1.5 text-xs tracking-wide backdrop-blur-sm bg-[#0a0a0a]/80 project-text-${p.slug} project-border-light-${p.slug}`}
                      >
                        {style.badge}
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-5">
                    <p
                      className={`text-xs uppercase tracking-[0.25em] ${
                        style ? `project-text-${p.slug}` : "text-[var(--gold)]"
                      }`}
                    >
                      {p.category}
                    </p>
                    <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold">{p.name}</h2>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{p.tagline}</p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <li
                          key={s}
                          className={`rounded-full border px-3.5 py-1.5 text-xs ${
                            style
                              ? `project-border-${p.slug} project-text-${p.slug}/80`
                              : "border-white/[0.08] text-muted-foreground"
                          }`}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span
                      className={`mt-9 inline-flex items-center gap-2 text-sm transition-colors ${
                        style ? `project-text-${p.slug}` : "group-hover:text-[var(--gold)]"
                      }`}
                    >
                      View case study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
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
