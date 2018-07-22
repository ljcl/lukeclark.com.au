import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../../components/Content';

const PostPreview = ({ entry, widgetFor }) => (
  <Fragment>
    <h1>{entry.getIn(['data', 'title'])}</h1>
    <p>{entry.getIn(['data', 'description'])}</p>
    <HTMLContent content={widgetFor('body')} />
  </Fragment>
);

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default PostPreview;
