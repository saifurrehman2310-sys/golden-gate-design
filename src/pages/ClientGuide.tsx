import { ArrowDownRight, ArrowRight, Check, CircleHelp, Globe2, Layers3, ShieldCheck, Sparkles, Store, WandSparkles } from "lucide-react";\nimport type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticLink";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import blobGlass from "@/assets/v3/blob-3.png";
import serviceCube from "@/assets/v3/service-cube.png";
import serviceLeaf from "@/assets/v3/service-leaf.png";
import serviceBrackets from "@/assets/v3/service-brackets.png";
import { carePlans } from "@/data/carePlans";
import { clientJourney, previewNote } from "@/data/clientJourney";
import { domainOptions, firstYearNote, hostingNote, renewalNote } from "@/data/domainHosting";

const packages = [
  {
    number: "01",
    name: "Essential Website",
    price: "CA$389",
    strap: "A confident first impression.",
    bestFor: "New businesses, independent professionals and local services that need a polished home online.",
    image: serviceLeaf,
    icon: Globe2,
    outcome: "Give customers one clear place to understand your business, trust what you do and contact you.",
    features: [
      ["Up to 4 custom-designed pages", "A focused set of pages shaped around your business and the information customers need."],
      ["Mobile-first responsive design", "A considered layout for phones, tablets and desktop screens."],
      ["Contact form + WhatsApp integration", "Make it straightforward for interested visitors to reach you."],
      ["Basic on-page SEO setup", "Foundational page structure and search metadata to help search engines understand the site."],
      ["Google Analytics installed", "A starting point for understanding how people find and use your website."],
      ["Launch support", "Support through the agreed launch and handover."],
    ],
    note: "Best when the priority is a strong, professional web presence with clear contact paths.",
  },
  {
    number: "02",
    name: "Lead Generation Website",
    price: "CA$589",
    strap: "Designed to turn visits into enquiries.",
    bestFor: "Established local businesses that want their website to do more than simply exist online.",
    image: serviceBrackets,
    icon: WandSparkles,
    outcome: "Guide visitors toward the next step, with a clearer journey from discovering your business to making an enquiry.",
    features: [
      ["Up to 8 custom-designed pages", "More room to explain services, answer questions and build confidence."],
      ["Conversion-focused copy structure", "Content hierarchy and calls to action arranged around the decisions customers need to make."],
      ["Advanced SEO foundations", "A more developed on-page structure to support discoverability."],
      ["Booking / enquiry funnel design", "A clearer route from interest to a booking request or enquiry."],
      ["Google Business Profile optimisation", "Help align your website and business profile for local discovery."],
      ["Speed & Core Web Vitals tuning", "Performance-focused refinements for a smoother browsing experience."],
    ],
    note: "A strong fit when enquiries, bookings and local visibility are central goals. SEO work does not guarantee rankings.",
    featured: true,
  },
  {
    number: "03",
    name: "Smart Website",
    price: "CA$989",
    strap: "A more connected digital presence.",
    bestFor: "Businesses that need e-commerce or a more joined-up brand and digital foundation.",
    image: serviceCube,
    icon: Store,
    outcome: "Bring the key parts of your online presence into a more cohesive experience, with the project scope defined around your needs.",
    features: [
      ["Shopify or bespoke e-commerce build", "A store experience built on Shopify or developed to suit the agreed requirements."],
      ["Full brand & visual identity direction", "A considered visual direction to help the digital experience feel recognisable and consistent."],
      ["Local SEO + Maps + social branding", "Foundational alignment across local discovery and social-facing brand presence."],
      ["Analytics, tracking & reporting setup", "Set up the agreed measurement foundations so performance can be understood over time."],
    ],
    note: "E-commerce requirements vary. The exact store scope, product/content volume and integrations are agreed before full development.",
  },
];

const principles = [
  { icon: Sparkles, title: "Designed for your business", text: "A visual direction shaped around your goals—not a one-size-fits-all template." },
  { icon: Layers3, title: "Clear scope before the build", text: "We discuss the pages, functionality and deliverables that fit the selected package before full development." },
  { icon: ShieldCheck, title: "A private preview first", text: "See a limited concept preview before deciding whether to continue with the project." },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{children}</p>;
}

export default function ClientGuide() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-grain">
        <div className="pointer-events-none absolute inset-0" aria-hidden style={{ background: "radial-gradient(55% 48% at 72% 28%, color-mix(in oklab, var(--ice) 17%, transparent), transparent 72%), radial-gradient(42% 42% at 18% 72%, color-mix(in oklab, var(--iris) 12%, transparent), transparent 72%), radial-gradient(32% 35% at 53% 0%, color-mix(in oklab, var(--champagne) 8%, transparent), transparent 75%)" }} />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-8 px-6 pb-20 pt-40 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-48">
          <div className="relative z-10">
            <Reveal><SectionLabel>Saif Studio · Client guide</SectionLabel></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,6.5rem)] leading-[.91] font-semibold tracking-[-.06em]">
                A better website.<br /><span className="text-gold-gradient">Built with intent.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Thoughtful design, purposeful structure and a clearer way for customers to discover your business, understand your offer and take the next step.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <MagneticLink to="/contact" variant="gold">Talk about your project <ArrowRight className="ml-2 inline" size={16} /></MagneticLink>
                <Link to="/pricing" className="lux-link text-sm text-[var(--champagne)]">View pricing on the site ↗</Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-wide text-muted-foreground">
                <span className="flex items-center gap-2"><Check size={14} className="text-[var(--gold)]" /> Three clear packages</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[var(--gold)]" /> Prices in CAD</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[var(--gold)]" /> Preview-first process</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="relative mx-auto w-full max-w-[560px]">
            <div className="pointer-events-none absolute inset-[8%] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ice) 22%, transparent), color-mix(in oklab, var(--iris) 10%, transparent) 45%, transparent 72%)" }} />
            <div className="relative aspect-square">
              <img src={blobGlass} alt="Translucent glass sculpture with cool refracted light" className="float-slow h-full w-full object-contain drop-shadow-[0_35px_70px_rgba(100,140,255,0.15)]" />
              <div className="absolute bottom-[8%] left-[4%] rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 shadow-2xl backdrop-blur-xl sm:bottom-[12%] sm:left-0">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Website packages</p>
                <p className="mt-1 font-display text-2xl text-gold-gradient">CA$389—989</p>
              </div>
              <div className="absolute right-[2%] top-[14%] hidden rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-foreground/80 backdrop-blur-xl sm:block">Design · Build · Launch</div>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10"><div className="gold-rule" /></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.02] font-semibold sm:text-5xl">Not just a website. <span className="text-gold-gradient">A more considered first impression.</span></h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return <Reveal key={p.title} delay={i * 90}>
                <div className="h-full border-t border-white/15 pt-5">
                  <Icon size={22} className="text-[var(--champagne)]" />
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden style={{ background: "radial-gradient(45% 28% at 50% 0%, color-mix(in oklab, var(--ice) 8%, transparent), transparent 75%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><SectionLabel>Choose your starting point</SectionLabel><h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] font-semibold sm:text-6xl">Three ways to move <span className="text-gold-gradient">your business forward.</span></h2></div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">Every project starts with a conversation about what you need, what matters most and which scope is the right fit.</p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-7">
            {packages.map((p, i) => {
              const Icon = p.icon;
              return <Reveal key={p.number} delay={i * 70}>
                <article className={`glass-frame glass-edge relative overflow-hidden rounded-[1.6rem] ${p.featured ? "border-[var(--gold)]/35" : ""}`}>
                  <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden style={{ background: p.featured ? "radial-gradient(70% 75% at 95% 0%, color-mix(in oklab, var(--champagne) 12%, transparent), transparent 72%)" : "radial-gradient(65% 75% at 100% 0%, color-mix(in oklab, var(--ice) 9%, transparent), transparent 72%)" }} />
                  <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12 lg:p-12">
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-display text-5xl text-white/20">{p.number}</p>
                        {p.featured && <span className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1.5 text-[10px] uppercase tracking-[.18em] text-[var(--champagne)]">Most selected</span>}
                      </div>
                      <div className="mt-2 flex h-24 items-center">
                        <img src={p.image} alt="" className="h-28 w-28 object-contain" aria-hidden />
                      </div>
                      <h3 className="mt-3 text-3xl font-semibold leading-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-[var(--champagne)]">{p.strap}</p>
                      <p className="mt-6 text-sm leading-6 text-muted-foreground">{p.bestFor}</p>
                      <div className="mt-8 border-t border-white/10 pt-6">
                        <p className="text-[10px] uppercase tracking-[.22em] text-muted-foreground">Package investment</p>
                        <p className="mt-2 font-display text-4xl text-gold-gradient">{p.price}<span className="ml-2 font-sans text-xs tracking-[.18em] text-muted-foreground">CAD</span></p>
                      </div>
                      <Link to={`/contact?package=${encodeURIComponent(p.name)}`} className="mt-7 inline-flex items-center gap-2 self-start rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/10 px-5 py-3 text-sm text-[var(--champagne)] transition hover:bg-[var(--gold)]/20">Discuss this package <ArrowRight size={15} /></Link>
                    </div>
                    <div className="lg:border-l lg:border-white/10 lg:pl-10">
                      <p className="text-xs uppercase tracking-[.2em] text-muted-foreground">What this helps you do</p>
                      <p className="mt-3 max-w-2xl text-lg leading-7 text-foreground/90">{p.outcome}</p>
                      <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                        {p.features.map(([title, detail]) => <div key={title} className="border-t border-white/10 py-5">
                          <div className="flex items-start gap-3"><Check size={16} className="mt-1 shrink-0 text-[var(--gold)]" /><h4 className="text-base font-semibold">{title}</h4></div>
                          <p className="mt-2 pl-7 text-sm leading-6 text-muted-foreground">{detail}</p>
                        </div>)}
                      </div>
                      <p className="mt-3 flex gap-3 rounded-xl bg-white/[0.035] p-4 text-xs leading-5 text-muted-foreground"><CircleHelp size={16} className="mt-0.5 shrink-0 text-[var(--champagne)]" />{p.note}</p>
                    </div>
                  </div>
                </article>
              </Reveal>;
            })}
          </div>
          <p className="mt-7 text-xs leading-5 text-muted-foreground">Prices are in Canadian dollars. The agreed project scope, page list, content responsibilities, functionality and any additional requirements are confirmed with you before full development. Search optimisation supports discoverability; no search ranking is guaranteed.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionLabel>After launch</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[1.02] font-semibold sm:text-5xl">Keep your website <span className="text-gold-gradient">looked after.</span></h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">Optional Care &amp; Optimization plans are available for businesses that want ongoing help after the website is launched.</p>
            <p className="mt-5 max-w-md text-xs leading-5 text-muted-foreground">To keep expectations clear, the exact request allowance, support scope, hosting allowance (if applicable) and renewal terms will be confirmed in writing before you subscribe.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {carePlans.map((c, i) => <Reveal key={c.id} delay={i * 80}>
              <div className="flex h-full flex-col border-t border-white/20 pt-5">
                <p className="text-[10px] uppercase tracking-[.22em] text-muted-foreground">Care {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
                <p className="mt-4 font-display text-3xl text-gold-gradient">CA${c.monthlyPrice}<span className="ml-1 font-sans text-xs text-muted-foreground">/mo</span></p>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{c.forWho}</p>
                <Link to={`/contact?plan=${encodeURIComponent(c.name)}`} className="lux-link mt-6 inline-flex items-center gap-2 self-start text-sm text-[var(--champagne)]">Discuss care options <ArrowRight size={14} /></Link>
              </div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <Reveal>
          <div className="glass-frame glass-edge relative overflow-hidden rounded-[1.6rem] p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-70" aria-hidden style={{ background: "radial-gradient(ellipse at 100% 0%, color-mix(in oklab, var(--ice) 15%, transparent), transparent 68%), radial-gradient(ellipse at 80% 100%, color-mix(in oklab, var(--iris) 12%, transparent), transparent 70%)" }} />
            <div className="relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <div><SectionLabel>Domain &amp; hosting</SectionLabel><h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl">Your domain. <span className="text-gold-gradient">Your choice.</span></h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Choose the level of control and convenience that suits you.</p></div>
              <div className="grid gap-8 sm:grid-cols-2">
                {domainOptions.map((o, i) => <div key={o.id} className="border-t border-white/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[.22em] text-[var(--gold)]">Option {i + 1}</p><h3 className="mt-3 text-xl font-semibold">{o.title}</h3>
                  <ul className="mt-4 space-y-3">{o.points.map(pt => <li key={pt} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check size={15} className="mt-1 shrink-0 text-[var(--gold)]" />{pt}</li>)}</ul>
                </div>)}
              </div>
            </div>
            <div className="relative mt-9 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><h4 className="text-sm font-semibold">Hosting</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{hostingNote}</p></div>
              <div><h4 className="text-sm font-semibold">First year</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{firstYearNote}</p></div>
              <div><h4 className="text-sm font-semibold">Renewal</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{renewalNote}</p></div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div><SectionLabel>The process</SectionLabel><h2 className="mt-5 text-4xl leading-[1.02] font-semibold sm:text-5xl">You see the direction <span className="text-gold-gradient">before the full build.</span></h2><p className="mt-5 text-sm leading-6 text-muted-foreground">{previewNote}</p></div>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {clientJourney.map((s, i) => <li key={s.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"><p className="font-display text-2xl text-gold-gradient">0{i + 1}</p><div><h3 className="text-lg font-semibold">{s.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{s.text}</p></div></li>)}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8">
            <div><p className="text-xs uppercase tracking-[.25em] text-[var(--gold)]">Ready when you are</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Let's shape the right website for you.</h2><p className="mt-2 text-sm text-muted-foreground">Tell us a little about your business and what you want your website to achieve.</p></div>
            <MagneticLink to="/contact" variant="gold">Start a conversation <ArrowDownRight className="ml-2 inline" size={16} /></MagneticLink>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-xs text-muted-foreground">Questions about scope or terms? Visit our <Link to="/terms" className="lux-link text-[var(--champagne)]">Terms of Service</Link> or <Link to="/privacy" className="lux-link text-[var(--champagne)]">Privacy Policy</Link>.</p>
      </section>
    </>
  );
}
