import minimalism01 from "@/assets/art/minimalism-01.jpg";
import minimalism02 from "@/assets/art/minimalism-02.jpg";
import minimalism03 from "@/assets/art/minimalism-03.jpg";
import minimalism04 from "@/assets/art/minimalism-04.jpg";
import minimalism05 from "@/assets/art/minimalism-05.jpg";
import maximalism01 from "@/assets/art/maximalism-01.jpg";
import maximalism02 from "@/assets/art/maximalism-02.jpg";
import maximalism03 from "@/assets/art/maximalism-03.jpg";
import maximalism04 from "@/assets/art/maximalism-04.jpg";
import maximalism05 from "@/assets/art/maximalism-05.jpg";
import futuristic01 from "@/assets/art/futuristic-01.jpg";
import futuristic02 from "@/assets/art/futuristic-02.jpg";
import futuristic03 from "@/assets/art/futuristic-03.jpg";
import futuristic04 from "@/assets/art/futuristic-04.jpg";
import futuristic05 from "@/assets/art/futuristic-05.jpg";
import brutalism01 from "@/assets/art/brutalism-01.jpg";
import brutalism02 from "@/assets/art/brutalism-02.jpg";
import brutalism03 from "@/assets/art/brutalism-03.jpg";
import brutalism04 from "@/assets/art/brutalism-04.jpg";
import brutalism05 from "@/assets/art/brutalism-05.jpg";
import vectorArt01 from "@/assets/art/vector-art-01.jpg";
import vectorArt02 from "@/assets/art/vector-art-02.jpg";
import vectorArt03 from "@/assets/art/vector-art-03.jpg";
import vectorArt04 from "@/assets/art/vector-art-04.jpg";
import vectorArt05 from "@/assets/art/vector-art-05.jpg";
import collageArt01 from "@/assets/art/collage-art-01.jpg";
import collageArt02 from "@/assets/art/collage-art-02.jpg";
import collageArt03 from "@/assets/art/collage-art-03.jpg";
import collageArt04 from "@/assets/art/collage-art-04.jpg";
import collageArt05 from "@/assets/art/collage-art-05.jpg";

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
    ],
  },

  // -- Reserved slots: structure ready, waiting on real assets. Fill in
  // `images`, flip `available` to true, and the archive + style page work
  // automatically. Moods below are a starting guess for when that happens.
  reserved("cyberpunk", "Cyberpunk", "atmospheric"),
  reserved("pop-art", "Pop Art", "rich"),
  reserved("glassmorphism", "Glassmorphism", "atmospheric"),
  reserved("clay-soft-3d", "Clay / Soft 3D", "quiet"),
  reserved("pixel-art", "Pixel Art", "rich"),
  reserved("editorial", "Editorial", "quiet"),
  reserved("y2k", "Y2K", "rich"),
  reserved("swiss-design", "Swiss Design", "quiet"),
  reserved("surrealism", "Surrealism", "atmospheric"),
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
