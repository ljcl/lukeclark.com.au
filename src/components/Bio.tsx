import React from 'react';
import { rhythm } from '../utils/typography';
import profileImg from './profile-img.jpg';

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2)
    }}
  >
    <img
      src={profileImg}
      alt={`Luke Clark`}
      style={{
        marginRight: rhythm(1 / 3),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: '100%'
      }}
    />
    <p style={{ maxWidth: 320, fontWeight: 'bold', marginBottom: 0 }}>
      Personal site of{' '}
      <a href="https://mobile.twitter.com/lukejclark">Luke Clark</a>. Links,
      snippets and sometimes words.
    </p>
  </div>
);

export default Bio;
