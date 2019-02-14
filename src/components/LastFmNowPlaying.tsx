import React, { useState, useEffect } from 'react';

type TrackType = {
  album: {
    '#text': string;
  };
  artist: {
    name: string;
  };
  name: string;
} | null;
type TrackState = {
  track: TrackType[];
};

function LastFmNowPlaying() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [track, setTrack] = useState<TrackType>(null);

  const fetchData = async () => {
    await fetch('https://lastfm-track.glitch.me/latest.json')
      .then(res => res.json())
      .then(
        (result: TrackState) => {
          setTrack(result.track[0]);
          setIsLoaded(true);
        },
        (error: any) => {
          setError(error);
          setIsLoaded(true);
        }
      )
      .then(() => setIsLoaded(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoaded || error) return null;
  return track ? (
    <div>
      Last{' '}
      <a
        href="https://itunes.apple.com/profile/ljcl"
        target="_blank"
        rel="noopener noreferrer"
      >
        listened to
      </a>{' '}
      {track.name} by {track.artist.name}
    </div>
  ) : null;
}

export default LastFmNowPlaying;
