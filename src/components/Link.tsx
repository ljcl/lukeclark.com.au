import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

type LinkProps = {
  children: React.ReactNode;
  to: string;
  activeClassName?: string;
  rel?: string;
};

const Link = ({ children, to, activeClassName, rel, ...other }: LinkProps) => {
  const internal = to.startsWith('/');

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        rel={rel}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} rel={rel} {...other}>
      {children}
    </a>
  );
};

export default Link;
