import blob0 from "@/assets/v3/blob-0.png";
import blob1 from "@/assets/v3/blob-1.png";
import blob2 from "@/assets/v3/blob-2.png";
import blob3 from "@/assets/v3/blob-3.png";
import blob4 from "@/assets/v3/blob-4.png";
import blob5 from "@/assets/v3/blob-5.png";
import blob6 from "@/assets/v3/blob-6.png";
import blob7 from "@/assets/v3/blob-7.png";
import blob8 from "@/assets/v3/blob-8.png";
import blob9 from "@/assets/v3/blob-9.png";
import blob10 from "@/assets/v3/blob-10.png";
import blob11 from "@/assets/v3/blob-11.png";
import blob12 from "@/assets/v3/blob-12.png";
import blob13 from "@/assets/v3/blob-13.png";
import blob14 from "@/assets/v3/blob-14.png";
import blob15 from "@/assets/v3/blob-15.png";

const allBlobs = [
  blob0, blob1, blob2, blob3, blob4, blob5, blob6, blob7,
  blob8, blob9, blob10, blob11, blob12, blob13, blob14, blob15,
];

export type BlobPosition = { blob: number; top: string; left: string; size: string; delay?: string };

/** Scattered abstract glass blobs used as a consistent wallpaper texture across every page - same opacity and blur everywhere so the whole site reads as one continuous environment. */
export function FloatingBlobs({ positions }: { positions: BlobPosition[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden>
      {positions.map((p, i) => (
        <img
          key={i}
          src={allBlobs[p.blob % allBlobs.length]}
          alt=""
          className={`float-slow absolute ${p.size} blur-[3px]`}
          style={{ top: p.top, left: p.left, animationDelay: p.delay ?? "0s" }}
        />
      ))}
    </div>
  );
}

/** A default varied scatter of blobs, ready to drop into any section without hand-picking positions. */
export const defaultBlobScatter: BlobPosition[] = [
  { blob: 0, top: "6%", left: "8%", size: "w-16 sm:w-20" },
  { blob: 3, top: "72%", left: "5%", size: "w-14 sm:w-18", delay: "2s" },
  { blob: 6, top: "15%", left: "85%", size: "w-16 sm:w-20", delay: "1s" },
  { blob: 9, top: "80%", left: "88%", size: "w-14 sm:w-18", delay: "3s" },
  { blob: 12, top: "45%", left: "50%", size: "w-14 sm:w-16", delay: "2.5s" },
];
