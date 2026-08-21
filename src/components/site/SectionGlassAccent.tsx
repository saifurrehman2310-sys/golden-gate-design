import heroBlob from "@/assets/hero-glass.png";

/**
 * Reused hero sculpture, cropped/scaled small as a corner accent — brings the same
 * bright liquid-glass energy into sections that don't have a dedicated sculpture,
 * without repeating the hero at full prominence.
 */
export function SectionGlassAccent({
  position = "top-right",
}: {
  position?: "top-right" | "bottom-left";
}) {
  const posClasses =
    position === "top-right"
      ? "-top-24 -right-24 lg:-top-32 lg:-right-32"
      : "-bottom-24 -left-24 lg:-bottom-32 lg:-left-32";

  return (
    <div
      className={`pointer-events-none absolute ${posClasses} w-[22rem] opacity-[0.4] lg:w-[30rem] lg:opacity-50`}
      aria-hidden
    >
      <div className="float-slow">
        <img src={heroBlob} alt="" width={1043} height={782} className="h-auto w-full object-contain" />
      </div>
    </div>
  );
}
