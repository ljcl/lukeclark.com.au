import React, { Fragment } from 'react';
import { HTMLContent } from '../../components/Content';

type PostPreviewProps = {
  widgetFor: (input: string) => string;
  entry: {
    getIn: (input: string[]) => string;
  };
};

const PostPreview = ({ entry, widgetFor }: PostPreviewProps) => (
  <Fragment>
    <h1>{entry.getIn(['data', 'title'])}</h1>
    <p>{entry.getIn(['data', 'description'])}</p>
    <HTMLContent content={widgetFor('body')} />
  </Fragment>
);

export default PostPreview;
