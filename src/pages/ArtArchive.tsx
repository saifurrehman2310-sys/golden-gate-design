import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { artStyles } from "@/data/artStyles";

// A handful of entries get a larger cell for rhythm/hierarchy -- everything
// else is a single cell. `dense` auto-flow fills the remaining gaps
// automatically, so this stays safe even as styles are added/removed.
const FEATURED_SLUGS = new Set(["minimalism", "futuristic", "cyberpunk"]);

/**
 * The Archive -- a compact visual index of all 16 design worlds, not a
 * list of names. Every available style shows one of its own artworks;
 * Coming Soon entries stay dim and inert-looking but are still a real
 * destination (a quiet Coming Soon state, not a dead end).
 */
export default function ArtArchive() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-grain" style={{ background: "#050506" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 35%, color-mix(in oklab, var(--ice) 7%, transparent) 0%, color-mix(in oklab, var(--champagne) 4%, transparent) 45%, transparent 80%)",
        }}
        aria-hidden
      />

      <Reveal className="relative px-6 pt-28 text-center sm:pt-32 lg:pt-36">
        <p className="text-xs tracking-[0.35em] text-[var(--gold)] uppercase">The Art Archive</p>
        <h1 className="mt-4 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.1]">
          Sixteen visual worlds.
        </h1>
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
          style={{ gridAutoFlow: "dense" }}
        >
          {artStyles.map((s, i) => {
            const featured = FEATURED_SLUGS.has(s.slug);
            const preview = s.images[0]?.src;
            return (
              <Reveal key={s.slug} delay={Math.min(i * 40, 320)}>
                <Link
                  to={`/art/${s.slug}`}
                  className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-md transition-opacity duration-500 ${
                    featured ? "sm:col-span-2 sm:row-span-2 sm:aspect-square" : ""
                  }`}
                  style={{ opacity: s.available ? 1 : 0.4 }}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: "color-mix(in oklab, var(--background) 40%, transparent)" }} />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 45%, color-mix(in oklab, #050506 88%, transparent) 100%)" }}
                    aria-hidden
                  />
                  <div className="relative px-3 pb-3 sm:px-4 sm:pb-4">
                    <p className="text-sm text-foreground sm:text-base">{s.name}</p>
                    {!s.available && (
                      <p className="mt-0.5 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">Coming soon</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
