import orbChain from "@/assets/process-orbs.png";
import glassCube from "@/assets/glass-cube.png";
import glassSpiral from "@/assets/glass-spiral.png";

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

      {/* small companion sculptures drifting near either end of the chain */}
      <img
        src={glassCube}
        alt=""
        aria-hidden
        className="float-slow pointer-events-none absolute -top-6 left-[2%] hidden w-16 opacity-70 sm:block lg:w-20"
      />
      <img
        src={glassSpiral}
        alt=""
        aria-hidden
        className="float-slower pointer-events-none absolute -bottom-8 right-[3%] hidden w-16 opacity-70 sm:block lg:w-20"
        style={{ animationDelay: "2.4s" }}
      />
    </div>
  );
}
