import tileDiscover from "@/assets/v2/tile-magnify.png";
import tileDefine from "@/assets/v2/tile-sphere.png";
import tileDesign from "@/assets/v2/tile-knot.png";
import tileDevelop from "@/assets/v2/tile-cube.png";
import tileDeliver from "@/assets/v2/tile-paperplane.png";
import { clientJourney } from "@/data/clientJourney";

/**
 * The five process stages and their existing glass sculptures, shared by the homepage Process
 * section and the /how-it-works page. `title`/`detail` come from the agreed client journey.
 */
export const processSteps = [
  { n: "01", step: "Discover", note: "Understanding your business, goals and vision.", img: tileDiscover },
  { n: "02", step: "Envision", note: "Turning your needs into a first private concept preview.", img: tileDefine },
  { n: "03", step: "Approve", note: "You review the private preview and decide whether to proceed.", img: tileDesign },
  { n: "04", step: "Refine", note: "With approval and the agreed payment, we build the full website.", img: tileDevelop },
  { n: "05", step: "Deliver", note: "Final checks, then handover of your credentials and access.", img: tileDeliver },
].map((s, i) => ({ ...s, title: clientJourney[i].title, detail: clientJourney[i].text }));

/**
 * The finalized, approved explanation for each stage (same order as `processSteps`). `lead` is the
 * opening line; `body` is the rest. Shown on /how-it-works and, on click or tap, on the homepage.
 */
export const stageExplanations = [
  {
    lead: "First, we understand.",
    body: "We discuss the business, its goals, its audience and what the website needs to achieve. This is where the project takes shape.",
  },
  {
    lead: "The idea becomes tangible.",
    body: "We translate the client's requirements and chosen package into a limited, private first concept preview, so they can see the proposed direction before committing.",
  },
  {
    lead: "The client decides.",
    body: "The client reviews the preview. If they want to move forward, we confirm the agreed project scope and payment arrangements before full development begins.",
  },
  {
    lead: "The complete experience takes shape.",
    body: "Once the agreed payment is received, we refine the direction, develop the complete website and implement the agreed scope.",
  },
  {
    lead: "Ready for its next chapter.",
    body: "We carry out the agreed final checks, finalize the website and hand over the relevant credentials and access.",
  },
] as const;
