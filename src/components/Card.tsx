/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Link from './Link';

type CardProps = {
  title?: string | null;
  description?: string | null;
  link?: string | null;
  rel?: 'prev' | 'next';
  type: string;
};

const linkStyles = css`
  :before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 0 0;
    border-color: hsla(0, 0%, 0%, 0.8) transparent transparent transparent;
    position: absolute;
    top: 0;
    left: -12px;
  }
`;

const Card = ({ title, description, link, rel, type }: CardProps): JSX.Element | null => {
  const articleStyles = css`
    margin-bottom: 1.529rem;
    position: relative;
    h2,
    p {
      margin-bottom: 0;
    }
    p {
      font-weight: 700;
      font-style: italic;
    }
  `;
  return title && link ? (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      css={articleStyles}
    >
      <h2>
        {/* @ts-ignore - meh */}
        <Link to={link} rel={rel} css={type === 'pin' && linkStyles}>
          {title}
        </Link>
      </h2>
      {type === 'post' && <p itemProp="description">{description}</p>}
    </article>
  ) : null;
};

export default Card;
