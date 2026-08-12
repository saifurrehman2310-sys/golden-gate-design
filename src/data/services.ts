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
    slug: "website-design",
    title: "Website Design",
    short: "Custom, conversion-focused websites designed around how your customers actually decide.",
    what: "A fully custom website designed and built from scratch — structure, copy hierarchy, visual design and development. No templates, no bloated page builders.",
    who: "Restaurants, clinics, law firms, advisors, gyms and local businesses that look better in person than they do online.",
    benefits: [
      "A first impression that earns trust in under three seconds",
      "Clear conversion paths to calls, forms and bookings",
      "Fast, mobile-first performance",
      "Search-friendly structure from day one",
    ],
    process: ["Discovery call", "Structure & wireframe", "Visual design", "Build & QA", "Launch & handover"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    short: "Storefronts merchandised to sell — from collection design to checkout flow.",
    what: "End-to-end Shopify builds: theme customisation, product and collection architecture, app setup, and checkout optimisation.",
    who: "Product brands and retailers who want a store that reflects the quality of what they sell.",
    benefits: [
      "Branded storefront instead of a stock theme",
      "Merchandising built for cross-sell and AOV",
      "Reduced cart abandonment",
      "Easy to manage without a developer",
    ],
    process: ["Catalogue audit", "Store architecture", "Theme build", "Payments & shipping", "Launch & training"],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    short: "Single-purpose pages engineered for one action and measured on one number.",
    what: "High-intent landing pages for ad campaigns, launches and offers — message-matched to the traffic source.",
    who: "Businesses running Google or Meta ads who are sending paid traffic to a homepage.",
    benefits: [
      "Message match between ad and page",
      "One clear action, zero distraction",
      "Faster load times for paid traffic",
      "Built-in tracking for real conversion data",
    ],
    process: ["Offer & audience", "Message map", "Design", "Build & tracking", "Launch & iterate"],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Visual identity that makes a small business look like the obvious choice.",
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
    slug: "website-redesign",
    title: "Website Redesign",
    short: "Keep what works, fix what's costing you enquiries.",
    what: "A full audit and rebuild of an existing website — performance, structure, messaging and design — without losing your search equity.",
    who: "Businesses with a dated or slow site that still ranks, but no longer converts.",
    benefits: [
      "Modern presentation without losing rankings",
      "Faster load and better Core Web Vitals",
      "Clearer messaging and conversion paths",
      "Mobile experience rebuilt properly",
    ],
    process: ["Audit", "Content & SEO mapping", "Redesign", "Rebuild & redirects", "Launch & monitor"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Your site stays fast, secure and current — without you thinking about it.",
    what: "Ongoing updates, content changes, backups, monitoring and performance care on a monthly basis.",
    who: "Any business that can't afford downtime or a stale website.",
    benefits: [
      "Content updates handled for you",
      "Security patches and backups",
      "Uptime and performance monitoring",
      "A direct line when something breaks",
    ],
    process: ["Onboarding audit", "Monitoring setup", "Monthly updates", "Performance reviews", "Ongoing support"],
  },
];
