/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ReactNode } from 'react';
import Meta from './Meta';
import Footer from './Footer';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import Logo from './logo.svg';

type LayoutProps = {
  children: ReactNode;
  location: Location;
};

const Layout = ({ children, location }: LayoutProps) => {
  const isHome = location.pathname === '/';

  const layoutStyle = css`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(28)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

    figure {
      margin-bottom: ${rhythm(isHome ? 2 : 1)};
      ${scale(1.0)}
    }

    .logo {
      width: ${isHome && '88px'};
      height: ${isHome && '88px'};
      margin-bottom: 0;
      display: block;
    }
  `;

  return (
    <div css={layoutStyle}>
      <Meta />
      <nav className="navbar is-transparent">
        <Link to="/" className="navbar-item" title="Luke Clark">
          <figure
            className="image"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <Logo className="logo" />
          </figure>
        </Link>
      </nav>

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
