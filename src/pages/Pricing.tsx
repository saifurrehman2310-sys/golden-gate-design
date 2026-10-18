import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";

const tiers = [
  {
    name: "Essential",
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
    name: "Lead Generation",
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
    name: "Smart Business",
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
              Three clear packages, priced in Canadian dollars. Full payment is made before
              development begins.
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
                    Get Started
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
              ["Pay once, then we build", "Full payment is required before development begins."],
              ["Questions first", "Not sure which package fits? Message us before you decide."],
            ].map(([k, v]) => (
              <div key={k}>
                <h3 className="text-lg font-semibold">{k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="glass-frame glass-edge rounded-2xl p-9 lg:p-11">
              <h2 className="text-xl font-semibold">Your domain, two ways</h2>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">You buy and own it.</span> You register
                  the domain in your own account and it stays in your name.
                </li>
                <li>
                  <span className="font-medium text-foreground">We manage it for you.</span> Saif Studio
                  handles the domain for an additional fee. Ask us for the details before you choose.
                </li>
              </ul>
            </div>
            <div className="glass-frame glass-edge rounded-2xl p-9 lg:p-11">
              <h2 className="text-xl font-semibold">Care &amp; Optimization</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Ongoing care for your site after launch, from{" "}
                <span className="font-medium text-foreground">CA$59 to CA$149 per month</span>. It's
                optional. Ask us which level suits your business.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <ol className="mx-auto mt-8 grid max-w-4xl gap-6 text-left text-sm leading-relaxed text-muted-foreground md:grid-cols-3">
              <li>
                <span className="text-[var(--gold)]">1.</span> Send an enquiry and choose the package
                that fits.
              </li>
              <li>
                <span className="text-[var(--gold)]">2.</span> Pay in full. Development begins after
                payment.
              </li>
              <li>
                <span className="text-[var(--gold)]">3.</span> We build your site and you review it.
              </li>
            </ol>
            <p className="mt-10 text-xs text-muted-foreground">
              See our <Link to="/terms" className="lux-link text-[var(--champagne)]">Terms of Service</Link>{" "}
              and <Link to="/privacy" className="lux-link text-[var(--champagne)]">Privacy Policy</Link>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
