// @flow

import React from 'react';
import { rhythm } from '../utils/typography';

const Footer = () => (
  <footer
    style={{
      marginTop: rhythm(3)
    }}
  >
    <a
      href="https://instagram.com/ljcl"
      target="_blank"
      rel="noopener noreferrer"
    >
      gram
    </a>
    {', '}
    <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
      rss
    </a>
    {', '}
    <a href="https://noot.space" target="_blank" rel="noopener noreferrer">
      noot
    </a>
    {', '}
    <a
      href="https://mobile.twitter.com/lukejclark"
      target="_blank"
      rel="noopener noreferrer"
    >
      tweet
    </a>
  </footer>
);

export default Footer;
