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
