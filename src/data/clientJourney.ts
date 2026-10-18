/**
 * The Saif Studio client journey, shared by the Pricing and Terms pages.
 *
 * CONFIRMED: preview-first. A limited, private concept preview comes before any payment
 * arrangement. Full development begins after client approval and receipt of the agreed payment.
 *
 * NOT DECIDED (deliberately not stated): payment amounts or schedule, deposits, refunds,
 * preview revision limits, deadlines.
 */
export const clientJourney = [
  {
    title: "Understand Requirements",
    text: "We discuss your business, goals, needs, preferred visual direction and selected website package.",
  },
  {
    title: "Create a First Preview",
    text: "We prepare a limited, private concept preview based on your requirements and package, so you can see our proposed direction before committing.",
  },
  {
    title: "Client Approval",
    text: "We present the preview and gather your feedback. If you like the direction and want to proceed, we agree on the project scope and payment arrangements.",
  },
  {
    title: "Full Development",
    text: "After your approval and receipt of the agreed payment, we refine the concept and build the complete website.",
  },
  {
    title: "Finalization and Handover",
    text: "We complete the agreed checks, finalise the website and hand over the relevant website credentials and access.",
  },
] as const;

export const previewNote =
  "The first preview is a limited, private concept preview. It is not the finished website and is not published publicly.";
