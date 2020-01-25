/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { rhythm } from '../utils/typography';
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

const Bio = () => (
  <div css={bioStyle}>
    <figure css={bioImgStyle}>
      <img src={profileImg} alt={`Luke Clark`} />
    </figure>
    <p css={bioTextStyle}>
      Personal site of{' '}
      <a href="https://mobile.twitter.com/lukejclark">Luke Clark</a>. Links,
      snippets and sometimes words.
    </p>
  </div>
);

export default Bio;
