import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { tracks, spotifyUrl } from "@/data/tracks";

type Status = "idle" | "loading" | "ready" | "error";

/**
 * A small, mostly-dormant object living in the corner of the site — not a
 * music-player widget. Collapsed, it's just a soft point of light. Tapping
 * it reveals the current track and a play/pause control; tapping again
 * puts it back to sleep. Playback never starts on its own.
 */
export function MusicControl() {
  const track = tracks[0];
  const audioRef = useRef<HTMLAudioElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadStart = () => setStatus((s) => (s === "error" ? s : "loading"));
    const onCanPlay = () => setStatus("ready");
    const onError = () => setStatus("error");
    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("loadstart", onLoadStart);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("error", onError);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadstart", onLoadStart);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || status === "error") return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setStatus("error"));
    }
  };

  const toggleExpanded = () => setExpanded((v) => !v);

  return (
    <div className="fixed right-5 bottom-5 z-40 sm:right-6 sm:bottom-6">
      <audio ref={audioRef} src={track.src} preload="none" />

      {/* Expanded panel -- compact, opens upward so it never clips at the viewport edge. */}
      <div
        className="nav-capsule absolute right-0 bottom-[calc(100%+0.75rem)] w-56 origin-bottom-right rounded-xl px-4 py-3.5 transition-all duration-500 ease-[var(--ease-lux)]"
        style={{
          opacity: expanded ? 1 : 0,
          transform: expanded ? "scale(1) translateY(0)" : "scale(0.92) translateY(6px)",
          pointerEvents: expanded ? "auto" : "none",
        }}
      >
        <p className="truncate text-sm">{track.title}</p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">{track.artist}</p>

        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            disabled={status === "error"}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-opacity disabled:opacity-30"
          >
            {playing ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
          </button>

          <div className="h-px flex-1 bg-white/10">
            <div
              className="h-px bg-[var(--gold)] transition-[width] duration-150"
              style={{ width: `${Math.min(100, progress * 100)}%` }}
            />
          </div>
        </div>

        {status === "error" && <p className="mt-2 text-[0.65rem] text-muted-foreground/70">Track unavailable</p>}

        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[0.6rem] tracking-[0.15em] text-muted-foreground/60 uppercase transition-colors hover:text-muted-foreground"
          >
            Listen on Spotify
          </a>
        )}
      </div>

      {/* Collapsed indicator -- the only thing visible by default. */}
      <button
        type="button"
        onClick={toggleExpanded}
        aria-label={expanded ? "Close music control" : "Open music control"}
        aria-expanded={expanded}
        className="relative flex h-11 w-11 items-center justify-center"
      >
        <span
          className={`pointer-events-none absolute inset-0 rounded-full blur-md transition-opacity duration-700 ${
            playing ? "light-breathe" : ""
          }`}
          style={{
            opacity: expanded ? 0.9 : playing ? 0.7 : 0.35,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--ice) 45%, transparent) 0%, color-mix(in oklab, var(--champagne) 25%, transparent) 45%, transparent 75%)",
          }}
        />
        <span
          className="relative h-1.5 w-1.5 rounded-full transition-transform duration-500"
          style={{
            background: status === "error" ? "var(--muted-foreground)" : "var(--champagne)",
            transform: expanded ? "scale(1.4)" : "scale(1)",
          }}
        />
      </button>
    </div>
  );
}
