/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from './Link';

type CardProps = {
  title: string | null;
  description?: string | null;
  link: string | null;
  rel?: 'prev' | 'next';
  type: string;
};

const Card = ({ title, description, link, rel, type }: CardProps) => {
  const articleStyles = css`
    margin-bottom: 1.529rem;
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
        </Link>
      </h2>
      <p itemProp="description">{type === 'post' && description}</p>
    </article>
  ) : null;
};

export default Card;
