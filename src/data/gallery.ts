import heroSwirl from "@/assets/v2/hero-swirl.png";
import processOrbs from "@/assets/process-orbs.png";
import tileSphere from "@/assets/v2/tile-sphere.png";
import ctaGlass from "@/assets/cta-glass.png";
import glassWave from "@/assets/glass-wave.png";
import glassKnot from "@/assets/glass-knot-2.png";
import tileMagnify from "@/assets/v2/tile-magnify.png";
import glassLeaves from "@/assets/glass-leaves.png";
import glassRibbon from "@/assets/glass-ribbon.png";
import heroGlass from "@/assets/hero-glass.png";
import tileKnot from "@/assets/v2/tile-knot.png";
import hourglassSpheres from "@/assets/v2/hourglass-spheres.png";
import softBlob from "@/assets/v2/soft-blob.png";
import blob0 from "@/assets/v3/blob-0.png";
import blob1 from "@/assets/v3/blob-1.png";
import blob2 from "@/assets/v3/blob-2.png";
import blob3 from "@/assets/v3/blob-3.png";
import blob4 from "@/assets/v3/blob-4.png";
import blob5 from "@/assets/v3/blob-5.png";
import blob6 from "@/assets/v3/blob-6.png";
import blob7 from "@/assets/v3/blob-7.png";
import blob8 from "@/assets/v3/blob-8.png";
import blob9 from "@/assets/v3/blob-9.png";
import blob10 from "@/assets/v3/blob-10.png";
import blob11 from "@/assets/v3/blob-11.png";
import blob13 from "@/assets/v3/blob-13.png";
import blob14 from "@/assets/v3/blob-14.png";
import blob15 from "@/assets/v3/blob-15.png";

export type GalleryPiece = {
  id: string;
  title: string;
  style: string;
  year: number;
  image: string;
  /** 0 = dominant / foreground, higher = further into the room. */
  depth: 0 | 1 | 2;
};

export type GalleryCategory = {
  slug: string;
  label: string;
  group: "Art" | "Fashion";
  pieces: GalleryPiece[];
};

// Placeholder artwork — the site's existing glass-sculpture asset library,
// reused as stand-ins. Swap `image` for real photography/art later; the
// structure (title, style, year, depth) is what the layout depends on.
export const galleryCategories: GalleryCategory[] = [
  {
    slug: "digital-art",
    label: "Digital Art",
    group: "Art",
    pieces: [
      { id: "da-1", title: "Afterimage", style: "Digital Art", year: 2025, image: heroSwirl, depth: 0 },
      { id: "da-2", title: "Fracture No. 3", style: "Digital Art", year: 2024, image: blob2, depth: 1 },
      { id: "da-3", title: "Vantage", style: "Digital Art", year: 2025, image: blob5, depth: 2 },
      { id: "da-4", title: "Static Bloom", style: "Digital Art", year: 2023, image: blob9, depth: 2 },
    ],
  },
  {
    slug: "photography",
    label: "Photography",
    group: "Art",
    pieces: [
      { id: "ph-1", title: "Still Life, Suspended", style: "Photography", year: 2025, image: processOrbs, depth: 0 },
      { id: "ph-2", title: "Reliquary", style: "Photography", year: 2024, image: blob1, depth: 1 },
      { id: "ph-3", title: "Object Study I", style: "Photography", year: 2023, image: blob6, depth: 2 },
      { id: "ph-4", title: "Chain of Custody", style: "Photography", year: 2025, image: hourglassSpheres, depth: 2 },
    ],
  },
  {
    slug: "cgi",
    label: "3D / CGI",
    group: "Art",
    pieces: [
      { id: "cgi-1", title: "Vessel", style: "3D / CGI", year: 2026, image: tileSphere, depth: 0 },
      { id: "cgi-2", title: "Interior Weather", style: "3D / CGI", year: 2025, image: blob3, depth: 1 },
      { id: "cgi-3", title: "Terrain 04", style: "3D / CGI", year: 2024, image: blob4, depth: 2 },
      { id: "cgi-4", title: "Orbit", style: "3D / CGI", year: 2025, image: blob14, depth: 2 },
    ],
  },
  {
    slug: "experimental-art",
    label: "Experimental",
    group: "Art",
    pieces: [
      { id: "ex-1", title: "Loop Study", style: "Experimental", year: 2025, image: ctaGlass, depth: 0 },
      { id: "ex-2", title: "Signal Noise", style: "Experimental", year: 2024, image: blob7, depth: 1 },
      { id: "ex-3", title: "Aftertaste", style: "Experimental", year: 2023, image: blob13, depth: 2 },
      { id: "ex-4", title: "Knot Theory", style: "Experimental", year: 2025, image: tileKnot, depth: 2 },
    ],
  },
  {
    slug: "editorial",
    label: "Editorial",
    group: "Fashion",
    pieces: [
      { id: "ed-1", title: "Second Skin", style: "Editorial", year: 2025, image: glassWave, depth: 0 },
      { id: "ed-2", title: "Draped", style: "Editorial", year: 2024, image: blob0, depth: 1 },
      { id: "ed-3", title: "Folded Light", style: "Editorial", year: 2025, image: blob8, depth: 2 },
      { id: "ed-4", title: "Silhouette I", style: "Editorial", year: 2023, image: glassLeaves, depth: 2 },
    ],
  },
  {
    slug: "avant-garde",
    label: "Avant-Garde",
    group: "Fashion",
    pieces: [
      { id: "ag-1", title: "Undone", style: "Avant-Garde", year: 2026, image: glassKnot, depth: 0 },
      { id: "ag-2", title: "Tension Study", style: "Avant-Garde", year: 2025, image: blob10, depth: 1 },
      { id: "ag-3", title: "Excess", style: "Avant-Garde", year: 2024, image: blob11, depth: 2 },
      { id: "ag-4", title: "Cascade", style: "Avant-Garde", year: 2025, image: heroGlass, depth: 2 },
    ],
  },
  {
    slug: "streetwear",
    label: "Streetwear",
    group: "Fashion",
    pieces: [
      { id: "sw-1", title: "Close Read", style: "Streetwear", year: 2025, image: tileMagnify, depth: 0 },
      { id: "sw-2", title: "Corner Store", style: "Streetwear", year: 2024, image: blob15, depth: 1 },
      { id: "sw-3", title: "Off-Hours", style: "Streetwear", year: 2023, image: softBlob, depth: 2 },
      { id: "sw-4", title: "Reissue", style: "Streetwear", year: 2025, image: glassRibbon, depth: 2 },
    ],
  },
];
