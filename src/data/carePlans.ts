/**
 * Care & Optimization plans.
 *
 * CONFIRMED: the overall range is CA$59–149 per month.
 * CONFIRMED (per the owner): Essential Care CA$59, Care & Optimization CA$99, Priority Care CA$149
 * per month.
 * NOT YET CONFIRMED: each plan's inclusions. Leave `inclusions` empty until decided; nothing is
 * invented. Add inclusion strings to publish them.
 */
export type CarePlan = {
  id: string;
  name: string;
  forWho: string;
  monthlyPrice: number | null;
  inclusions: string[];
};

export const careRange = { min: 59, max: 149 } as const;

export const carePlans: CarePlan[] = [
  {
    id: "essential-care",
    name: "Essential Care",
    forWho: "For sites that need a dependable foundation of upkeep after launch.",
    monthlyPrice: 59,
    inclusions: [],
  },
  {
    id: "care-optimization",
    name: "Care & Optimization",
    forWho: "For businesses that want ongoing optimisation alongside regular care.",
    monthlyPrice: 99,
    inclusions: [],
  },
  {
    id: "priority-care",
    name: "Priority Care",
    forWho: "For businesses that want the highest level of attention for their site.",
    monthlyPrice: 149,
    inclusions: [],
  },
];
