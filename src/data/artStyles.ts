import minimalism01 from "@/assets/art/minimalism-01.jpg";
import minimalism02 from "@/assets/art/minimalism-02.jpg";
import minimalism03 from "@/assets/art/minimalism-03.jpg";
import minimalism04 from "@/assets/art/minimalism-04.jpg";
import minimalism05 from "@/assets/art/minimalism-05.jpg";
import minimalism06 from "@/assets/art/minimalism-06.jpg";
import minimalism07 from "@/assets/art/minimalism-07.jpg";
import minimalism08 from "@/assets/art/minimalism-08.jpg";
import maximalism01 from "@/assets/art/maximalism-01.jpg";
import maximalism02 from "@/assets/art/maximalism-02.jpg";
import maximalism03 from "@/assets/art/maximalism-03.jpg";
import maximalism04 from "@/assets/art/maximalism-04.jpg";
import maximalism05 from "@/assets/art/maximalism-05.jpg";
import maximalism06 from "@/assets/art/maximalism-06.jpg";
import maximalism07 from "@/assets/art/maximalism-07.jpg";
import maximalism08 from "@/assets/art/maximalism-08.jpg";
import futuristic01 from "@/assets/art/futuristic-01.jpg";
import futuristic02 from "@/assets/art/futuristic-02.jpg";
import futuristic03 from "@/assets/art/futuristic-03.jpg";
import futuristic04 from "@/assets/art/futuristic-04.jpg";
import futuristic05 from "@/assets/art/futuristic-05.jpg";
import futuristic06 from "@/assets/art/futuristic-06.jpg";
import futuristic07 from "@/assets/art/futuristic-07.jpg";
import futuristic08 from "@/assets/art/futuristic-08.jpg";
import brutalism01 from "@/assets/art/brutalism-01.jpg";
import brutalism02 from "@/assets/art/brutalism-02.jpg";
import brutalism03 from "@/assets/art/brutalism-03.jpg";
import brutalism04 from "@/assets/art/brutalism-04.jpg";
import brutalism05 from "@/assets/art/brutalism-05.jpg";
import brutalism06 from "@/assets/art/brutalism-06.jpg";
import brutalism07 from "@/assets/art/brutalism-07.jpg";
import brutalism08 from "@/assets/art/brutalism-08.jpg";
import vectorArt01 from "@/assets/art/vector-art-01.jpg";
import vectorArt02 from "@/assets/art/vector-art-02.jpg";
import vectorArt03 from "@/assets/art/vector-art-03.jpg";
import vectorArt04 from "@/assets/art/vector-art-04.jpg";
import vectorArt05 from "@/assets/art/vector-art-05.jpg";
import vectorArt06 from "@/assets/art/vector-art-06.jpg";
import vectorArt07 from "@/assets/art/vector-art-07.jpg";
import vectorArt08 from "@/assets/art/vector-art-08.jpg";
import collageArt01 from "@/assets/art/collage-art-01.jpg";
import collageArt02 from "@/assets/art/collage-art-02.jpg";
import collageArt03 from "@/assets/art/collage-art-03.jpg";
import collageArt04 from "@/assets/art/collage-art-04.jpg";
import collageArt05 from "@/assets/art/collage-art-05.jpg";
import collageArt06 from "@/assets/art/collage-art-06.jpg";
import collageArt07 from "@/assets/art/collage-art-07.jpg";
import collageArt08 from "@/assets/art/collage-art-08.jpg";
import cyberpunk01 from "@/assets/art/cyberpunk-01.jpg";
import cyberpunk02 from "@/assets/art/cyberpunk-02.jpg";
import cyberpunk03 from "@/assets/art/cyberpunk-03.jpg";
import cyberpunk04 from "@/assets/art/cyberpunk-04.jpg";
import cyberpunk05 from "@/assets/art/cyberpunk-05.jpg";
import popArt01 from "@/assets/art/pop-art-01.jpg";
import popArt02 from "@/assets/art/pop-art-02.jpg";
import popArt03 from "@/assets/art/pop-art-03.jpg";
import popArt04 from "@/assets/art/pop-art-04.jpg";
import popArt05 from "@/assets/art/pop-art-05.jpg";
import glassmorphism01 from "@/assets/art/glassmorphism-01.jpg";
import glassmorphism02 from "@/assets/art/glassmorphism-02.jpg";
import glassmorphism03 from "@/assets/art/glassmorphism-03.jpg";
import glassmorphism04 from "@/assets/art/glassmorphism-04.jpg";
import glassmorphism05 from "@/assets/art/glassmorphism-05.jpg";
import claySoft3d01 from "@/assets/art/clay-soft-3d-01.jpg";
import claySoft3d02 from "@/assets/art/clay-soft-3d-02.jpg";
import claySoft3d03 from "@/assets/art/clay-soft-3d-03.jpg";
import claySoft3d04 from "@/assets/art/clay-soft-3d-04.jpg";
import claySoft3d05 from "@/assets/art/clay-soft-3d-05.jpg";
import pixelArt01 from "@/assets/art/pixel-art-01.jpg";
import pixelArt02 from "@/assets/art/pixel-art-02.jpg";
import pixelArt03 from "@/assets/art/pixel-art-03.jpg";
import pixelArt04 from "@/assets/art/pixel-art-04.jpg";
import pixelArt05 from "@/assets/art/pixel-art-05.jpg";
import editorial01 from "@/assets/art/editorial-01.jpg";
import editorial02 from "@/assets/art/editorial-02.jpg";
import editorial03 from "@/assets/art/editorial-03.jpg";
import editorial04 from "@/assets/art/editorial-04.jpg";
import editorial05 from "@/assets/art/editorial-05.jpg";

export type ArtStyleImage = {
  id: string;
  src: string;
  caption: string;
};

/**
 * "mood" is the only thing that drives how a style's environment behaves
 * (ambient density, motion pace, spacing) -- everything else about the
 * experience comes from the images/copy below. New styles can reuse one
 * of these moods, or (per the brief) the page can special-case a slug
 * later if a style genuinely needs its own composition.
 */
export type StyleMood = "quiet" | "rich" | "atmospheric" | "stark";

export type ArtStyleContent = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  characteristics: string[];
  visualLanguage: { label: string; value: string }[];
  applications: string[];
  colors?: string[];
  tags?: string[];
  fashionNote?: string;
  images: ArtStyleImage[];
  mood: StyleMood;
  /** Populated styles have real images and copy; others are reserved slots. */
  available: boolean;
};

export const artStyles: ArtStyleContent[] = [
  {
    slug: "minimalism",
    name: "Minimalism",
    shortDescription: "Less, arranged with intention.",
    longDescription:
      "Minimalism strips a composition down to what's necessary — restrained forms, deliberate negative space, and a quiet confidence in what's left unsaid.",
    characteristics: ["Restrained composition", "Generous negative space", "Simple geometric forms", "Muted, tonal palettes"],
    visualLanguage: [
      { label: "Typography", value: "Precise, understated serif and grotesk pairings" },
      { label: "Color", value: "Neutral, tonal, low-contrast" },
      { label: "Geometry", value: "Clean lines, simple shapes" },
    ],
    applications: ["Branding", "Architecture", "Editorial design", "Product design"],
    colors: ["#E8E2D8", "#B9AFA0", "#2B2B29", "#C1502E"],
    fashionNote: "Tailoring reduced to its essentials — clean lines, quiet fabrics.",
    tags: ["restraint", "negative space", "tonal"],
    mood: "quiet",
    available: true,
    images: [
      { id: "min-01", src: minimalism01, caption: "Composition in Balance" },
      { id: "min-02", src: minimalism02, caption: "Threshold" },
      { id: "min-03", src: minimalism03, caption: "Still Life No. 1" },
      { id: "min-04", src: minimalism04, caption: "Monogram Study" },
      { id: "min-05", src: minimalism05, caption: "Tailored Silence" },
      { id: "min-06", src: minimalism06, caption: "Edge of the Horizon" },
      { id: "min-07", src: minimalism07, caption: "Draped, Undone" },
      { id: "min-08", src: minimalism08, caption: "Loop, in Stone" },
    ],
  },
  {
    slug: "maximalism",
    name: "Maximalism",
    shortDescription: "More is the point.",
    longDescription:
      "Maximalism layers pattern, color and texture without apology — density and contrast become the language, and restraint is beside the point.",
    characteristics: ["Dense layering", "Bold pattern mixing", "High color contrast", "Ornamentation"],
    visualLanguage: [
      { label: "Typography", value: "Expressive, decorative, mixed weights" },
      { label: "Color", value: "Saturated, clashing, jewel tones" },
      { label: "Geometry", value: "Overlapping forms, collage logic" },
    ],
    applications: ["Fashion editorial", "Interior design", "Packaging", "Art direction"],
    colors: ["#B23A2E", "#1F5C4C", "#D9A62E", "#12233B"],
    fashionNote: "Pattern-on-pattern, maximal silhouettes, fearless color.",
    tags: ["density", "pattern", "saturation"],
    mood: "rich",
    available: true,
    images: [
      { id: "max-01", src: maximalism01, caption: "Maximal Portrait" },
      { id: "max-02", src: maximalism02, caption: "The Eclectic Room" },
      { id: "max-03", src: maximalism03, caption: "Still Life, Overgrown" },
      { id: "max-04", src: maximalism04, caption: "Collage Study" },
      { id: "max-05", src: maximalism05, caption: "Object Arrangement" },
      { id: "max-06", src: maximalism06, caption: "Palace of Excess" },
      { id: "max-07", src: maximalism07, caption: "Cabinet of Curiosities" },
      { id: "max-08", src: maximalism08, caption: "Procession" },
    ],
  },
  {
    slug: "futuristic",
    name: "Futuristic",
    shortDescription: "Tomorrow, rendered today.",
    longDescription:
      "The futuristic language deals in atmosphere and material — glass, metal and light interacting inside spaces that feel engineered rather than built.",
    characteristics: ["Atmospheric depth", "Reflective, engineered materials", "Controlled artificial light", "Sculptural minimalism"],
    visualLanguage: [
      { label: "Typography", value: "Technical, geometric sans" },
      { label: "Color", value: "Cool neutrals, chrome, glass tones" },
      { label: "Geometry", value: "Curved architecture, refractive forms" },
    ],
    applications: ["Product design", "Fashion", "Architecture", "Spatial / UI design"],
    colors: ["#8B98A8", "#C7CDD4", "#0E1116", "#B8860B"],
    fashionNote: "Sculptural silhouettes in technical, reflective materials.",
    tags: ["atmosphere", "material", "light"],
    mood: "atmospheric",
    available: true,
    images: [
      { id: "fut-01", src: futuristic01, caption: "Above the Clouds" },
      { id: "fut-02", src: futuristic02, caption: "Synthetic Form" },
      { id: "fut-03", src: futuristic03, caption: "Reflective Object I" },
      { id: "fut-04", src: futuristic04, caption: "Aperture" },
      { id: "fut-05", src: futuristic05, caption: "Reflective Object II" },
      { id: "fut-06", src: futuristic06, caption: "Bioluminescent Garden" },
      { id: "fut-07", src: futuristic07, caption: "Seat, Poured" },
      { id: "fut-08", src: futuristic08, caption: "Rite of Light" },
    ],
  },

  {
    slug: "brutalism",
    name: "Brutalism",
    shortDescription: "Weight, exposed.",
    longDescription:
      "Brutalism refuses to soften itself — raw material, hard shadow and blunt geometry stand as they are, with nothing dressed up for comfort.",
    characteristics: ["Raw, exposed material", "Heavy geometric mass", "High contrast", "Monochrome restraint"],
    visualLanguage: [
      { label: "Typography", value: "Bold, condensed, structural" },
      { label: "Color", value: "Concrete grays, near-black, off-white" },
      { label: "Geometry", value: "Blunt forms, hard edges, cantilevers" },
    ],
    applications: ["Architecture", "Editorial layout", "Typography systems", "Brand identity"],
    colors: ["#8A8A85", "#3A3A38", "#141414", "#D8D5CC"],
    fashionNote: "Sculptural outerwear in raw, weighted fabric — form over decoration.",
    tags: ["raw", "concrete", "mass"],
    mood: "stark",
    available: true,
    images: [
      { id: "brut-01", src: brutalism01, caption: "Monolith" },
      { id: "brut-02", src: brutalism02, caption: "Fold, Study II" },
      { id: "brut-03", src: brutalism03, caption: "Type as Mass" },
      { id: "brut-04", src: brutalism04, caption: "Weight" },
      { id: "brut-05", src: brutalism05, caption: "Fracture Grid" },
      { id: "brut-06", src: brutalism06, caption: "Monument, Weathered" },
      { id: "brut-07", src: brutalism07, caption: "Pulling Weight" },
      { id: "brut-08", src: brutalism08, caption: "Instrument, Carved" },
    ],
  },
  {
    slug: "vector-art",
    name: "Vector Art",
    shortDescription: "Confidence, flattened.",
    longDescription:
      "Vector art trades texture for precision — clean shapes, flat color, and a confidence that comes from knowing exactly where every edge sits.",
    characteristics: ["Flat, confident color", "Precise clean edges", "Simplified, iconic forms", "Balanced negative space"],
    visualLanguage: [
      { label: "Typography", value: "Geometric sans, minimal weight variation" },
      { label: "Color", value: "Warm neutrals with a single bold accent" },
      { label: "Geometry", value: "Reduced, iconic silhouettes" },
    ],
    applications: ["Branding", "Illustration", "Editorial covers", "App/product icons"],
    colors: ["#E4392E", "#1E2A38", "#EDE3D3", "#7C8A94"],
    fashionNote: "Silhouette over detail — a figure reduced to its most iconic shapes.",
    tags: ["flat color", "precision", "iconic"],
    mood: "rich",
    available: true,
    images: [
      { id: "vec-01", src: vectorArt01, caption: "Profile in Orange" },
      { id: "vec-02", src: vectorArt02, caption: "Structure at Noon" },
      { id: "vec-03", src: vectorArt03, caption: "Portrait, Reduced" },
      { id: "vec-04", src: vectorArt04, caption: "Geometry Study" },
      { id: "vec-05", src: vectorArt05, caption: "In Motion" },
      { id: "vec-06", src: vectorArt06, caption: "Coastal Structure" },
      { id: "vec-07", src: vectorArt07, caption: "Bloom, Flattened" },
      { id: "vec-08", src: vectorArt08, caption: "Spiral Study" },
    ],
  },
  {
    slug: "collage-art",
    name: "Collage Art",
    shortDescription: "Assembled, not painted.",
    longDescription:
      "Collage builds meaning by juxtaposition — torn paper, found photography and mismatched scale sitting together until they start to say something new.",
    characteristics: ["Torn, layered paper", "Found imagery", "Mismatched scale", "Juxtaposition over illustration"],
    visualLanguage: [
      { label: "Typography", value: "Mixed, hand-cut, imperfect" },
      { label: "Color", value: "Muted paper tones with sudden bright accents" },
      { label: "Geometry", value: "Torn edges, overlapping fragments" },
    ],
    applications: ["Editorial art direction", "Album/book covers", "Zine and print culture", "Campaign concepts"],
    colors: ["#C94A32", "#D9A441", "#2B2B29", "#DCD3C0"],
    fashionNote: "Mixed-era references stitched together — nothing from one single decade.",
    tags: ["found imagery", "juxtaposition", "torn paper"],
    mood: "rich",
    available: true,
    images: [
      { id: "col-01", src: collageArt01, caption: "Assembled Portrait" },
      { id: "col-02", src: collageArt02, caption: "Bloom, Interrupted" },
      { id: "col-03", src: collageArt03, caption: "Fallen Grace" },
      { id: "col-04", src: collageArt04, caption: "Fragment & Field" },
      { id: "col-05", src: collageArt05, caption: "Distance" },
      { id: "col-06", src: collageArt06, caption: "Paper, Layered" },
      { id: "col-07", src: collageArt07, caption: "Figure, Composed" },
      { id: "col-08", src: collageArt08, caption: "Fragments, Gathered" },
    ],
  },

  {
    slug: "cyberpunk",
    name: "Cyberpunk",
    shortDescription: "High tech, low light.",
    longDescription:
      "Cyberpunk imagines a city that never sleeps — neon bleeding into wet asphalt, synthetic materials, and a body already half-merged with its technology.",
    characteristics: ["Neon against deep shadow", "Synthetic, reflective materials", "Dense urban scale", "Human + machine"],
    visualLanguage: [
      { label: "Typography", value: "Technical, glowing, high-contrast" },
      { label: "Color", value: "Magenta, cyan, near-black" },
      { label: "Geometry", value: "Dense verticals, glitch fragments" },
    ],
    applications: ["Game/UI design", "Music and album art", "Fashion editorial", "Brand worlds"],
    colors: ["#D6188C", "#1FD3E0", "#120B1F", "#7A2BD9"],
    fashionNote: "Technical outerwear, iridescent fabric, glasses as armor.",
    tags: ["neon", "synthetic", "urban night"],
    mood: "atmospheric",
    available: true,
    images: [
      { id: "cyb-01", src: cyberpunk01, caption: "Rain, Neon, Silence" },
      { id: "cyb-02", src: cyberpunk02, caption: "Synthetic Portrait" },
      { id: "cyb-03", src: cyberpunk03, caption: "Advertisement, Unmanned" },
      { id: "cyb-04", src: cyberpunk04, caption: "Object on Wet Chrome" },
      { id: "cyb-05", src: cyberpunk05, caption: "Skyline, After Hours" },
    ],
  },
  {
    slug: "pop-art",
    name: "Pop Art",
    shortDescription: "Loud, on purpose.",
    longDescription:
      "Pop Art borrows from advertising and mass production — flat saturated color, halftone texture, and everyday objects treated like icons.",
    characteristics: ["Flat saturated color", "Halftone texture", "Everyday objects as icons", "Bold, graphic outline"],
    visualLanguage: [
      { label: "Typography", value: "Bold, comic-adjacent, high impact" },
      { label: "Color", value: "Primary and secondary brights, hard contrast" },
      { label: "Geometry", value: "Flat planes, halftone dot patterns" },
    ],
    applications: ["Advertising", "Packaging", "Album art", "Campaign concepts"],
    colors: ["#E8125C", "#F4C81C", "#1D6FD9", "#12100E"],
    fashionNote: "Statement color, glossy finishes, oversized accessories.",
    tags: ["saturated", "halftone", "iconic"],
    mood: "rich",
    available: true,
    images: [
      { id: "pop-01", src: popArt01, caption: "Sunburst Portrait" },
      { id: "pop-02", src: popArt02, caption: "Hotline Pink" },
      { id: "pop-03", src: popArt03, caption: "City, Flattened" },
      { id: "pop-04", src: popArt04, caption: "Two-Tone Close-Up" },
      { id: "pop-05", src: popArt05, caption: "Still Life, Repeated" },
    ],
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    shortDescription: "Seen through, not just seen.",
    longDescription:
      "Glassmorphism is about what light does on its way through something — transparency, refraction and soft blur standing in for material honesty.",
    characteristics: ["True transparency", "Light refraction", "Soft frosted blur", "Iridescent surface color"],
    visualLanguage: [
      { label: "Typography", value: "Thin weight, quiet, secondary to material" },
      { label: "Color", value: "Iridescent pastels over neutral ground" },
      { label: "Geometry", value: "Curved, fluid, continuous surfaces" },
    ],
    applications: ["Product design", "UI/interface design", "Architecture", "Spatial design"],
    colors: ["#B9C7E0", "#E6C9DE", "#F2E7C9", "#5C6470"],
    fashionNote: "Sheer layering, iridescent fabric, light as an accessory.",
    tags: ["transparency", "refraction", "iridescence"],
    mood: "atmospheric",
    available: true,
    images: [
      { id: "gls-01", src: glassmorphism01, caption: "Stairwell, Dawn" },
      { id: "gls-02", src: glassmorphism02, caption: "Bottled Light" },
      { id: "gls-03", src: glassmorphism03, caption: "Form, Twisted" },
      { id: "gls-04", src: glassmorphism04, caption: "Object Study, Chrome" },
      { id: "gls-05", src: glassmorphism05, caption: "Seat, Suspended" },
    ],
  },

  {
    slug: "clay-soft-3d",
    name: "Clay / Soft 3D",
    shortDescription: "Weightless, and warm.",
    longDescription:
      "Soft 3D treats form like clay — rounded, matte, gently shadowed, and balanced with a playfulness that hard-surface rendering doesn't allow.",
    characteristics: ["Rounded, matte forms", "Balanced, gravity-defying stacks", "Soft directional shadow", "Pastel material color"],
    visualLanguage: [
      { label: "Typography", value: "Rounded sans, friendly weight" },
      { label: "Color", value: "Muted pastels, warm neutrals" },
      { label: "Geometry", value: "Spheres, pebbles, stacked forms" },
    ],
    applications: ["Product rendering", "App/brand illustration", "Furniture and object design", "Packaging"],
    colors: ["#C97B54", "#8FA1B8", "#C9A6C4", "#8B9B6E"],
    tags: ["matte", "pastel", "balance"],
    mood: "quiet",
    available: true,
    images: [
      { id: "clay-01", src: claySoft3d01, caption: "Cairn" },
      { id: "clay-02", src: claySoft3d02, caption: "Seat, Softened" },
      { id: "clay-03", src: claySoft3d03, caption: "Lean" },
      { id: "clay-04", src: claySoft3d04, caption: "Knot, Untied" },
      { id: "clay-05", src: claySoft3d05, caption: "Balance Study" },
    ],
  },
  {
    slug: "pixel-art",
    name: "Pixel Art",
    shortDescription: "Small grid, big feeling.",
    longDescription:
      "Pixel art works within a strict grid and a limited palette, and somehow that constraint is exactly what makes the light and the nostalgia land.",
    characteristics: ["Visible pixel grid", "Limited, deliberate palette", "Warm artificial light", "Nostalgic, narrative scenes"],
    visualLanguage: [
      { label: "Typography", value: "Bitmap, monospace" },
      { label: "Color", value: "Sunset gradients, warm interior light" },
      { label: "Geometry", value: "Grid-locked, blocky detail" },
    ],
    applications: ["Games", "Album/cover art", "Merchandise", "Social content"],
    colors: ["#E8A33D", "#7A4FB5", "#2A2354", "#1C4E80"],
    tags: ["grid", "nostalgia", "limited palette"],
    mood: "rich",
    available: true,
    images: [
      { id: "pix-01", src: pixelArt01, caption: "Dusk, Shared With a Cat" },
      { id: "pix-02", src: pixelArt02, caption: "Corner Shop, After Dark" },
      { id: "pix-03", src: pixelArt03, caption: "Floating Kingdom" },
      { id: "pix-04", src: pixelArt04, caption: "Reading Light" },
      { id: "pix-05", src: pixelArt05, caption: "Pier at Sundown" },
    ],
  },
  {
    slug: "editorial",
    name: "Editorial",
    shortDescription: "Composed, not candid.",
    longDescription:
      "Editorial photography is deliberate in every frame — light, wardrobe and architecture all working toward one considered image rather than a documentary moment.",
    characteristics: ["Deliberate, directional light", "Considered composition", "Restrained color palette", "Wardrobe as sculpture"],
    visualLanguage: [
      { label: "Typography", value: "Refined serif, generous tracking" },
      { label: "Color", value: "Warm neutrals, one saturated accent" },
      { label: "Geometry", value: "Architectural framing, negative space" },
    ],
    applications: ["Fashion campaigns", "Brand photography", "Print editorial", "Luxury advertising"],
    colors: ["#7A2E1E", "#C9AA6E", "#1B2430", "#E7DFD2"],
    fashionNote: "The subject as much as the garment — stillness, tailoring, gold.",
    tags: ["composed light", "wardrobe", "negative space"],
    mood: "quiet",
    available: true,
    images: [
      { id: "edi-01", src: editorial01, caption: "Profile, Late Light" },
      { id: "edi-02", src: editorial02, caption: "Threshold" },
      { id: "edi-03", src: editorial03, caption: "Bloom, Held" },
      { id: "edi-04", src: editorial04, caption: "Red, Airborne" },
      { id: "edi-05", src: editorial05, caption: "Curve of Concrete" },
    ],
  },

  // -- Reserved slots: structure ready, waiting on real assets. Fill in
  // `images`, flip `available` to true, and the archive + style page work
  // automatically. Moods below are a starting guess for when that happens.
  reserved("solarpunk", "Solarpunk", "rich"),
  reserved("surrealism", "Surrealism", "atmospheric"),
  reserved("biomorphism", "Biomorphism", "quiet"),
  reserved("neo-futurism", "Neo-Futurism", "atmospheric"),
];

function reserved(slug: string, name: string, mood: StyleMood): ArtStyleContent {
  return {
    slug,
    name,
    shortDescription: "Coming soon.",
    characteristics: [],
    visualLanguage: [],
    applications: [],
    images: [],
    mood,
    available: false,
  };
}

export function getArtStyle(slug: string): ArtStyleContent | undefined {
  return artStyles.find((s) => s.slug === slug);
}
