/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from './Link';
import { rhythm, scale } from '../utils/typography';
import ExternalIcon from './external.svg';
type CardProps = {
  title: string | null;
  description?: string | null;
  link: string | null;
  rel?: 'prev' | 'next';
  type: string;
};

const linkStyles = css`
position: relative;
top: -2px;
right: auto;
margin: 0 ${rhythm(1/2)};
height: 100%;
width: 18px;
display: inline-block;
vertical-align: middle;
  @media (min-width: 780px) {
    position: absolute;
    right: calc(100% + ${rhythm(1/2)});
    top: 0;
    margin: 0;
  }
`;

const Card = ({ title, description, link, rel, type }: CardProps) => {
  const articleStyles = css`
    margin-bottom: 1.529rem;
    position: relative;
    h2,
    p {
      margin-bottom: 0;
      font-size: ${type !== 'post' && '1rem'};
    }
  `;
  return title && link ? (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      css={articleStyles}
    >
      <h2>
        <Link to={link} rel={rel}>
          {title}
          {type === 'pin' && <ExternalIcon css={linkStyles} />}
        </Link>
      </h2>
      <p itemProp="description">{type === 'post' && description}</p>
    </article>
  ) : null;
};

export default Card;
