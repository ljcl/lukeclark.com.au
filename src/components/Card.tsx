import React from 'react';
import Link from './Link';

type CardProps = {
  title: string | null;
  description?: string | null;
  link: string | null;
  rel?: 'prev' | 'next';
  type: string;
};

const Card = ({ title, description, link, rel, type }: CardProps) => {
  const fontSize = type !== 'post' ? '1rem' : undefined;
  return title && link ? (
    <article itemScope itemType="http://schema.org/BlogPosting">
      <h2 style={{ marginBottom: 0, fontSize }}>
        <Link to={link} rel={rel}>
          {title}
        </Link>
      </h2>
      <p itemProp="description" style={{ fontSize }}>
        {type === 'post' && description}
      </p>
    </article>
  ) : null;
};

export default Card;
