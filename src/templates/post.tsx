/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { HTMLContent } from '../components/Content';
import { rhythm } from '../utils/typography';

import { Query } from '../graphqlTypes';

type BlogPostType = {
  data: Query;
  location: Location;
};

function formatPost(data: Query) {
  if (!data.markdownRemark) return null;
  const { html, frontmatter, fields } = data.markdownRemark;

  const title = frontmatter?.title;
  const date = frontmatter?.date as string;

  const metaProps = {
    title,
    description: frontmatter?.description,
    slug: fields?.slug,
  };

  return { metaProps, html, title, date };
}

const BlogPost = ({ data, location }: BlogPostType): JSX.Element | null => {
  const postData = formatPost(data);

  if (!postData) return null;

  const { metaProps, html, title, date } = postData;

  if (!metaProps || !html || !title || !date) return null;

  return (
    <Layout location={location}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Meta {...metaProps} />
      <article
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <h1>{title}</h1>
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
          {date}
        </div>
        <HTMLContent content={html} />
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
      fields {
        slug
      }
    }
  }
`;
