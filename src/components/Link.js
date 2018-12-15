// @flow

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = {
  children: React$Node,
  to: string,
  activeClassName?: string
};

const Link = ({ children, to, activeClassName, ...other }: LinkProps) => {
  const internal = to.startsWith('/');

  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
