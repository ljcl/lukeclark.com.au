// @flow

import React from 'react';
import { rhythm } from '../utils/typography';
import Observer from './Observer/Observer';
import LastFmNowPlaying from './LastFmNowPlaying';

const Footer = () => (
  <footer
    style={{
      marginTop: rhythm(3),
      marginBottom: rhythm(1)
    }}
  >
    <a
      href="https://instagram.com/ljcl"
      target="_blank"
      rel="noopener noreferrer"
    >
      gram
    </a>
    {', '}
    <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
      rss
    </a>
    {', '}
    <a href="https://noot.space" target="_blank" rel="noopener noreferrer">
      noot
    </a>
    {', '}
    <a
      href="https://mobile.twitter.com/lukejclark"
      target="_blank"
      rel="noopener noreferrer"
    >
      tweet
    </a>
    <div style={{ float: 'right' }}>
      <Observer
        rootMargin="0px 0px 256px 0px"
        threshold={1}
        triggerOnce
        observerId="lastFmNowPlaying"
        render={inView => inView && <LastFmNowPlaying />}
      />
    </div>
  </footer>
);

export default Footer;
