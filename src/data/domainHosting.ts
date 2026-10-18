/**
 * Single source of truth for domain and hosting wording, shared by the Pricing, Terms and
 * Contact pages so the copy cannot drift apart.
 *
 * CONFIRMED business model:
 *  - Customer-owned domain: bought and owned by the customer in their own name and contact
 *    details; Saif Studio handles the agreed website setup.
 *  - Saif Studio-managed domain: Saif Studio manages the domain and related setup for an
 *    additional cost.
 *  - Hosting platform charges are included in the website package price.
 *  - Domain handling is covered for the first year. After that the customer can renew directly
 *    through the platform or use Care & Optimization, per the finalised service terms.
 *
 * NOT YET DECIDED (deliberately not published): the managed-domain additional cost, renewal
 * prices, what each Care plan covers for domains, and cancellation terms.
 */
export const domainOptions = [
  {
    id: "own",
    title: "You own the domain",
    points: [
      "You buy the domain yourself, in your own name and with your own contact details.",
      "The domain belongs to you.",
      "Saif Studio handles the agreed website setup.",
    ],
  },
  {
    id: "managed",
    title: "Saif Studio manages the domain",
    points: [
      "Saif Studio manages the domain and related setup for you.",
      "This is available for an additional cost. Ask us for the cost before you choose it.",
    ],
  },
] as const;

export const hostingNote =
  "Hosting platform charges are included in your website package price.";

export const firstYearNote = "Domain handling is covered for the first year.";

export const renewalNote =
  "After the first year, you can renew directly through the domain platform, or use Care & Optimization, according to the finalised service terms.";

export const keptSeparate = [
  ["Domain registration", "The domain name itself, under the option you choose above."],
  ["Hosting", "Platform charges are included in your website package price."],
  ["Ongoing management", "Optional, through Care & Optimization."],
] as const;
