// @flow

import React from 'react';
import { Link } from 'gatsby';

type CardProps = {
  title: string,
  description: string,
  link: string,
  rel?: 'prev' | 'next'
};

const Card = ({ title, description, link, rel }: CardProps) => (
  <article itemScope="itemscope" itemType="http://schema.org/BlogPosting">
    <h2 style={{ marginBottom: 0 }}>
      <Link to={link} rel={rel}>
        {title}
      </Link>
    </h2>
    <p itemProp="description">{description}</p>
  </article>
);

export default Card;
