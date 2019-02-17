/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { rhythm } from '../utils/typography';
import profileImg from './profile-img.jpg';

const bioStyle = css`
  display: flex;
  margin-bottom: ${rhythm(2)};
`;

const bioTextStyle = css`
  max-width: 320px;
  font-weight: bold;
  margin-bottom: 0;
`;

const bioImgStyle = css`
  margin-right: ${rhythm(1 / 3)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 100%;
`;

const Bio = () => (
  <div css={bioStyle}>
    <img src={profileImg} css={bioImgStyle} alt={`Luke Clark`} />
    <p css={bioTextStyle}>
      Personal site of{' '}
      <a href="https://mobile.twitter.com/lukejclark">Luke Clark</a>. Links,
      snippets and sometimes words.
    </p>
  </div>
);

export default Bio;
