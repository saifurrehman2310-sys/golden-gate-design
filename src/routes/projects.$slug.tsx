import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticAnchor, MagneticLink } from "@/components/site/MagneticLink";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Saif Studio" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.category} Case Study | Saif Studio`;
    return {
      meta: [
        { title },
        { name: "description", content: p.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: p.tagline },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const index = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-grain">
        <img
          src={p.image}
          alt=""
          aria-hidden
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/85 to-[#0a0a0a]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10 lg:pt-52 lg:pb-32">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
            >
              <ArrowLeft size={15} /> All projects
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              {p.category} · {p.year}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-semibold">
              {p.name}
            </h1>
          </Reveal>
          <Reveal delay={230}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>
          </Reveal>
          <Reveal delay={320} className="mt-12 flex flex-wrap gap-4">
            {p.liveUrl ? (
              <MagneticAnchor href={p.liveUrl}>
                View Live Site <ArrowUpRight size={16} />
              </MagneticAnchor>
            ) : (
              <a
                href="#walkthrough"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[var(--gold-hover)]"
              >
                <Play size={15} /> Watch Walkthrough
              </a>
            )}
            <MagneticLink to="/contact" variant="ghost">
              Start a similar project
            </MagneticLink>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Overview</p>
            <ul className="mt-8 space-y-4 border-t border-white/[0.08] pt-8 text-sm">
              {p.services.map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <p className="text-[clamp(1.3rem,2.6vw,2rem)] leading-[1.35] font-display">{p.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE */}
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <img
          src={p.image}
          alt={`${p.name} project visual`}
          loading="lazy"
          width={1280}
          height={960}
          className="h-[20rem] w-full rounded-2xl border border-white/[0.08] object-cover md:h-[34rem]"
        />
      </Reveal>

      {/* CHALLENGE / SOLUTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">The Challenge</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.challenge}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">The Solution</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold">What we built</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <Reveal key={f} delay={i * 60} className="bg-[#0d0d0d]">
                <div className="h-full p-8 transition-colors duration-500 hover:bg-[#121212]">
                  <span className="font-display text-sm text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 leading-relaxed">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WALKTHROUGH / RESULTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {p.video && (
          <Reveal id-="walkthrough">
            <div id="walkthrough" className="scroll-mt-28">
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold">Project Walkthrough</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                A full screen-recorded walkthrough of the digital presence build. Video coming soon.
              </p>
              <div className="glass-panel mt-10 flex aspect-video w-full items-center justify-center rounded-2xl">
                <div className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)]">
                    <Play size={22} />
                  </span>
                  <p className="mt-5 text-sm tracking-wide text-muted-foreground uppercase">
                    Project Walkthrough — video coming soon
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className={p.video ? "mt-24" : ""}>
          <Reveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold">Results</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {p.results.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#121212] p-8">
                  <div className="gold-rule w-12" />
                  <p className="mt-5 leading-relaxed">{r}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-white/[0.08]">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-20 lg:px-10 lg:py-28"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Next project</p>
            <p className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-semibold transition-colors group-hover:text-[var(--gold)]">
              {next.name}
            </p>
          </div>
          <ArrowUpRight
            size={40}
            className="text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--gold)]"
          />
        </Link>
      </section>
    </>
  );
}
