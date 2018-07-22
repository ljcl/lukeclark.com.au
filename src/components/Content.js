// @flow

import React from 'react';

export type ContentProps = {
  content: string,
  className?: string
};

export const HTMLContent = ({ content, className }: ContentProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }: ContentProps) => (
  <div className={className}>{content}</div>
);

export default Content;
