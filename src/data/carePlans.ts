/**
 * Care & Optimization plans.
 *
 * CONFIRMED: the overall range is CA$59–149 per month.
 * NOT YET CONFIRMED: each plan's individual price and its inclusions.
 *
 * Leave `monthlyPrice` as null and `inclusions` empty until decided. The cards then show an
 * honest placeholder instead of an invented figure. Set a number (CAD per month) and add
 * inclusion strings to publish them; the UI updates automatically.
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
    monthlyPrice: null,
    inclusions: [],
  },
  {
    id: "care-optimization",
    name: "Care & Optimization",
    forWho: "For businesses that want ongoing optimisation alongside regular care.",
    monthlyPrice: null,
    inclusions: [],
  },
  {
    id: "priority-care",
    name: "Priority Care",
    forWho: "For businesses that want the highest level of attention for their site.",
    monthlyPrice: null,
    inclusions: [],
  },
];
