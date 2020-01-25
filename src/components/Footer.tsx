/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import { rhythm } from '../utils/typography';
import LastFmNowPlaying from './LastFmNowPlaying';

const Footer = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 512px 0px',
    threshold: 1,
    triggerOnce: true,
  });
  return (
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
        ref={ref}
      >
        {inView && <LastFmNowPlaying />}
      </div>
    </footer>
  );
};

export default Footer;
