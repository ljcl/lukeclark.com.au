/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import { rhythm } from '../utils/typography';
import LastFmNowPlaying from './LastFmNowPlaying';

import profileImg from './profile-img.jpg';

const bioStyle = css`
  display: flex;
  margin-bottom: ${rhythm(1)};
`;

const bioTextStyle = css`
  max-width: 320px;
  font-weight: bold;
  margin-bottom: 0;
`;

const bioImgStyle = css`
  border: 3px solid #010406;
  border-radius: 100%;
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2.2)};
  min-width: ${rhythm(2.2)};
  height: ${rhythm(2.2)};

  img {
    border: 2px solid #fff;
    border-radius: 100%;
    width: ${rhythm(2)};
    height: ${rhythm(2)};
    margin-bottom: 0;
    display: block;
  }
`;

const Footer = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 512px 0px',
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div css={bioStyle}>
      <figure css={bioImgStyle}>
        <img src={profileImg} alt={`Luke Clark`} />
      </figure>
      <div css={bioTextStyle}>
        <p>
          Personal site of{' '}
          <a href="https://mobile.twitter.com/lukejclark">Luke Clark</a>. Links,
          snippets and sometimes words.
        </p>
        <p>
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
          <a
            href="https://noot.space"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        </p>
        <p ref={ref}>{inView && <LastFmNowPlaying />}</p>
      </div>
    </div>
  );
};

export default Footer;
