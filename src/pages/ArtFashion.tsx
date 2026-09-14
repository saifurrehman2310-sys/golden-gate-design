import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { galleryCategories, type GalleryPiece } from "@/data/gallery";

// Desktop scatter positions for the three pieces sitting behind the
// dominant one -- fixed roles (mid / deeper / farthest), not tied to any
// particular piece, so whichever piece is promoted just slots into rank 0.
const RANKS = [
  { x: 56, y: 52, size: "clamp(240px,30vw,420px)", opacity: 1, blur: 0, z: 40 },
  { x: 85, y: 22, size: "clamp(110px,13vw,168px)", opacity: 0.55, blur: 0.4, z: 30 },
  { x: 16, y: 78, size: "clamp(96px,11vw,138px)", opacity: 0.36, blur: 0.8, z: 20 },
  { x: 88, y: 82, size: "clamp(78px,9vw,108px)", opacity: 0.22, blur: 1.2, z: 10 },
];

function Caption({ piece, visible }: { piece: GalleryPiece; visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute top-[102%] left-1/2 w-max max-w-[14rem] -translate-x-1/2 text-center transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: `translate(-50%, ${visible ? 0 : 4}px)` }}
    >
      <p className="font-display text-sm text-foreground">{piece.title}</p>
      <p className="mt-0.5 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
        {piece.style} &nbsp;·&nbsp; {piece.year}
      </p>
    </div>
  );
}

/**
 * "Art & Fashion" -- a small exhibition inside the site rather than a page
 * of image cards. One dominant piece up front, a few smaller ones sitting
 * deeper in the room; picking a category lets the room settle into a new
 * set, picking a smaller piece brings it forward. Reuses the site's
 * existing glass-sculpture asset library as placeholder artwork.
 */
export default function ArtFashion() {
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [order, setOrder] = useState<string[]>(galleryCategories[0].pieces.map((p) => p.id));
  const [entered, setEntered] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const rafPending = useRef(false);
  const transitionTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    },
    [],
  );

  const category = galleryCategories[activeIndex];
  const piecesById = useMemo(
    () => new Map(category.pieces.map((p) => [p.id, p])),
    [category],
  );
  const dominant = piecesById.get(order[0]) ?? category.pieces[0];
  const others = order.slice(1).map((id) => piecesById.get(id)!).filter(Boolean);

  const changeCategory = (idx: number) => {
    if (idx === activeIndex) return;
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    setEntered(false);
    transitionTimer.current = window.setTimeout(
      () => {
        setActiveIndex(idx);
        setOrder(galleryCategories[idx].pieces.map((p) => p.id));
        requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
      },
      reducedMotion ? 0 : 380,
    );
  };

  const promote = (id: string) => {
    if (id === order[0]) return;
    setOrder((prev) => [id, ...prev.filter((x) => x !== id)]);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isCoarsePointer || reducedMotion) return;
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect || rafPending.current) return;
      rafPending.current = true;
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      requestAnimationFrame(() => {
        setPointer({ x, y });
        rafPending.current = false;
      });
    },
    [isCoarsePointer, reducedMotion],
  );

  const artCategories = galleryCategories.filter((c) => c.group === "Art");
  const fashionCategories = galleryCategories.filter((c) => c.group === "Fashion");

  const parallax = (rankIndex: number) => {
    if (!pointer) return { x: 0, y: 0 };
    const strength = (4 - rankIndex) * 3.5;
    return { x: pointer.x * strength, y: pointer.y * strength * 0.6 };
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-grain" style={{ background: "#050506" }}>
      {/* Atmosphere -- soft haze, no decoration competing with the artwork. */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(55% 55% at 62% 48%, color-mix(in oklab, var(--ice) 9%, transparent) 0%, color-mix(in oklab, var(--champagne) 5%, transparent) 42%, transparent 78%)",
        }}
        aria-hidden
      />
      {!reducedMotion && (
        <>
          <div
            className="ambient-drift pointer-events-none absolute inset-y-0 left-[12%] w-[16%] opacity-[0.1]"
            style={{
              background: "linear-gradient(180deg, color-mix(in oklab, var(--ice) 40%, transparent), transparent 75%)",
              filter: "blur(34px)",
            }}
            aria-hidden
          />
          <div
            className="ambient-drift-slow pointer-events-none absolute inset-y-0 left-[70%] w-[16%] opacity-[0.09]"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--champagne) 34%, transparent), transparent 78%)",
              filter: "blur(36px)",
            }}
            aria-hidden
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%]"
        style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ice) 5%, transparent))" }}
        aria-hidden
      />

      <Reveal className="relative px-6 pt-28 text-center sm:pt-32 lg:pt-40 lg:text-left lg:pl-[clamp(180px,20vw,260px)]">
        <p className="text-xs tracking-[0.35em] text-[var(--gold)] uppercase">Art &amp; Fashion</p>
        <h1 className="mt-4 font-display text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.1]">
          A small exhibition, worn and imagined.
        </h1>
      </Reveal>

      {/* Category navigation -- desktop: quiet vertical column on the left edge. */}
      <div className="hidden lg:block">
        <div className="absolute top-1/2 left-8 z-50 -translate-y-1/2 xl:left-12">
          <CategoryColumn label="Art" categories={artCategories} activeSlug={category.slug} onSelect={changeCategory} />
          <div className="my-6 h-px w-8 bg-white/10" />
          <CategoryColumn label="Fashion" categories={fashionCategories} activeSlug={category.slug} onSelect={changeCategory} />
        </div>
      </div>

      {/* Category navigation -- mobile: quiet horizontal row. */}
      <div className="relative mt-8 overflow-x-auto px-6 lg:hidden">
        <div className="flex w-max gap-5">
          {galleryCategories.map((c, idx) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => changeCategory(idx)}
              className="shrink-0 pb-1 text-[0.7rem] tracking-[0.2em] whitespace-nowrap uppercase transition-colors"
              style={{
                color: c.slug === category.slug ? "var(--champagne)" : "var(--muted-foreground)",
                borderBottom: c.slug === category.slug ? "1px solid var(--gold)" : "1px solid transparent",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop stage -- one dominant piece, a few sitting deeper in the room. */}
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        className="relative mt-6 hidden h-[62vh] min-h-[440px] w-full lg:block"
      >
        {[dominant, ...others].map((piece, i) => {
          const rank = RANKS[i] ?? RANKS[RANKS.length - 1];
          const isDominant = i === 0;
          const p = parallax(i);
          return (
            <button
              key={piece.id}
              type="button"
              onClick={() => promote(piece.id)}
              onMouseEnter={() => setHoveredId(piece.id)}
              onMouseLeave={() => setHoveredId((h) => (h === piece.id ? null : h))}
              aria-label={`${piece.title} -- ${piece.style}, ${piece.year}`}
              className="absolute flex items-center justify-center transition-all ease-[var(--ease-lux)]"
              style={{
                left: `${rank.x}%`,
                top: `${rank.y}%`,
                width: rank.size,
                height: rank.size,
                zIndex: rank.z,
                opacity: entered ? rank.opacity : 0,
                filter: `blur(${entered ? rank.blur : rank.blur + 3}px)`,
                transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px)) scale(${entered ? 1 : 0.92})`,
                transitionDuration: reducedMotion ? "0ms" : isDominant ? "600ms" : `${550 + i * 90}ms`,
                transitionDelay: entered && !isDominant ? `${i * 70}ms` : "0ms",
                cursor: isDominant ? "default" : "pointer",
              }}
            >
              <img src={piece.image} alt="" aria-hidden loading={isDominant ? "eager" : "lazy"} className="h-full w-full object-contain" />
              <Caption piece={piece} visible={hoveredId === piece.id} />
            </button>
          );
        })}
      </div>

      {/* Mobile stage -- dominant piece up top, the rest as a touch-scrollable row beneath. */}
      <div className="relative mt-10 flex flex-col items-center px-6 lg:hidden">
        <div
          className="relative flex items-center justify-center transition-all duration-500"
          style={{
            width: "clamp(220px,68vw,320px)",
            height: "clamp(220px,68vw,320px)",
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1 : 0.94})`,
          }}
        >
          <img src={dominant.image} alt="" aria-hidden loading="eager" className="h-full w-full object-contain" />
        </div>
        <div className="mt-3 text-center">
          <p className="font-display text-base">{dominant.title}</p>
          <p className="mt-0.5 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            {dominant.style} &nbsp;·&nbsp; {dominant.year}
          </p>
        </div>

        <div className="mt-8 flex w-full snap-x gap-4 overflow-x-auto pb-2">
          {others.map((piece, i) => (
            <button
              key={piece.id}
              type="button"
              onClick={() => promote(piece.id)}
              aria-label={`${piece.title} -- ${piece.style}, ${piece.year}`}
              className="flex shrink-0 snap-start items-center justify-center transition-all duration-500"
              style={{
                width: "22vw",
                height: "22vw",
                minWidth: 84,
                minHeight: 84,
                opacity: entered ? 0.55 + i * 0.05 : 0,
                transform: `scale(${entered ? 1 : 0.9})`,
                transitionDelay: entered ? `${i * 70}ms` : "0ms",
              }}
            >
              <img src={piece.image} alt="" aria-hidden loading="lazy" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      </div>

      <div className="h-16 lg:h-10" />
    </section>
  );
}

function CategoryColumn({
  label,
  categories,
  activeSlug,
  onSelect,
}: {
  label: string;
  categories: typeof galleryCategories;
  activeSlug: string;
  onSelect: (idx: number) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-[0.6rem] tracking-[0.3em] text-muted-foreground/60 uppercase">{label}</p>
      <ul className="flex flex-col gap-3">
        {categories.map((c) => {
          const globalIdx = galleryCategories.findIndex((g) => g.slug === c.slug);
          const isActive = c.slug === activeSlug;
          return (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => onSelect(globalIdx)}
                className="text-left text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-500"
                style={{ color: isActive ? "var(--champagne)" : "var(--muted-foreground)" }}
              >
                {c.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
