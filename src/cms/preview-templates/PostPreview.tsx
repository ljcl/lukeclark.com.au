/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Content from '../../components/Content';
import { rhythm } from '../../utils/typography';

type PostPreviewProps = {
  widgetFor: (input: string) => string;
  entry: {
    getIn: (input: string[]) => string;
  };
};

const PostPreview = ({ entry, widgetFor }: PostPreviewProps): JSX.Element => (
  <div>
  <h1>{entry.getIn(['data', 'title'])}</h1>
        <div
          css={css`
            color: #707070;
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
            margin-top: ${rhythm(-1)};
            margin-bottom: ${rhythm(2)};
          `}
        >
          {entry.getIn(['data', 'date']).toString()}
        </div>
    <Content content={widgetFor('body')} />
  </div>
);

export default PostPreview;
