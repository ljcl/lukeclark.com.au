// @flow

import React, { Component } from 'react';

type NowPlayingState = {
  track?: {
    album: {
      '#text': string
    },
    artist: {
      name: string
    },
    name: string
  },
  isLoaded: boolean,
  error: mixed
};

class LastFmNowPlaying extends Component<{}, NowPlayingState> {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://lastfm-track.glitch.me/latest.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            track: result.track[0]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { isLoaded, error, track } = this.state;
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
}

export default LastFmNowPlaying;
