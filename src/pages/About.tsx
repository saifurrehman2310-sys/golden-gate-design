import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";
import glassDroplet from "@/assets/glass-droplet.png";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-16 px-6 pt-44 pb-24 lg:pt-52 lg:pb-32">
          <Reveal>
            <h1 className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">SAIF STUDIO · A WAY OF SEEING</h1>
            <p className="mt-8 font-display text-[clamp(1.35rem,2.8vw,2rem)] leading-[1.55] text-foreground/90">
              Some people see the world as it is. Others wonder what else it could be. I've always felt there is more to life than what sits on the surface. More to a moment than what happens in it, more to an object than its form, more to an idea than what it first appears to be. Perhaps it's about learning to look a little deeper — noticing connections where others see coincidence, beauty where others see the ordinary, and possibilities where others see things as they are. That way of seeing finds its way into everything I create. Saif Studio is simply one expression of it — a place where imagination takes form, and the invisible becomes something you can almost feel. The world doesn't always need to change. Sometimes, the way we see it does.
            </p>
          </Reveal>
          <Reveal delay={120} className="w-full">
            <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden>
              <div
                className="absolute inset-[-10%] rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(45% 45% at 45% 50%, color-mix(in oklab, var(--iris) 20%, transparent), transparent 70%)",
                }}
              />
              <img src={glassDroplet} alt="" className="float-slow relative h-full w-full object-contain" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold">
              Let's build something worth remembering.
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <MagneticLink to="/contact">Start Your Project</MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
