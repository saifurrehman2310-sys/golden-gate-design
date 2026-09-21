import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { artStyles, getArtStyle, type StyleMood, type ArtStyleImage } from "@/data/artStyles";

type Rank = { x: number; y: number; size: string; opacity: number; blur: number; z: number };

// Each mood is a different "how the room feels" preset -- spacing, density
// and glow all shift, while the mechanic (dominant + depth pieces,
// parallax, promote-on-click) stays the same. A style can still get a
// fully custom composition later by branching on `slug` if it genuinely
// needs one; moods just keep that from being required for every style.
const MOOD_RANKS: Record<StyleMood, Rank[]> = {
  quiet: [
    { x: 54, y: 50, size: "clamp(250px,32vw,460px)", opacity: 1, blur: 0, z: 50 },
    { x: 86, y: 20, size: "clamp(78px,9vw,118px)", opacity: 0.4, blur: 0.5, z: 30 },
    { x: 14, y: 26, size: "clamp(70px,8vw,100px)", opacity: 0.3, blur: 0.8, z: 25 },
    { x: 88, y: 80, size: "clamp(64px,7vw,90px)", opacity: 0.22, blur: 1, z: 20 },
    { x: 16, y: 84, size: "clamp(58px,6vw,82px)", opacity: 0.16, blur: 1.2, z: 15 },
  ],
  rich: [
    { x: 50, y: 48, size: "clamp(230px,29vw,400px)", opacity: 1, blur: 0, z: 50 },
    { x: 79, y: 30, size: "clamp(126px,15vw,188px)", opacity: 0.75, blur: 0.2, z: 40 },
    { x: 21, y: 32, size: "clamp(116px,14vw,172px)", opacity: 0.68, blur: 0.2, z: 38 },
    { x: 80, y: 75, size: "clamp(106px,12vw,158px)", opacity: 0.6, blur: 0.3, z: 32 },
    { x: 20, y: 77, size: "clamp(100px,11vw,148px)", opacity: 0.55, blur: 0.3, z: 30 },
  ],
  atmospheric: [
    { x: 58, y: 52, size: "clamp(240px,31vw,430px)", opacity: 1, blur: 0, z: 50 },
    { x: 87, y: 24, size: "clamp(96px,11vw,148px)", opacity: 0.5, blur: 0.8, z: 30 },
    { x: 12, y: 30, size: "clamp(82px,10vw,124px)", opacity: 0.38, blur: 1.2, z: 26 },
    { x: 84, y: 82, size: "clamp(72px,8vw,108px)", opacity: 0.28, blur: 1.6, z: 18 },
    { x: 14, y: 85, size: "clamp(66px,7.5vw,98px)", opacity: 0.22, blur: 2, z: 14 },
  ],
  stark: [
    { x: 52, y: 50, size: "clamp(260px,33vw,460px)", opacity: 1, blur: 0, z: 50 },
    { x: 84, y: 26, size: "clamp(108px,13vw,164px)", opacity: 0.5, blur: 0, z: 34 },
    { x: 16, y: 28, size: "clamp(98px,12vw,150px)", opacity: 0.4, blur: 0, z: 30 },
    { x: 82, y: 78, size: "clamp(90px,10vw,132px)", opacity: 0.3, blur: 0, z: 24 },
    { x: 18, y: 80, size: "clamp(86px,9.5vw,126px)", opacity: 0.26, blur: 0, z: 20 },
  ],
};

const MOOD_AMBIENT: Record<StyleMood, string> = {
  quiet:
    "radial-gradient(50% 50% at 55% 45%, color-mix(in oklab, var(--champagne) 6%, transparent) 0%, transparent 72%)",
  rich: "radial-gradient(65% 60% at 50% 45%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, color-mix(in oklab, var(--ice) 8%, transparent) 45%, transparent 80%)",
  atmospheric:
    "radial-gradient(55% 55% at 60% 42%, color-mix(in oklab, var(--ice) 12%, transparent) 0%, color-mix(in oklab, var(--champagne) 6%, transparent) 45%, transparent 78%)",
  stark: "radial-gradient(55% 55% at 50% 45%, color-mix(in oklab, white 6%, transparent) 0%, transparent 75%)",
};

function Caption({ piece, visible }: { piece: ArtStyleImage; visible: boolean }) {
  return (
    <p
      className="pointer-events-none absolute top-[102%] left-1/2 w-max max-w-[13rem] -translate-x-1/2 text-center text-[0.68rem] tracking-[0.1em] text-muted-foreground uppercase transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: `translate(-50%, ${visible ? 0 : 4}px)` }}
    >
      {piece.caption}
    </p>
  );
}

export default function ArtStyle() {
  const { slug } = useParams<{ slug: string }>();
  const style = slug ? getArtStyle(slug) : undefined;

  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const isCoarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);

  const [order, setOrder] = useState<string[]>(style?.images.map((p) => p.id) ?? []);
  const [entered, setEntered] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const rafPending = useRef(false);
  const transitionTimer = useRef<number | null>(null);
  const prevSlug = useRef(slug);

  // When navigating from one style straight to another (the prev/next
  // links below), animate the swap instead of hard-cutting.
  useEffect(() => {
    if (prevSlug.current === slug) return;
    prevSlug.current = slug;
    setInfoOpen(false);
    if (!style) return;
    setEntered(false);
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(
      () => {
        setOrder(style.images.map((p) => p.id));
        requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
      },
      reducedMotion ? 0 : 360,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isCoarsePointer || reducedMotion) return;
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect || rafPending.current) return;
      rafPending.current = true;
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      requestAnimationFrame(() => {
        setPointer({ x, y });
        rafPending.current = false;
      });
    },
    [isCoarsePointer, reducedMotion],
  );

  if (!slug || !style) return <Navigate to="/art" replace />;
  if (!style.available) return <Navigate to="/art" replace />;

  const piecesById = new Map(style.images.map((p) => [p.id, p]));
  const dominant = piecesById.get(order[0]) ?? style.images[0];
  const others = order.slice(1).map((id) => piecesById.get(id)!).filter(Boolean);
  const ranks = MOOD_RANKS[style.mood];

  const promote = (id: string) => {
    if (id === order[0]) return;
    setOrder((prev) => [id, ...prev.filter((x) => x !== id)]);
  };

  const parallax = (rankIndex: number) => {
    if (!pointer) return { x: 0, y: 0 };
    const strength = (5 - rankIndex) * 3;
    return { x: pointer.x * strength, y: pointer.y * strength * 0.6 };
  };

  const available = artStyles.filter((s) => s.available);
  const idx = available.findIndex((s) => s.slug === style.slug);
  const prev = available[(idx - 1 + available.length) % available.length];
  const next = available[(idx + 1) % available.length];

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-grain" style={{ background: "#050506" }}>
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ background: MOOD_AMBIENT[style.mood] }}
        aria-hidden
      />
      {!reducedMotion && (
        <>
          <div
            className="ambient-drift pointer-events-none absolute inset-y-0 left-[10%] w-[16%] opacity-[0.09]"
            style={{
              background: "linear-gradient(180deg, color-mix(in oklab, var(--ice) 40%, transparent), transparent 75%)",
              filter: "blur(34px)",
            }}
            aria-hidden
          />
          <div
            className="ambient-drift-slow pointer-events-none absolute inset-y-0 left-[72%] w-[16%] opacity-[0.08]"
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
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%]"
        style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ice) 5%, transparent))" }}
        aria-hidden
      />

      <Reveal className="relative flex items-start justify-between gap-6 px-6 pt-28 sm:pt-32 lg:pt-40 lg:px-12">
        <div>
          <Link to="/art" className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
            The Archive
          </Link>
          <h1 className="mt-3 font-display text-[clamp(1.9rem,5vw,3.2rem)] leading-[1.1]">{style.name}</h1>
        </div>
        <button
          type="button"
          onClick={() => setInfoOpen((v) => !v)}
          className="lux-link mt-2 shrink-0 text-xs tracking-[0.15em] whitespace-nowrap uppercase"
        >
          {infoOpen ? "Close" : `About ${style.name}`}
        </button>
      </Reveal>

      {/* Desktop stage. */}
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        className="relative mt-6 hidden h-[58vh] min-h-[420px] w-full lg:block"
      >
        {[dominant, ...others].map((piece, i) => {
          const rank = ranks[i] ?? ranks[ranks.length - 1];
          const isDominant = i === 0;
          const p = parallax(i);
          return (
            <button
              key={piece.id}
              type="button"
              onClick={() => promote(piece.id)}
              onMouseEnter={() => setHoveredId(piece.id)}
              onMouseLeave={() => setHoveredId((h) => (h === piece.id ? null : h))}
              aria-label={piece.caption}
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
                transitionDuration: reducedMotion ? "0ms" : isDominant ? "600ms" : `${520 + i * 90}ms`,
                transitionDelay: entered && !isDominant ? `${i * 70}ms` : "0ms",
                cursor: isDominant ? "default" : "pointer",
              }}
            >
              <img
                src={piece.src}
                alt=""
                aria-hidden
                loading={isDominant ? "eager" : "lazy"}
                className="h-full w-full rounded-sm object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
              />
              <Caption piece={piece} visible={hoveredId === piece.id} />
            </button>
          );
        })}
      </div>

      {/* Mobile stage. */}
      <div className="relative mt-8 flex flex-col items-center px-6 lg:hidden">
        <div
          className="relative flex items-center justify-center transition-all duration-500"
          style={{
            width: "clamp(220px,70vw,320px)",
            height: "clamp(220px,70vw,320px)",
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1 : 0.94})`,
          }}
        >
          <img src={dominant.src} alt="" aria-hidden className="h-full w-full rounded-sm object-contain" />
        </div>
        <p className="mt-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">{dominant.caption}</p>

        <div className="mt-7 flex w-full snap-x gap-4 overflow-x-auto pb-2">
          {others.map((piece, i) => (
            <button
              key={piece.id}
              type="button"
              onClick={() => promote(piece.id)}
              aria-label={piece.caption}
              className="flex shrink-0 snap-start items-center justify-center transition-all duration-500"
              style={{
                width: "24vw",
                height: "24vw",
                minWidth: 88,
                minHeight: 88,
                opacity: entered ? 0.5 + i * 0.06 : 0,
                transform: `scale(${entered ? 1 : 0.9})`,
                transitionDelay: entered ? `${i * 70}ms` : "0ms",
              }}
            >
              <img src={piece.src} alt="" aria-hidden loading="lazy" className="h-full w-full rounded-sm object-contain" />
            </button>
          ))}
        </div>
      </div>

      {/* Move between exhibitions. */}
      <div className="relative mt-10 flex items-center justify-center gap-10 pb-16 text-xs tracking-[0.15em] uppercase lg:pb-10">
        <Link to={`/art/${prev.slug}`} className="lux-link text-muted-foreground hover:text-foreground">
          ← {prev.name}
        </Link>
        <Link to={`/art/${next.slug}`} className="lux-link text-muted-foreground hover:text-foreground">
          {next.name} →
        </Link>
      </div>

      {/* Info layer -- side panel on desktop, bottom sheet on mobile. Never covers the artwork. */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-500"
        style={{ opacity: infoOpen ? 1 : 0, pointerEvents: infoOpen ? "auto" : "none" }}
        onClick={() => setInfoOpen(false)}
      >
        <div className="absolute inset-0" style={{ background: "color-mix(in oklab, #050506 55%, transparent)" }} />
      </div>
      <aside
        className={`fixed inset-x-0 bottom-0 z-50 max-h-[75vh] overflow-y-auto rounded-t-2xl border-t border-white/[0.08] bg-[#0a0a0b] px-6 py-8 transition-transform duration-500 ease-[var(--ease-lux)] lg:top-0 lg:right-0 lg:bottom-0 lg:left-auto lg:h-full lg:max-h-none lg:w-[380px] lg:rounded-none lg:border-t-0 lg:border-l ${
          infoOpen ? "translate-y-0 lg:translate-x-0" : "translate-y-full lg:translate-x-full lg:translate-y-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setInfoOpen(false)}
          className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Close ×
        </button>
        <h2 className="mt-5 font-display text-2xl">{style.name}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{style.longDescription ?? style.shortDescription}</p>

        {style.colors && (
          <div className="mt-6 flex gap-2">
            {style.colors.map((c) => (
              <span key={c} className="h-6 w-6 rounded-full border border-white/10" style={{ background: c }} />
            ))}
          </div>
        )}

        {style.characteristics.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.65rem] tracking-[0.25em] text-[var(--gold)] uppercase">Characteristics</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {style.characteristics.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {style.visualLanguage.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.65rem] tracking-[0.25em] text-[var(--gold)] uppercase">Visual Language</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {style.visualLanguage.map((v) => (
                <li key={v.label}>
                  <span className="text-foreground">{v.label}:</span> {v.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {style.applications.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.65rem] tracking-[0.25em] text-[var(--gold)] uppercase">Applications</p>
            <p className="mt-2 text-sm text-muted-foreground">{style.applications.join(" · ")}</p>
          </div>
        )}

        {style.fashionNote && (
          <div className="mt-7">
            <p className="text-[0.65rem] tracking-[0.25em] text-[var(--gold)] uppercase">Fashion</p>
            <p className="mt-2 text-sm text-muted-foreground">{style.fashionNote}</p>
          </div>
        )}
      </aside>
    </section>
  );
}
