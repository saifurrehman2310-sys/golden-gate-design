import { useEffect, useRef, useState } from "react";
import { spotifyPlaylistUri, spotifyTracks, type SpotifyTrack } from "@/data/spotifyTracks";

// Minimal shape of the bits of the Spotify iFrame API this component uses.
// (No official TS types are published for it.)
type SpotifyController = {
  loadUri: (uri: string) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  addListener: (event: string, cb: (e: { data: { isPaused: boolean } }) => void) => void;
};
type SpotifyIFrameAPI = {
  createController: (
    el: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    cb: (controller: SpotifyController) => void,
  ) => void;
};
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIFrameAPI) => void;
  }
}

const SPOTIFY_SCRIPT_SRC = "https://open.spotify.com/embed/iframe-api/v1";

/**
 * A small, mostly-dormant object living in the corner of the site.
 * Collapsed, it's just a soft point of light. Tapping it reveals 3
 * selectable tracks from the site's Spotify playlist and hands control to
 * the official Spotify iFrame API — no downloaded/proxied audio, no login.
 *
 * NOTE: this pass is functionality-first per the brief; the expanded
 * panel currently shows Spotify's own compact embed UI as-is. Visual
 * treatment of the embed itself comes in a follow-up pass.
 */
export function MusicControl() {
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const mountRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyController | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const init = (IFrameAPI: SpotifyIFrameAPI) => {
      IFrameAPI.createController(el, { uri: spotifyPlaylistUri, width: "100%", height: 152 }, (controller) => {
        controllerRef.current = controller;
        setReady(true);
        controller.addListener("playback_update", (e) => {
          setPlaying(!e.data.isPaused);
        });
      });
    };

    const existing = document.querySelector(`script[src="${SPOTIFY_SCRIPT_SRC}"]`);
    window.onSpotifyIframeApiReady = init;
    if (!existing) {
      const script = document.createElement("script");
      script.src = SPOTIFY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const selectTrack = (track: SpotifyTrack) => {
    if (!controllerRef.current || !track.uri) return;
    controllerRef.current.loadUri(track.uri);
    controllerRef.current.play();
    setActiveId(track.id);
  };

  const toggleExpanded = () => setExpanded((v) => !v);

  return (
    <div className="fixed right-5 bottom-5 z-40 sm:right-6 sm:bottom-6">
      {/* Expanded panel -- opens upward so it never clips at the viewport edge. */}
      <div
        className="nav-capsule absolute right-0 bottom-[calc(100%+0.75rem)] w-[min(300px,calc(100vw-2.5rem))] origin-bottom-right rounded-xl px-4 py-3.5 transition-all duration-500 ease-[var(--ease-lux)]"
        style={{
          opacity: expanded ? 1 : 0,
          transform: expanded ? "scale(1) translateY(0)" : "scale(0.92) translateY(6px)",
          pointerEvents: expanded ? "auto" : "none",
        }}
      >
        <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">On the site</p>

        <div className="mt-2 flex flex-col gap-1">
          {spotifyTracks.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTrack(t)}
              disabled={!t.uri}
              className="flex items-baseline justify-between rounded-sm px-1.5 py-1 text-left text-sm transition-colors disabled:opacity-30"
              style={{ color: activeId === t.id ? "var(--champagne)" : undefined }}
            >
              <span className="truncate">{t.title}</span>
              <span className="ml-2 shrink-0 truncate text-xs text-muted-foreground">{t.artist}</span>
            </button>
          ))}
        </div>

        <div ref={mountRef} className="mt-3 overflow-hidden rounded-lg" />
        {!ready && <p className="mt-2 text-[0.65rem] text-muted-foreground/70">Loading player…</p>}
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
          style={{ background: "var(--champagne)", transform: expanded ? "scale(1.4)" : "scale(1)" }}
        />
      </button>
    </div>
  );
}
