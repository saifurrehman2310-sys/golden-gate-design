import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { artStyles } from "@/data/artStyles";

/**
 * The Archive -- entry point for the Art experience. Not a card grid: a
 * quiet, editorial index of the 15 styles, with the backdrop itself
 * responding to whichever one you're considering. Scales to all 15
 * automatically since it only reads from `artStyles`.
 */
export default function ArtArchive() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = useMemo(
    () => artStyles.find((s) => s.slug === hovered && s.available),
    [hovered],
  );

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-grain" style={{ background: "#050506" }}>
      {/* Backdrop -- crossfades to a dim, blurred glimpse of whichever style is being considered. */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" aria-hidden>
        {artStyles
          .filter((s) => s.available)
          .map((s) => (
            <img
              key={s.slug}
              src={s.images[0]?.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-[var(--ease-lux)]"
              style={{ opacity: active?.slug === s.slug ? 0.22 : 0, filter: "blur(18px) saturate(0.8)" }}
            />
          ))}
        <div className="absolute inset-0" style={{ background: "color-mix(in oklab, #050506 62%, transparent)" }} />
      </div>
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, color-mix(in oklab, var(--ice) 8%, transparent) 0%, color-mix(in oklab, var(--champagne) 5%, transparent) 42%, transparent 78%)",
        }}
        aria-hidden
      />

      <Reveal className="relative px-6 pt-28 text-center sm:pt-32 lg:pt-40">
        <p className="text-xs tracking-[0.35em] text-[var(--gold)] uppercase">The Art Archive</p>
        <h1 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1]">
          Fifteen visual worlds. Choose one to enter.
        </h1>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-3xl px-6 pb-24 sm:mt-16">
        <StyleList onHover={setHovered} activeSlug={active?.slug} />
      </div>
    </section>
  );
}

function StyleList({
  onHover,
  activeSlug,
}: {
  onHover: (slug: string | null) => void;
  activeSlug?: string;
}) {
  return (
    <ul>
      {artStyles.map((s) => (
        <li key={s.slug} className="border-b border-white/[0.05] last:border-b-0">
          {s.available ? (
            <Link
              to={`/art/${s.slug}`}
              onMouseEnter={() => onHover(s.slug)}
              onMouseLeave={() => onHover(null)}
              className="group flex items-baseline justify-between py-4 transition-colors duration-500 sm:py-5"
            >
              <span
                className="font-display text-[clamp(1.4rem,4vw,2.1rem)] leading-none transition-colors duration-500"
                style={{ color: activeSlug === s.slug ? "var(--champagne)" : undefined }}
              >
                {s.name}
              </span>
              <span className="ml-4 hidden shrink-0 text-xs text-muted-foreground italic transition-opacity duration-500 sm:inline-block">
                {activeSlug === s.slug ? s.shortDescription : ""}
              </span>
            </Link>
          ) : (
            <div className="flex items-baseline justify-between py-4 opacity-30 sm:py-5">
              <span className="font-display text-[clamp(1.4rem,4vw,2.1rem)] leading-none">{s.name}</span>
              <span className="ml-4 shrink-0 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                Coming soon
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
