// @flow

import React from 'react';
import Meta from './Meta';
import Footer from './Footer';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import logo from './logo.svg';

type LayoutProps = {
  children: React$Node,
  location: Object
};

const Layout = ({ children, location }: LayoutProps) => {
  const isHome = location.pathname === '/';
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <Meta />
      <nav className="navbar is-transparent">
        <Link to="/" className="navbar-item">
          <figure
            className="image"
            style={{ marginBottom: rhythm(isHome ? 2 : 1), ...scale(1.0) }}
          >
            <img
              src={logo}
              alt="Luke Clark"
              style={{
                width: isHome && '88px',
                marginBottom: 0,
                display: 'block'
              }}
            />
          </figure>
        </Link>
      </nav>

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
