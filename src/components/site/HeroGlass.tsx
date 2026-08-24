import { useEffect, useRef, useState } from "react";
import glassForm from "@/assets/hero-glass-sphere.png";
import burger from "@/assets/proj-burger.jpg";
import advisor from "@/assets/proj-advisor.jpg";
import realestate from "@/assets/proj-realestate.jpg";

const fragments = [
  { src: burger, alt: "Burger Bliss website detail", cls: "left-[2%] top-[16%] w-24 sm:w-32 rotate-[-8deg]", delay: "0s" },
  { src: advisor, alt: "Shekhar Pathare advisor website detail", cls: "right-[0%] top-[38%] w-24 sm:w-32 rotate-[7deg]", delay: "1.6s" },
  { src: realestate, alt: "Sai Real Estate project detail", cls: "left-[10%] bottom-[8%] w-24 sm:w-32 rotate-[5deg]", delay: "3.2s" },
];

/** Sculptural liquid-glass hero visual with gentle parallax and light drift. */
export function HeroGlass() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(Math.min(window.scrollY, 600));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto aspect-square w-full max-w-[36rem]"
      aria-hidden
    >
      {/* ambient emitted light */}
      <div
        className="absolute inset-[-18%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 45%, color-mix(in oklab, var(--ice) 30%, transparent), transparent 70%)",
          transform: `translate3d(${tilt.x * -10}px, ${tilt.y * -10 - scroll * 0.05}px, 0)`,
          transition: "transform 700ms var(--ease-lux)",
        }}
      />
      <div
        className="absolute inset-[-8%] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(40% 40% at 62% 62%, color-mix(in oklab, var(--iris) 26%, transparent), transparent 70%)",
        }}
      />

      {/* the sculpture */}
      <div
        className="float-slow absolute inset-0"
        style={{
          transform: `translate3d(${tilt.x * 14}px, ${tilt.y * 12 - scroll * 0.12}px, 0)`,
          transition: "transform 900ms var(--ease-lux)",
        }}
      >
        <img
          src={glassForm}
          alt=""
          width={1312}
          height={1199}
          className="h-full w-full object-contain drop-shadow-[0_40px_90px_rgba(120,110,200,0.3)]"
        />
        {/* faint lift on the glass gradient — the sphere already carries its own sparkle highlights */}
        <div
          className="pointer-events-none absolute left-[26%] top-[24%] h-32 w-32 rounded-full opacity-25 mix-blend-screen sm:h-40 sm:w-40"
          style={{
            background:
              "radial-gradient(circle at 34% 34%, rgba(255,255,255,0.7), rgba(255,255,255,0) 58%)",
            maskImage: "radial-gradient(circle at 62% 62%, transparent 52%, #000 54%)",
          }}
        />
      </div>

      {/* three faint aligned points of light */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: "16%", t: "70%", d: "0s", s: 5 },
          { l: "29%", t: "63%", d: "1.2s", s: 4 },
          { l: "43%", t: "57%", d: "2.4s", s: 5 },
        ].map((p) => (
          <span
            key={p.l}
            className="drift-point absolute rounded-full"
            style={{
              left: p.l,
              top: p.t,
              width: p.s,
              height: p.s,
              animationDelay: p.d,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 12px 3px color-mix(in oklab, var(--ice) 55%, transparent)",
            }}
          />
        ))}
      </div>

      {/* real project fragments caught in the glass */}
      {fragments.map((f) => (
        <div
          key={f.alt}
          className={`float-slower glass-panel glass-edge absolute aspect-[16/11] overflow-hidden rounded-xl ${f.cls}`}
          style={{
            animationDelay: f.delay,
            transform: `translate3d(${tilt.x * -18}px, ${tilt.y * -14}px, 0)`,
            transition: "transform 900ms var(--ease-lux)",
          }}
        >
          <img
            src={f.src}
            alt={f.alt}
            loading="lazy"
            width={320}
            height={220}
            className="h-full w-full object-cover opacity-75"
          />
        </div>
      ))}
    </div>
  );
}
