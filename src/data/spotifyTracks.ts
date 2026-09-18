/** The playlist loaded by default, before any individual track is picked. */
export const spotifyPlaylistUri = "spotify:playlist:6xSgACLaalPX4wg6zkbEaO";
export const spotifyPlaylistUrl = "https://open.spotify.com/playlist/6xSgACLaalPX4wg6zkbEaO";

export type SpotifyTrack = {
  id: string;
  title: string;
  artist: string;
  /** spotify:track:<id> — used with the iFrame API's loadUri(). */
  uri: string;
};

/**
 * The 3 selectable tracks. To add/replace a track: open it in Spotify,
 * "Share -> Copy Song Link", turn https://open.spotify.com/track/<ID> into
 * spotify:track:<ID>, and drop it in below. Nothing else needs to change —
 * the control renders however many entries are in this array.
 *
 * NOTE: Spotify's embed/oEmbed endpoints don't expose a playlist's track
 * list publicly (no API credentials were available to query the Web API),
 * so only one of the three below could be verified from the playlist's
 * public metadata. Replace the other two `uri` values with the real
 * track links for the other 2 songs.
 */
export const spotifyTracks: SpotifyTrack[] = [
  { id: "track-1", title: "Track 1 — replace me", artist: "—", uri: "" },
  { id: "track-2", title: "Track 2 — replace me", artist: "—", uri: "" },
  { id: "track-3", title: "Lament", artist: "Iftekharul Anam", uri: "spotify:track:14hn4Wvb8wI9ofZKvCNh1S" },
];
