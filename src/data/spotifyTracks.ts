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
 * the control renders only entries that have a real `uri`.
 *
 * NOTE: Spotify's embed/oEmbed endpoints don't expose a playlist's track
 * list publicly (no API credentials were available to query the Web API),
 * so only "Lament" could be verified with a real track URI. Titles/artists
 * for the other two are filled in for reference, but their `uri` is still
 * empty — fill those in and they'll start appearing in the UI automatically.
 */
export const spotifyTracks: SpotifyTrack[] = [
  { id: "track-1", title: "Orenda", artist: "Senjidema", uri: "" },
  { id: "track-2", title: "Temple of Time", artist: "Iftekharul Anam", uri: "" },
  { id: "track-3", title: "Lament", artist: "Iftekharul Anam", uri: "spotify:track:14hn4Wvb8wI9ofZKvCNh1S" },
];
