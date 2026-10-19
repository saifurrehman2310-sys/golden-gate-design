import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";
import { carePlans, careRange } from "@/data/carePlans";
import { previewNote } from "@/data/clientJourney";
import {
  domainOptions,
  firstYearNote,
  keptSeparate,
  renewalNote,
} from "@/data/domainHosting";

/**
 * `reference` prices are PROVISIONAL and not yet substantiated as prior prices. They are shown as
 * labelled "reference" prices only, with no "was"/"save"/discount wording, until verified.
 */
const tiers = [
  {
    name: "Essential Website",
    reference: "CA$499",
    price: "CA$389",
    for: "New businesses that need a credible presence, fast.",
    features: [
      "Up to 4 custom-designed pages",
      "Mobile-first responsive build",
      "Contact form + WhatsApp integration",
      "Basic on-page SEO setup",
      "Google Analytics installed",
      "Launch support",
    ],
  },
  {
    name: "Lead Generation Website",
    reference: "CA$999",
    price: "CA$589",
    featured: true,
    for: "Established businesses that need the website to generate enquiries.",
    features: [
      "Up to 8 custom-designed pages",
      "Conversion-focused copy structure",
      "Advanced SEO foundations",
      "Booking / enquiry funnel design",
      "Google Business Profile optimisation",
      "Speed & Core Web Vitals tuning",
    ],
  },
  {
    name: "Smart Website",
    reference: "CA$1,599",
    price: "CA$989",
    for: "Shopify stores, multi-location brands and full digital presence builds.",
    features: [
      "Shopify or bespoke e-commerce build",
      "Full brand & visual identity direction",
      "Local SEO + Maps + social branding",
      "Analytics, tracking & reporting setup",
    ],
  },
];

export default function Pricing() {
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
        <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 text-center lg:px-10 lg:pt-52 lg:pb-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Pricing</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98] font-semibold">
              An investment, not <span className="text-gold-gradient">an expense.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              Three clear website packages and optional ongoing care, all priced in Canadian
              dollars.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 40% at 85% 10%, color-mix(in oklab, var(--champagne) 6%, transparent), transparent 70%), radial-gradient(50% 40% at 10% 90%, color-mix(in oklab, var(--ice) 6%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={t.featured ? "lg:-mt-6" : ""}>
              <div
                className={`glass-frame glass-frame-hover glass-edge relative flex h-full flex-col overflow-hidden rounded-2xl p-9 transition-all duration-500 hover:-translate-y-1.5 lg:p-11 ${
                  t.featured ? "border-[var(--gold)]/30 lg:scale-[1.04]" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-[-20%] opacity-50 blur-3xl"
                  style={{
                    background: t.featured
                      ? "radial-gradient(45% 45% at 50% 30%, color-mix(in oklab, var(--champagne) 16%, transparent), transparent 70%)"
                      : "radial-gradient(45% 45% at 50% 30%, color-mix(in oklab, var(--ice) 10%, transparent), transparent 70%)",
                  }}
                  aria-hidden
                />
                {t.featured && (
                  <span className="relative mb-6 w-fit rounded-full border border-[var(--gold)]/50 bg-[color-mix(in_oklab,var(--gold)_12%,transparent)] px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--champagne)] uppercase backdrop-blur-sm">
                    Recommended
                  </span>
                )}
                <h2 className="relative text-xl font-semibold">{t.name}</h2>
                <div className="relative mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="sr-only">Reference price: </span>
                    <s className="decoration-white/60 decoration-[1.5px]">{t.reference}</s>
                    <span className="ml-2 text-[11px] tracking-wide uppercase">reference</span>
                  </p>
                  <p className="mt-2 flex items-baseline gap-2 font-display text-[3.2rem] leading-none text-gold-gradient">
                    {t.price}
                    <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      CAD
                    </span>
                  </p>
                </div>
                <p className="relative mt-6 text-sm leading-relaxed text-muted-foreground">{t.for}</p>
                <ul className="relative mt-9 flex-1 space-y-4 border-t border-white/[0.08] pt-8 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-10">
                  <MagneticLink to={`/contact?package=${encodeURIComponent(t.name)}`} variant={t.featured ? "gold" : "ghost"} className="w-full">
                    Get Started
                  </MagneticLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div id="care" className="glass-frame glass-edge mt-24 rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">After launch</p>
              <h2 className="mt-4 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] font-semibold">
                Care &amp; <span className="text-gold-gradient">Optimization</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Optional monthly care for your website, from CA${careRange.min} to CA${careRange.max} CAD
                per month depending on the plan. Prices are shown below; you can also enquire about any plan.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/[0.08] lg:grid-cols-3">
              {carePlans.map((c) => (
                <div key={c.id} className="flex flex-col bg-[color-mix(in_oklab,var(--background)_88%,transparent)] p-7 lg:p-8">
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  {c.monthlyPrice !== null && (
                    <p className="mt-4 flex items-baseline gap-2 font-display text-[2.6rem] leading-none text-gold-gradient">
                      CA${c.monthlyPrice}
                      <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        / month
                      </span>
                    </p>
                  )}
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{c.forWho}</p>
                  <Link
                    to={`/contact?plan=${encodeURIComponent(c.name)}`}
                    className="lux-link mt-6 self-start text-sm text-[var(--champagne)]"
                  >
                    Enquire about {c.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div id="domain" className="glass-frame glass-edge mt-10 rounded-2xl p-8 lg:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Domain &amp; hosting</p>
            <h2 className="mt-4 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] font-semibold">
              Your domain, <span className="text-gold-gradient">two ways</span>
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {domainOptions.map((o) => (
                <div key={o.id}>
                  <h3 className="text-lg font-semibold">{o.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="gold-rule my-8" />
            <div className="grid gap-6 md:grid-cols-3">
              {keptSeparate.map(([k, v]) => (
                <div key={k}>
                  <h3 className="text-base font-semibold">{k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {firstYearNote} {renewalNote}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">{previewNote}</p>
            <p className="mt-6 text-sm">
              <Link to="/how-it-works" className="lux-link text-[var(--champagne)]">
                See how a project works, from first conversation to ongoing support →
              </Link>
            </p>
            <p className="mt-8 text-xs text-muted-foreground">
              See our <Link to="/terms" className="lux-link text-[var(--champagne)]">Terms of Service</Link>{" "}
              and <Link to="/privacy" className="lux-link text-[var(--champagne)]">Privacy Policy</Link>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
