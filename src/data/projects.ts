import burger from "@/assets/proj-burger.jpg";
import advisor from "@/assets/proj-advisor.jpg";
import realestate from "@/assets/proj-realestate.jpg";
import goxxti from "@/assets/proj-goxxti.jpg";
import gold from "@/assets/hero-gold.jpg";

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  image: string;
  liveUrl?: string;
  video?: boolean;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "burger-bliss",
    name: "Burger Bliss",
    category: "Restaurant",
    year: "2025",
    tagline: "A hunger-inducing digital storefront built to fill tables.",
    image: burger,
    liveUrl: "https://preview--burger-bliss-booster.lovable.app/",
    services: ["Website Design", "Landing Page", "Brand Direction"],
    overview:
      "A website built to make people hungry and order within seconds.",
    challenge:
      "Local restaurant sites hide the menu and phone number. Orders were leaking to delivery apps.",
    solution:
      "Full-bleed food photography, a menu that reads like a magazine, and one job on every screen — place the order.",
    features: [
      "Full-screen hero with appetite-driven food imagery",
      "Structured, scannable menu with pricing and categories",
      "Sticky order + reservation calls to action",
      "Location, hours and directions above the fold on mobile",
      "Testimonials and social proof positioned before checkout intent",
      "Mobile-first performance tuning for sub-second interaction",
    ],
    results: [
      "Direct-order path shortened from 4 taps to 1",
      "Menu discoverability on mobile dramatically improved",
      "A brand presence that finally matches the food",
    ],
  },
  {
    slug: "financial-advisor",
    name: "Shekhar Pathare",
    category: "Financial Advisor",
    year: "2025",
    tagline: "Trust, credibility and consultations — designed for a high-stakes decision.",
    image: advisor,
    liveUrl: "https://preview--shekhar-pathare-advisor.lovable.app/",
    services: ["Website Design", "Copy Structure", "Lead Generation"],
    overview:
      "Financial advisory is sold on trust. This build was designed to make a first-time visitor feel safe enough to book a consultation.",
    challenge:
      "Clients hand over their life savings based on a first impression. The previous presence gave no clarity on services, credentials or process — visitors left without ever making contact.",
    solution:
      "A calm, authoritative layout that leads with credibility: clear service pillars, a transparent advisory process, and a consultation CTA repeated at every natural decision point.",
    features: [
      "Credibility-first hero with clear positioning statement",
      "Service breakdown: planning, investments, insurance, retirement",
      "Step-by-step advisory process to remove uncertainty",
      "Consultation booking CTAs throughout the journey",
      "Client testimonial and trust-signal sections",
      "Fully responsive, fast-loading and accessible",
    ],
    results: [
      "A single clear conversion path: book a consultation",
      "Services and process explained without jargon",
      "Positioning elevated from local advisor to trusted professional",
    ],
  },
  {
    slug: "dental-clinic",
    name: "Bright Smile Dental Studio",
    category: "Dental Clinic · Demo",
    year: "2025",
    tagline: "A clinic website that converts nervous visitors into booked appointments.",
    image: gold,
    liveUrl: "https://id-preview--60f4d0df-3134-449c-8768-f32fe5be80c7.lovable.app",
    services: ["Website Design", "Appointment Funnel", "Local SEO Structure"],
    overview:
      "A concept build demonstrating how a modern dental practice should present itself online — warm, clinical-clean and booking-focused.",
    challenge:
      "Dental patients choose on comfort and proximity. Most clinic sites read like brochures and force patients to call during business hours.",
    solution:
      "A reassuring, treatment-led layout: services explained in plain language, transparent pricing cues, and an always-available appointment request flow.",
    features: [
      "Treatment-focused service sections in patient language",
      "Appointment request form with clear response promise",
      "Team and clinic credibility section",
      "Before/after and results-oriented presentation",
      "Location, hours and emergency contact prominence",
      "Local SEO friendly structure and metadata",
    ],
    results: [
      "Booking friction removed for after-hours visitors",
      "Treatments explained without clinical intimidation",
      "A template proven for multi-location clinics",
    ],
  },
  {
    slug: "law-firm",
    name: "Sterling & Cole Law Group",
    category: "Law Firm · Demo",
    year: "2025",
    tagline: "Authority, discretion and case enquiries — a firm presence built to command respect.",
    image: gold,
    liveUrl: "https://id-preview--21937cae-d99c-4f90-91d3-62e9fe219510.lovable.app",
    services: ["Website Design", "Practice Area Architecture", "Enquiry Funnel"],
    overview:
      "A concept build for a modern law firm that needs to look established, discreet and worth its retainer.",
    challenge:
      "Legal clients are researching in a moment of stress. Cluttered firm sites with dense text and no clear next step lose qualified enquiries to better-presented competitors.",
    solution:
      "A restrained, editorial layout with clear practice areas, attorney credibility and a confidential case-enquiry path that respects the seriousness of the moment.",
    features: [
      "Practice area architecture with dedicated sections",
      "Attorney profiles and firm credentials",
      "Confidential case evaluation enquiry form",
      "Results and representative matters presentation",
      "Typography-led, authoritative visual language",
      "Accessible, fast and fully responsive",
    ],
    results: [
      "Practice areas findable in a single scroll",
      "Enquiry path designed for sensitive first contact",
      "Presentation aligned with premium retainer positioning",
    ],
  },
  {
    slug: "ease-living-decor",
    name: "Ease Living Decor",
    category: "Shopify · Home Decor",
    year: "2025",
    tagline: "A full Shopify storefront built to sell home decor, not just display it.",
    image: gold,
    liveUrl: "https://www.easelivingdecor.com/",
    services: ["Shopify Development", "Store Design", "Conversion Optimisation"],
    overview:
      "A complete Shopify build for a home decor brand — from storefront design to product merchandising and checkout experience.",
    challenge:
      "Decor is an emotional, visual purchase. A generic theme flattens the product and kills average order value.",
    solution:
      "A tailored Shopify storefront with editorial product presentation, collection storytelling, and a checkout journey tuned to reduce drop-off.",
    features: [
      "Custom Shopify theme design and setup",
      "Collection and product page merchandising",
      "Trust badges, shipping and returns clarity",
      "Cart and checkout optimisation",
      "Mobile-first browsing experience",
      "Product photography presentation system",
    ],
    results: [
      "A branded storefront instead of a stock theme",
      "Collections structured for cross-sell",
      "Checkout friction reduced across mobile",
    ],
  },
  {
    slug: "pruthak-infra",
    name: "Pruthak Infra",
    category: "Construction · Real Estate",
    year: "2025",
    tagline: "Seven developments, one credible digital presence for a Pune construction firm.",
    image: realestate,
    liveUrl: "https://incredible-maamoul-19f747.netlify.app/",
    services: ["Website Design", "Project Portfolio System", "Enquiry Generation"],
    overview:
      "A construction firm with seven completed and ongoing developments in Pune needed a website that demonstrates scale and track record to serious buyers.",
    challenge:
      "Property buyers evaluate a builder's credibility before they visit a site. Without a structured project portfolio, Pruthak Infra had no way to prove delivery history online.",
    solution:
      "A project-led website architecture: every development presented with imagery, specifications and status, backed by a company credibility narrative and direct enquiry routes.",
    features: [
      "Project portfolio covering all seven developments",
      "Individual project detail presentation with status",
      "Company history and delivery credibility section",
      "Site-visit and enquiry contact routes",
      "Location and amenity highlights per project",
      "Responsive layouts for on-the-move buyers",
    ],
    results: [
      "Full delivery track record visible in one place",
      "Buyers able to evaluate projects before a site visit",
      "Professional presence matching offline reputation",
    ],
  },
  {
    slug: "sai-real-estate",
    name: "Sai Real Estate",
    category: "Real Estate · Full Digital Presence",
    year: "2025",
    tagline: "A Kothrud property broker taken from invisible to findable, credible and contactable.",
    image: realestate,
    video: true,
    services: ["Website", "Local SEO", "Google Business", "WhatsApp Business", "Analytics", "Social Branding"],
    overview:
      "Rohan Ranka's Sai Real Estate operates in Kothrud, Pune. This was not a website project — it was a complete digital presence build covering everything a local broker needs to be found and trusted.",
    challenge:
      "Property enquiries in Kothrud start on Google Maps and end in WhatsApp. Sai Real Estate had no website, no verified map listing, no analytics and no consistent brand — so every lead went to competitors who were simply easier to find.",
    solution:
      "We built the entire stack: a conversion-focused website, a verified Google Business Profile with Maps optimisation, WhatsApp Business set up as the primary enquiry channel, local SEO groundwork, social brand assets and analytics to measure what actually drives calls.",
    features: [
      "Conversion-focused broker website with listings structure",
      "Google Business Profile setup and Maps optimisation",
      "WhatsApp Business configured as the primary lead channel",
      "Local SEO foundations for Kothrud property searches",
      "Consistent social branding and profile assets",
      "Analytics and tracking to measure enquiry sources",
    ],
    results: [
      "Discoverable on Google Maps for local property searches",
      "Enquiries routed instantly into WhatsApp",
      "Measurable lead tracking from day one",
    ],
  },
  {
    slug: "goxxti",
    name: "GOXXTI",
    category: "Music / Artist Brand",
    year: "2025",
    tagline: "A raw, industrial artist site for a rising hard techno producer — built to help him book more shows.",
    image: goxxti,
    liveUrl: "https://id-preview--5082e761-e8d7-4443-a88a-d51e30f32589.lovable.app",
    services: ["Website Design", "Artist Branding", "Booking Funnel", "EPK / Press Section"],
    overview:
      "GOXXTI is a rising hard techno producer who needed more than a Linktree — he needed a branded destination where promoters, press and fans could immediately understand his sound, see his stats and start a booking conversation.",
    challenge:
      "With only a Linktree and scattered social profiles, GOXXTI had no controlled first impression. Promoters could not quickly find his latest tracks, upcoming dates or press assets, and there was no professional path from discovery to booking enquiry.",
    solution:
      "We built a full dark/industrial one-page artist site with a glitch-grain visual identity in black and acid-green. The page functions as both portfolio and electronic press kit: embedded music player, tour dates, discography, bio/stats and a direct booking form.",
    features: [
      "Dark industrial one-page artist site with acid-green accent system",
      "Embedded latest-track player section for immediate sound sampling",
      "Upcoming shows and tour dates module",
      "Press / EPK section with bio, stats and downloadable assets",
      "Discography grid with release artwork and links",
      "Direct booking contact form routed to management",
    ],
    results: [
      "Single professional destination replaces scattered links",
      "Promoters can evaluate sound, stats and availability in one scroll",
      "Direct booking funnel turns interest into enquiries",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
