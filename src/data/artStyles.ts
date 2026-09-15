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
export type StyleMood = "quiet" | "rich" | "atmospheric";

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

  // -- Reserved slots: structure ready, waiting on real assets. Fill in
  // `images`, flip `available` to true, and the archive + style page work
  // automatically. Moods below are a starting guess for when that happens.
  reserved("brutalism", "Brutalism", "atmospheric"),
  reserved("vector-art", "Vector Art", "quiet"),
  reserved("collage-art", "Collage Art", "rich"),
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
