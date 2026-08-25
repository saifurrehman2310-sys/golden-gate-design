import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";

const tiers = [
  {
    name: "Starter Website",
    price: "$250",
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
    name: "Business Website",
    price: "$450",
    featured: true,
    for: "Established businesses that need the website to generate enquiries.",
    features: [
      "Up to 8 custom-designed pages",
      "Conversion-focused copy structure",
      "Advanced SEO foundations",
      "Booking / enquiry funnel design",
      "Google Business Profile optimisation",
      "Speed & Core Web Vitals tuning",
      "30 days post-launch support",
    ],
  },
  {
    name: "Premium Website",
    price: "Custom",
    for: "Shopify stores, multi-location brands and full digital presence builds.",
    features: [
      "Unlimited pages & custom functionality",
      "Shopify or bespoke e-commerce build",
      "Full brand & visual identity direction",
      "Local SEO + Maps + social branding",
      "Analytics, tracking & reporting setup",
      "Ongoing maintenance retainer available",
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
              One new customer usually covers the entire build. Fixed scope, fixed price, no hourly
              surprises — and you own everything.
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
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`glass-frame glass-frame-hover glass-edge relative flex h-full flex-col overflow-hidden rounded-2xl p-9 transition-all duration-500 hover:-translate-y-1.5 lg:p-11 ${
                  t.featured ? "border-[var(--gold)]/30" : ""
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
                    Most chosen
                  </span>
                )}
                <h2 className="relative text-xl font-semibold">{t.name}</h2>
                <p className="relative mt-6 font-display text-[3.2rem] leading-none text-gold-gradient">
                  {t.price}
                </p>
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
                  <MagneticLink to="/contact" variant={t.featured ? "gold" : "ghost"} className="w-full">
                    {t.price === "Custom" ? "Request a Quote" : "Get Started"}
                  </MagneticLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-20 grid gap-10 border-t border-white/[0.06] pt-14 md:grid-cols-3">
            {[
              ["No templates", "Every build is custom-designed for the business, never a recycled theme."],
              ["You own it", "Domain, hosting, content and code stay in your name from day one."],
              ["Fixed timelines", "Most projects launch within two to three weeks of kickoff."],
            ].map(([k, v]) => (
              <div key={k}>
                <h3 className="text-lg font-semibold">{k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
