import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

import heroSphere from "@/assets/v2/soft-blob.png";
import glassRibbon from "@/assets/glass-ribbon.png";
import glassWave from "@/assets/glass-wave.png";
import glassDroplet from "@/assets/glass-droplet.png";
import glassCube from "@/assets/v2/cube.png";
import glassSpiral from "@/assets/v2/spiral.png";
import glassBrackets from "@/assets/v2/code-brackets.png";
import glassStar from "@/assets/v2/star.png";
import glassLeaves from "@/assets/v2/leaf-brand.png";
import connectFigure from "@/assets/v2/hourglass-spheres.png";

import tileDiscover from "@/assets/v2/tile-magnify.png";
import tileDefine from "@/assets/v2/tile-sphere.png";
import tileDesign from "@/assets/v2/tile-knot.png";
import tileDevelop from "@/assets/v2/tile-cube.png";
import tileDeliver from "@/assets/v2/tile-paperplane.png";

const processSteps = [
  { n: "01", step: "Discover", img: tileDiscover },
  { n: "02", step: "Define", img: tileDefine },
  { n: "03", step: "Design", img: tileDesign },
  { n: "04", step: "Develop", img: tileDevelop },
  { n: "05", step: "Deliver", img: tileDeliver },
];

const serviceIcons: Record<string, string> = {
  "brand-identity": glassLeaves,
  "web-design": glassCube,
  "ui-ux-design": glassRibbon,
  "motion-design": glassSpiral,
  "web-development": glassBrackets,
  "digital-strategy": glassStar,
};

const featured = ["burger-bliss", "financial-advisor", "sai-real-estate"].map(
  (s) => projects.find((p) => p.slug === s)!,
);

function GlassTile({ img, alt, className = "" }: { img: string; alt: string; className?: string }) {
  return (
    <div className={`glass-frame glass-frame-hover glass-edge relative overflow-hidden rounded-2xl ${className}`}>
      <div
        className="pointer-events-none absolute inset-[10%] rounded-full opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 40% 40%, color-mix(in oklab, var(--ice) 12%, transparent), transparent 70%), radial-gradient(50% 50% at 65% 65%, color-mix(in oklab, var(--champagne) 10%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <img src={img} alt={alt} className="relative h-full w-full object-contain p-5" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 70% 30%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 65%), radial-gradient(70% 60% at 15% 80%, color-mix(in oklab, var(--iris) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--champagne)]">Digital Studio</p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-7 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-semibold">
                  Ideas that <br />
                  take <span className="text-gold-gradient">shape.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-md text-lg text-muted-foreground">
                  We design digital experiences that feel fluid, immersive and unforgettable.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
                <MagneticLink to="/portfolio">
                  View Work <ArrowRight size={16} />
                </MagneticLink>
                <MagneticLink to="/contact" variant="ghost">
                  Let's Talk
                </MagneticLink>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="relative mx-auto aspect-square w-full max-w-lg" aria-hidden>
                <div
                  className="absolute inset-[-15%] rounded-full blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(45% 45% at 40% 45%, color-mix(in oklab, var(--ice) 24%, transparent), transparent 70%), radial-gradient(40% 40% at 65% 60%, color-mix(in oklab, var(--champagne) 18%, transparent), transparent 70%)",
                  }}
                />
                <img src={heroSphere} alt="" className="float-slow relative h-full w-full object-contain" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 85% 15%, color-mix(in oklab, var(--champagne) 6%, transparent), transparent 70%), radial-gradient(50% 40% at 10% 85%, color-mix(in oklab, var(--iris) 6%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Featured Work</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Work that earns the click.
            </h2>
          </div>
          <Link to="/portfolio" className="lux-link text-sm text-muted-foreground hover:text-foreground">
            View all projects
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <div className="glass-panel glass-edge relative aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={`${p.name} website`}
                      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 ease-[var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--background)_70%,transparent)] via-transparent to-transparent" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(60% 50% at 30% 20%, color-mix(in oklab, var(--ice) 14%, transparent), transparent 70%)",
                      }}
                      aria-hidden
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{p.category}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-lg font-semibold">
                    {p.name}
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--champagne)]"
                    />
                  </p>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Services</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Everything your business needs to look inevitable online.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link to="/services" className="group block">
                  <GlassTile img={serviceIcons[s.slug]} alt={s.title} className="aspect-[4/3] w-full" />
                  <p className="mt-4 text-lg font-semibold transition-colors group-hover:text-[var(--champagne)]">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 40% at 20% 10%, color-mix(in oklab, var(--ice) 6%, transparent), transparent 70%), radial-gradient(55% 45% at 90% 90%, color-mix(in oklab, var(--champagne) 5%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Process</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
            Five steps. No surprises.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="text-center">
              <GlassTile img={s.img} alt={`${s.step} icon`} className="mx-auto aspect-square w-full" />
              <p className="mt-4 text-xs text-[var(--champagne)]">{s.n}</p>
              <p className="text-base font-medium">{s.step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">About Us</p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.1] font-semibold">
                We turn ideas into meaningful digital experiences.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                We're a small team of designers, thinkers and builders who believe premium doesn't have
                to mean corporate. Every project starts with the business and ends with something worth
                remembering.
              </p>
              <Link to="/about" className="lux-link mt-7 inline-flex items-center gap-2 text-sm">
                Our Story <ArrowRight size={15} />
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
                <div
                  className="absolute inset-[-10%] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(45% 45% at 45% 50%, color-mix(in oklab, var(--iris) 20%, transparent), transparent 70%)",
                  }}
                />
                <img src={glassDroplet} alt="" className="float-slow relative h-full w-full object-contain" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LET'S CONNECT */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 50% at 15% 40%, color-mix(in oklab, var(--iris) 8%, transparent), transparent 70%), radial-gradient(50% 45% at 85% 60%, color-mix(in oklab, var(--ice) 7%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full" aria-hidden>
              <img src={connectFigure} alt="" className="float-slow h-full w-full object-contain" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Let's Connect</p>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.1] font-semibold">
              Have an idea? Let's turn it into something extraordinary.
            </h2>
            <ul className="glass-frame glass-edge mt-8 space-y-4 rounded-2xl p-6 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[var(--champagne)]" />
                <a href="mailto:hello@saifstudio.com" className="text-muted-foreground hover:text-foreground">
                  hello@saifstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="shrink-0 text-[var(--champagne)]" />
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-foreground"
                >
                  @saif.studio
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="shrink-0 text-[var(--champagne)]" />
                Pune, India
              </li>
            </ul>
            <div className="mt-9">
              <MagneticLink to="/contact">
                Start a Conversation <ArrowRight size={16} />
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-grain">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 40%, color-mix(in oklab, var(--ice) 10%, transparent), transparent 70%), radial-gradient(50% 45% at 50% 90%, color-mix(in oklab, var(--iris) 8%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-72 opacity-55 lg:block" aria-hidden>
            <img src={glassWave} alt="" className="float-slow h-full w-full object-contain" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 -scale-x-100 opacity-55 lg:block" aria-hidden>
            <img src={glassRibbon} alt="" className="float-slow h-full w-full object-contain" />
          </div>
          <Reveal>
            <h2 className="relative text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.02] font-semibold">
              Let's build something <span className="text-gold-gradient">extraordinary.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="relative mt-11 flex justify-center">
            <MagneticLink to="/contact">
              Start a Project <ArrowRight size={16} />
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
