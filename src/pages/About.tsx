import { Reveal } from "@/components/site/Reveal";
import { FloatingBlobs, defaultBlobScatter } from "@/components/site/FloatingBlobs";
import { MagneticLink } from "@/components/site/MagneticLink";
import { StudioStory } from "@/components/site/StudioStory";
import glassDroplet from "@/assets/glass-droplet.png";

export default function About() {
  return (
    <>
      <section className="relative overflow-x-clip">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 8%, color-mix(in oklab, var(--ice) 9%, transparent), transparent 72%), radial-gradient(50% 28% at 50% 78%, color-mix(in oklab, var(--iris) 8%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <FloatingBlobs positions={defaultBlobScatter} />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-20 px-6 pt-44 pb-28 lg:gap-24 lg:pt-52 lg:pb-36">
          <StudioStory as="h1" size="lg" />
          <Reveal delay={120} className="w-full">
            <div className="relative mx-auto aspect-square w-full max-w-xs" aria-hidden>
              <div
                className="pointer-events-none absolute rounded-full opacity-60"
                style={{
                  inset: "-25%",
                  background:
                    "radial-gradient(45% 45% at 50% 50%, color-mix(in oklab, var(--iris) 22%, transparent), transparent 72%)",
                  filter: "blur(40px)",
                }}
              />
              <img src={glassDroplet} alt="" className="float-slow relative h-full w-full object-contain" />
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 pt-4 pb-28 text-center lg:pb-36">
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
