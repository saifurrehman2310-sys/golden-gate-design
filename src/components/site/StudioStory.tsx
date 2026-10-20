import { Reveal } from "@/components/site/Reveal";

/**
 * The approved Studio story, word for word, set as short paragraphs for a calmer reading rhythm.
 * Shared by the About page and the homepage About section so the copy lives in one place.
 */
const story = [
  "Some people see the world as it is. Others wonder what else it could be.",
  "I've always felt there is more to life than what sits on the surface. More to a moment than what happens in it, more to an object than its form, more to an idea than what it first appears to be.",
  "Perhaps it's about learning to look a little deeper — noticing connections where others see coincidence, beauty where others see the ordinary, and possibilities where others see things as they are. That way of seeing finds its way into everything I create.",
  "Saif Studio is simply one expression of it — a place where imagination takes form, and the invisible becomes something you can almost feel.",
] as const;

const closing = "The world doesn't always need to change. Sometimes, the way we see it does.";

export function StudioStory({ as: Heading = "h2", size = "lg" }: { as?: "h1" | "h2"; size?: "md" | "lg" }) {
  const body = size === "lg" ? "text-[clamp(1.1rem,1.9vw,1.35rem)]" : "text-[clamp(1.05rem,1.7vw,1.2rem)]";
  const title = size === "lg" ? "text-[clamp(2.4rem,6vw,4.2rem)]" : "text-[clamp(2rem,4.5vw,3rem)]";
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">The Studio</p>
        <Heading className={`mt-5 ${title} leading-[1.02] font-semibold`}>
          A way of <span className="text-gold-gradient">seeing.</span>
        </Heading>
      </Reveal>
      <div className={`mt-10 space-y-6 font-display ${body} leading-[1.75] text-foreground/85 lg:mt-12 lg:space-y-7`}>
        {story.map((para, i) => (
          <Reveal key={i} delay={80 + i * 70}>
            <p className={i === 0 ? "text-foreground" : ""}>{para}</p>
          </Reveal>
        ))}
        <Reveal delay={80 + story.length * 70}>
          <p className="pt-2 text-foreground">{closing}</p>
        </Reveal>
      </div>
    </div>
  );
}
