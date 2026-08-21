import orbChain from "@/assets/process-orbs.png";

/** Liquid-glass orb chain — the literal visual spine of the Process timeline. */
export function ProcessOrbs() {
  return (
    <div className="relative mx-auto w-full max-w-4xl" aria-hidden>
      <div
        className="pointer-events-none absolute inset-[-20%] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(35% 45% at 15% 40%, color-mix(in oklab, var(--ice) 24%, transparent), transparent 70%), radial-gradient(35% 45% at 85% 60%, color-mix(in oklab, var(--champagne) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="float-slower relative">
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
