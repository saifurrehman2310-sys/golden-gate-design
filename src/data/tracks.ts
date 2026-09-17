export type Track = {
  id: string;
  title: string;
  artist: string;
  /** Path under /public/audio — drop the file there and point this at it. */
  src: string;
};

/**
 * The site's soundtrack. To add a track: drop the audio file in
 * `public/audio/` and add an entry here. The first track is what plays by
 * default; nothing else in the app needs to change.
 */
export const tracks: Track[] = [
  {
    id: "theme-01",
    title: "Untitled Theme",
    artist: "Saif Studio",
    // Placeholder path — replace public/audio/theme.mp3 with the real file
    // (same filename), or change this path to point at a new one.
    src: "/audio/theme.mp3",
  },
];

/**
 * Optional destination for "Listen on Spotify" in the expanded control.
 * Leave empty to hide that link entirely.
 */
export const spotifyUrl = "";
