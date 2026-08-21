import glassKnot from "@/assets/cta-glass.png";

/** Liquid-glass knot sculpture for the closing CTA — echoes the hero material language. */
export function CtaGlass() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
      <div
        className="absolute inset-[-10%] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(45% 45% at 40% 50%, color-mix(in oklab, var(--ice) 24%, transparent), transparent 70%), radial-gradient(40% 40% at 65% 55%, color-mix(in oklab, var(--champagne) 20%, transparent), transparent 70%)",
        }}
      />
      <div className="float-slow relative w-[70%] max-w-md opacity-70 lg:w-[45%]">
        <img
          src={glassKnot}
          alt=""
          width={1345}
          height={890}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
