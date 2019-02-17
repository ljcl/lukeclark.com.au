/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Observer from './Observer/Observer';
import LastFmNowPlaying from './LastFmNowPlaying';

const Footer = () => (
  <footer
    css={css`
      margin-top: ${rhythm(3)};
      margin-bottom: ${rhythm(1)};
    `}
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
    <div
      css={css`
        float: right;
      `}
    >
      <Observer
        rootMargin="0px 0px 512px 0px"
        threshold={1}
        triggerOnce
        observerId="lastFmNowPlaying"
        render={inView => inView && <LastFmNowPlaying />}
      />
    </div>
  </footer>
);

export default Footer;
