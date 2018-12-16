// @flow

import React from 'react';
import Link from './Link';

type CardProps = {
  title: string,
  description: string,
  link: string,
  rel?: 'prev' | 'next',
  type: 'post' | 'pin' | 'related'
};

const Card = ({ title, description, link, rel, type }: CardProps) => {
  return (
    <article itemScope="itemscope" itemType="http://schema.org/BlogPosting">
      <h2 style={{ marginBottom: 0, fontSize: type !== 'post' && '1rem' }}>
        <Link to={link} rel={rel}>
          {title}
        </Link>
      </h2>
      <p itemProp="description" style={{ fontSize: type !== 'post' && '1rem' }}>
        {description}
      </p>
    </article>
  );
};

export default Card;
