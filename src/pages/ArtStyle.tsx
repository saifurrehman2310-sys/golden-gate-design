import { useCallback, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { getArtStyle } from "@/data/artStyles";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * The Collection -- an immersive, single-artwork viewer for one design
 * world. One large artwork at a time, a quiet "n / total" counter, and
 * barely-there chevrons; everything else (materiality, negative space,
 * the artwork's own aspect ratio) is left alone. Swipe on mobile, click
 * the chevrons or the edges on desktop -- both just move `index` and let
 * a single CSS animation handle the glide.
 */
export default function ArtStyle() {
  const { slug } = useParams<{ slug: string }>();
  const style = slug ? getArtStyle(slug) : undefined;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = style?.images.length ?? 0;

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (total === 0) return;
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total],
  );
  const goPrev = () => goTo(index - 1, -1);
  const goNext = () => goTo(index + 1, 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setDragging(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setDragX(e.touches[0].clientX - touchStartX.current);
  };
  const onTouchEnd = () => {
    const threshold = 55;
    if (dragX < -threshold) goNext();
    else if (dragX > threshold) goPrev();
    touchStartX.current = null;
    setDragX(0);
    setDragging(false);
  };

  const current = style?.images[index];

  const enterStyle = useMemo(
    () => ({ "--enter-x": `${direction > 0 ? 16 : -16}px` }) as React.CSSProperties,
    [direction],
  );

  if (!slug || !style) return <Navigate to="/art" replace />;

  if (!style.available) {
    return (
      <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-grain px-6 text-center" style={{ background: "#050506" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 45%, color-mix(in oklab, var(--ice) 6%, transparent) 0%, transparent 75%)",
          }}
          aria-hidden
        />
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-[var(--gold)] uppercase">{style.name}</p>
          <h1 className="mt-4 font-display text-[clamp(1.8rem,5vw,2.8rem)] leading-[1.1]">Coming soon.</h1>
          <Link to="/art" className="lux-link mt-8 inline-block text-sm text-muted-foreground">
            ‹ Back to the Archive
          </Link>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-grain" style={{ background: "#050506" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 40%, color-mix(in oklab, var(--ice) 7%, transparent) 0%, color-mix(in oklab, var(--champagne) 4%, transparent) 45%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="relative flex items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
        <Link to="/art" className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground">
          ‹ Archive
        </Link>
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">{style.name}</p>
        <p className="text-xs tracking-[0.1em] text-muted-foreground tabular-nums">
          {pad(index + 1)} / {pad(total)}
        </p>
      </div>

      {/* The stage. */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-10"
        style={{ touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous artwork"
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 px-3 py-10 text-2xl font-thin text-muted-foreground opacity-30 transition-opacity duration-500 hover:opacity-70 sm:left-2 sm:text-3xl"
          style={{ textShadow: "0 0 12px color-mix(in oklab, var(--ice) 45%, transparent)" }}
        >
          ‹
        </button>

        <div className="relative flex h-full w-full max-w-4xl items-center justify-center overflow-hidden">
          {current && (
            <img
              key={current.id}
              src={current.src}
              alt=""
              aria-hidden
              className={dragging ? "max-h-full max-w-full object-contain" : "artwork-enter max-h-full max-w-full object-contain"}
              style={{
                ...enterStyle,
                transform: dragging ? `translateX(${dragX}px)` : undefined,
                transition: dragging ? "none" : undefined,
              }}
            />
          )}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next artwork"
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 px-3 py-10 text-2xl font-thin text-muted-foreground opacity-30 transition-opacity duration-500 hover:opacity-70 sm:right-2 sm:text-3xl"
          style={{ textShadow: "0 0 12px color-mix(in oklab, var(--ice) 45%, transparent)" }}
        >
          ›
        </button>
      </div>

      <div className="relative pb-8 text-center sm:pb-10">
        {current && <p className="text-xs text-muted-foreground">{current.caption}</p>}
      </div>
    </section>
  );
}
