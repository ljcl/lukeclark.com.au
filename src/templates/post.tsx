/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { HTMLContent } from '../components/Content';
import { rhythm } from '../utils/typography';

import { BlogPostBySlugQuery as Data } from '../graphqlTypes';

type BlogPostType = {
  data: Data;
  location: Location;
};

function formatPost(data: Data) {
  if (!data.markdownRemark) return null;
  const { html, frontmatter, fields } = data.markdownRemark;

  const title = frontmatter?.title;
  const date = frontmatter?.date;

  const metaProps = {
    title: title || undefined,
    description: frontmatter?.description || undefined,
    slug: fields?.slug || undefined,
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
