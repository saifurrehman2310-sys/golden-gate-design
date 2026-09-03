import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { FloatingBlobs } from "@/components/site/FloatingBlobs";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

import heroSphere from "@/assets/v2/hero-swirl.png";
import { HeroOrbitalSymbolism } from "@/components/site/HeroOrbitalSymbolism";
import glassRibbon from "@/assets/glass-ribbon.png";
import glassWave from "@/assets/glass-wave.png";
import glassDroplet from "@/assets/glass-droplet.png";
import glassCube from "@/assets/v2/cube.png";
import glassSpiral from "@/assets/v2/spiral.png";
import glassBrackets from "@/assets/v2/code-brackets.png";
import glassStar from "@/assets/v2/star.png";
import serviceLeaf from "@/assets/v3/service-leaf.png";
import serviceCube from "@/assets/v3/service-cube.png";
import serviceRibbon from "@/assets/v3/service-ribbon.png";
import serviceSpiral from "@/assets/v3/service-spiral.png";
import serviceBrackets from "@/assets/v3/service-brackets.png";
import serviceStar from "@/assets/v3/service-star.png";
import connectFigure from "@/assets/v2/hourglass-spheres.png";

import tileDiscover from "@/assets/v2/tile-magnify.png";
import tileDefine from "@/assets/v2/tile-sphere.png";
import tileDesign from "@/assets/v2/tile-knot.png";
import tileDevelop from "@/assets/v2/tile-cube.png";
import tileDeliver from "@/assets/v2/tile-paperplane.png";
import processRibbon from "@/assets/v3/process-ribbon.png";

const processSteps = [
  { n: "01", step: "Discover", img: tileDiscover },
  { n: "02", step: "Define", img: tileDefine },
  { n: "03", step: "Design", img: tileDesign },
  { n: "04", step: "Develop", img: tileDevelop },
  { n: "05", step: "Deliver", img: tileDeliver },
];

const serviceIcons: Record<string, string> = {
  "brand-identity": serviceLeaf,
  "web-design": serviceCube,
  "ui-ux-design": serviceRibbon,
  "motion-design": serviceSpiral,
  "web-development": serviceBrackets,
  "digital-strategy": serviceStar,
};

const serviceDescriptions: Record<string, string> = {
  "brand-identity": "Making brands instantly recognisable.",
  "web-design": "Websites built to be remembered.",
  "ui-ux-design": "Experiences that feel effortless.",
  "motion-design": "Giving ideas movement and energy.",
  "web-development": "Turning concepts into working experiences.",
  "digital-strategy": "Making creative decisions with purpose.",
};

const featured = ["burger-bliss", "financial-advisor", "sai-real-estate"].map(
  (s) => projects.find((p) => p.slug === s)!,
);

/** Process tiles already have their glass frame baked into the source image — render bare, no extra box. */
function ProcessTile({
  img,
  alt,
  active = false,
  className = "",
}: {
  img: string;
  alt: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative transition-transform duration-[400ms] ease-out motion-reduce:transition-none motion-reduce:!scale-100 ${
        active ? "scale-[1.045]" : "scale-100"
      } ${className}`}
    >
      <img src={img} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

/** Services icons are raw un-framed sculptures — presented directly with ambient glow only, no border/card box. */
function SculptureIcon({
  img,
  alt,
  active = false,
  className = "",
}: {
  img: string;
  alt: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div className={`group relative ${className}`}>
      <div
        className="pointer-events-none absolute inset-[6%] rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          opacity: active ? 0.85 : undefined,
          background:
            "radial-gradient(60% 60% at 40% 40%, color-mix(in oklab, var(--ice) 14%, transparent), transparent 70%), radial-gradient(50% 50% at 65% 65%, color-mix(in oklab, var(--champagne) 12%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <img
        src={img}
        alt={alt}
        className={`relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
          active ? "scale-110" : ""
        }`}
      />
    </div>
  );
}

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain pt-40 pb-20 lg:pt-48 lg:pb-28">
        {/* strong ambient glow across the whole hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 70% 30%, color-mix(in oklab, var(--ice) 14%, transparent), transparent 65%), radial-gradient(70% 60% at 15% 80%, color-mix(in oklab, var(--iris) 12%, transparent), transparent 70%), radial-gradient(60% 50% at 40% 10%, color-mix(in oklab, var(--champagne) 9%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        {/* scattered abstract glass blobs across the hero, less blurred and brighter than before */}
        <FloatingBlobs
          positions={[
            { blob: 0, top: "8%", left: "6%", size: "w-20 sm:w-28" },
            { blob: 1, top: "38%", left: "22%", size: "w-24 sm:w-32", delay: "2s" },
            { blob: 2, top: "65%", left: "10%", size: "w-16 sm:w-24", delay: "4s" },
            { blob: 3, top: "15%", left: "42%", size: "w-20 sm:w-28", delay: "1s" },
            { blob: 4, top: "55%", left: "48%", size: "w-16 sm:w-24", delay: "3s" },
            { blob: 5, top: "30%", left: "62%", size: "w-20 sm:w-28", delay: "5s" },
            { blob: 6, top: "78%", left: "30%", size: "w-16 sm:w-20", delay: "2.5s" },
            { blob: 7, top: "5%", left: "26%", size: "w-14 sm:w-20", delay: "3.5s" },
            { blob: 8, top: "45%", left: "80%", size: "w-16 sm:w-24", delay: "1.5s" },
            { blob: 9, top: "82%", left: "70%", size: "w-14 sm:w-20", delay: "4.5s" },
          ]}
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
                  className="absolute inset-[-25%] rounded-full blur-3xl opacity-80"
                  style={{
                    background:
                      "radial-gradient(45% 45% at 35% 40%, color-mix(in oklab, var(--ice) 32%, transparent), transparent 70%), radial-gradient(40% 40% at 68% 62%, color-mix(in oklab, var(--champagne) 28%, transparent), transparent 70%)",
                  }}
                />
                <HeroOrbitalSymbolism
                  layer="back"
                  className="pointer-events-none absolute -inset-[15%] opacity-90"
                />
                <img src={heroSphere} alt="" className="float-slow relative h-full w-full object-contain" />
                <HeroOrbitalSymbolism
                  layer="front"
                  className="pointer-events-none absolute -inset-[15%] opacity-90"
                />
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
        <FloatingBlobs
          positions={[
            { blob: 15, top: "3%", left: "10%", size: "w-14" },
            { blob: 1, top: "92%", left: "85%", size: "w-16", delay: "2.5s" },
          ]}
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

        <div className="relative mt-20 grid gap-16 py-6 sm:grid-cols-3 sm:gap-6">
          {featured.map((p, i) => {
            const tilt = [-4, 3, -3][i % 3];
            const offset = ["sm:mt-6", "sm:-mt-4", "sm:mt-10"][i % 3];
            return (
              <Reveal key={p.slug} delay={i * 90} className={offset}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group relative block transition-transform duration-500 hover:z-10 hover:!rotate-0"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <div className="glass-panel glass-edge relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
                    <img
                      src={p.image}
                      alt={`${p.name} website`}
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition-all duration-700 ease-[var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--background)_75%,transparent)] via-transparent to-transparent" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(60% 50% at 30% 20%, color-mix(in oklab, var(--ice) 16%, transparent), transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <span className="glass-frame absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md">
                      <ArrowUpRight size={15} className="text-foreground" />
                    </span>
                    <div className="absolute bottom-5 left-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">{p.category}</p>
                      <p className="mt-1 text-lg font-semibold">{p.name}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Services</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
              Everything your business needs to look inevitable online.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-panel glass-edge relative mt-14 overflow-hidden rounded-2xl p-6 lg:p-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 60% at 15% 20%, color-mix(in oklab, var(--ice) 12%, transparent), transparent 70%), radial-gradient(70% 60% at 85% 80%, color-mix(in oklab, var(--champagne) 10%, transparent), transparent 70%)",
                }}
                aria-hidden
              />
              <FloatingBlobs
                positions={[
                  { blob: 10, top: "5%", left: "88%", size: "w-16" },
                  { blob: 11, top: "75%", left: "3%", size: "w-14", delay: "2s" },
                  { blob: 12, top: "40%", left: "50%", size: "w-16", delay: "3.5s" },
                  { blob: 13, top: "85%", left: "60%", size: "w-14", delay: "1s" },
                ]}
              />
              <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-6">
                {services.map((s, i) => {
                  const isActive = activeService === s.slug;
                  return (
                    <Reveal key={s.slug} delay={i * 60}>
                      <Link
                        to="/services"
                        className="group block text-center transition-opacity duration-300 ease-out"
                        style={{ opacity: activeService && !isActive ? 0.6 : 1 }}
                        onMouseEnter={() => setActiveService(s.slug)}
                        onMouseLeave={() => setActiveService((cur) => (cur === s.slug ? null : cur))}
                        onFocus={() => setActiveService(s.slug)}
                        onBlur={() => setActiveService((cur) => (cur === s.slug ? null : cur))}
                        onClick={(e) => {
                          if (activeService !== s.slug) {
                            e.preventDefault();
                            setActiveService(s.slug);
                          }
                        }}
                      >
                        <SculptureIcon
                          img={serviceIcons[s.slug]}
                          alt={s.title}
                          active={isActive}
                          className="aspect-square w-full"
                        />
                        <p
                          className="mt-3 text-xs leading-tight font-medium transition-colors group-hover:text-[var(--champagne)] sm:text-sm"
                          style={{ color: isActive ? "var(--champagne)" : undefined }}
                        >
                          {s.title}
                        </p>
                        <p
                          className="overflow-hidden text-[11px] leading-snug text-muted-foreground transition-all duration-300 ease-out sm:text-xs"
                          style={{
                            maxHeight: isActive ? "2.75rem" : "0px",
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? "0.35rem" : "0px",
                          }}
                        >
                          {serviceDescriptions[s.slug]}
                        </p>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Process</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold">
            Five steps. No surprises.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-panel glass-edge relative mt-14 overflow-hidden rounded-2xl p-6 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 50% at 20% 10%, color-mix(in oklab, var(--ice) 10%, transparent), transparent 70%), radial-gradient(60% 50% at 90% 90%, color-mix(in oklab, var(--champagne) 9%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <FloatingBlobs
              positions={[
                { blob: 14, top: "8%", left: "5%", size: "w-14" },
                { blob: 15, top: "80%", left: "92%", size: "w-16", delay: "3s" },
                { blob: 0, top: "85%", left: "15%", size: "w-14", delay: "2s" },
                { blob: 3, top: "10%", left: "80%", size: "w-14", delay: "4s" },
              ]}
            />
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 w-[130%] -translate-x-1/2 -translate-y-[35%] opacity-45 blur-[2px]"
              aria-hidden
            >
              <img src={processRibbon} alt="" className="h-auto w-full object-contain" />
            </div>
            <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-5">
              {processSteps.map((s, i) => {
                const isActive = activeStep === s.n;
                return (
                  <Reveal key={s.n} delay={i * 90} className="text-center">
                    <div
                      className="cursor-pointer text-center transition-opacity duration-[400ms] ease-out motion-reduce:transition-none"
                      style={{ opacity: activeStep && !isActive ? 0.88 : 1 }}
                      role="button"
                      tabIndex={0}
                      onMouseEnter={() => setActiveStep(s.n)}
                      onMouseLeave={() => setActiveStep((cur) => (cur === s.n ? null : cur))}
                      onFocus={() => setActiveStep(s.n)}
                      onBlur={() => setActiveStep((cur) => (cur === s.n ? null : cur))}
                      onClick={() => setActiveStep(s.n)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveStep(s.n);
                        }
                      }}
                    >
                      <ProcessTile
                        img={s.img}
                        alt={`${s.step} icon`}
                        active={isActive}
                        className="mx-auto aspect-square w-full"
                      />
                      <p
                        className="mt-3 text-xs text-[var(--champagne)] transition-opacity duration-[400ms] ease-out motion-reduce:transition-none"
                        style={{ opacity: isActive ? 1 : 0.85 }}
                      >
                        {s.n}
                      </p>
                      <p
                        className="text-sm font-medium transition-opacity duration-[400ms] ease-out motion-reduce:transition-none"
                        style={{ opacity: isActive ? 1 : 0.9 }}
                      >
                        {s.step}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="glass-panel glass-edge relative overflow-hidden rounded-2xl p-8 lg:p-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 55% at 15% 40%, color-mix(in oklab, var(--iris) 10%, transparent), transparent 70%), radial-gradient(55% 50% at 90% 70%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <FloatingBlobs
              positions={[
                { blob: 5, top: "10%", left: "90%", size: "w-16" },
                { blob: 6, top: "82%", left: "8%", size: "w-14", delay: "2.5s" },
                { blob: 8, top: "55%", left: "45%", size: "w-14", delay: "1.5s" },
              ]}
            />
            <div className="relative grid items-center gap-14 lg:grid-cols-2">
              <div>
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
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
                <img src={glassDroplet} alt="" className="float-slow relative h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </Reveal>
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
        <FloatingBlobs
          positions={[
            { blob: 9, top: "12%", left: "6%", size: "w-14" },
            { blob: 10, top: "78%", left: "94%", size: "w-16", delay: "3.5s" },
            { blob: 11, top: "50%", left: "40%", size: "w-14", delay: "2s" },
          ]}
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
              Got a project in mind? We'd love to hear about it.
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
        <FloatingBlobs
          positions={[
            { blob: 12, top: "15%", left: "45%", size: "w-14" },
            { blob: 13, top: "70%", left: "55%", size: "w-16", delay: "2s" },
            { blob: 14, top: "40%", left: "15%", size: "w-14", delay: "3s" },
          ]}
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
