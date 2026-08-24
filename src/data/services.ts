export type Service = {
  slug: string;
  title: string;
  short: string;
  what: string;
  who: string;
  benefits: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    short: "Visual identity systems that make a business instantly recognizable.",
    what: "Logo direction, colour and type systems, and the brand assets you need across web, print and social.",
    who: "New businesses, rebrands, and established operators whose branding no longer matches their quality.",
    benefits: [
      "Consistent presence across every touchpoint",
      "Premium perception, higher price tolerance",
      "Assets ready for web, print and social",
      "A system your team can apply without guesswork",
    ],
    process: ["Brand discovery", "Direction concepts", "Refinement", "Asset system", "Guidelines delivery"],
  },
  {
    slug: "web-design",
    title: "Web Design",
    short: "Custom, conversion-focused websites designed around how your customers decide.",
    what: "A fully custom website designed and built from scratch — structure, copy hierarchy, visual design and development.",
    who: "Restaurants, clinics, law firms, advisors, gyms and local businesses that look better in person than online.",
    benefits: [
      "A first impression that earns trust in seconds",
      "Clear conversion paths to calls, forms and bookings",
      "Fast, mobile-first performance",
      "Search-friendly structure from day one",
    ],
    process: ["Discovery call", "Structure & wireframe", "Visual design", "Build & QA", "Launch & handover"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces designed around clarity, flow, and the fewest possible clicks.",
    what: "Full interface design for web and product — user flows, wireframes, high-fidelity screens and interaction design.",
    who: "Products, apps and platforms that need to feel effortless to use.",
    benefits: [
      "Fewer drop-offs at every step",
      "Interfaces that don't need explaining",
      "Consistent design system across screens",
      "Faster development handoff",
    ],
    process: ["User research", "Flows & wireframes", "Visual design", "Prototype", "Developer handoff"],
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    short: "Subtle, elegant animation that makes an interface feel alive.",
    what: "Scroll-triggered reveals, micro-interactions, and ambient motion applied with restraint across your site or product.",
    who: "Brands who want their digital presence to feel premium, not static.",
    benefits: [
      "A site that feels alive without feeling busy",
      "Motion that guides attention, not distracts",
      "Smooth, performant animation",
      "A more memorable first impression",
    ],
    process: ["Motion audit", "Direction concepts", "Animation build", "Performance pass", "Delivery"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Hand-built, fast, and engineered to grow with the business.",
    what: "Custom front-end and back-end development — no page builders, no bloat, built for speed and longevity.",
    who: "Businesses that have outgrown template builders or need custom functionality.",
    benefits: [
      "Fast load times and clean Core Web Vitals",
      "Code you actually own",
      "Built to scale as the business grows",
      "No plugin dependency or platform lock-in",
    ],
    process: ["Technical scoping", "Architecture", "Build", "Testing & QA", "Deployment"],
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    short: "A clear plan for how your digital presence should actually work.",
    what: "Audit, positioning and a roadmap covering site, SEO, content and conversion — before a single pixel is designed.",
    who: "Businesses unsure where their digital presence is falling short.",
    benefits: [
      "Clarity on what to fix first",
      "A roadmap, not just recommendations",
      "Positioning that differentiates from competitors",
      "Measurable goals from day one",
    ],
    process: ["Audit", "Positioning", "Roadmap", "Prioritisation", "Ongoing review"],
  },
];
