import orbChain from "@/assets/process-orbs.png";

/** Liquid-glass orb chain — sits behind the Process timeline as the visual spine. */
export function ProcessOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.35] lg:opacity-[0.45]" aria-hidden>
      <div
        className="float-slower relative w-[140%] max-w-none lg:w-[85%]"
        style={{ transform: "translateX(-4%)" }}
      >
        <img
          src={orbChain}
          alt=""
          width={1600}
          height={520}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
