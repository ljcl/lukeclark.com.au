/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Bio from '../components/Bio';
import { HTMLContent } from '../components/Content';
import { rhythm } from '../utils/typography';

type BlogPostType = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
        description: string;
      };
      fields: {
        slug: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
  location: Location;
};

const BlogPost = ({ data, location }: BlogPostType) => {
  const {
    markdownRemark: {
      html: postHtml,
      frontmatter: {
        title: postTitle,
        description: postDescription,
        date: postDate
      },
      fields: { slug }
    }
  } = data;

  return (
    <Layout location={location}>
      <Meta title={postTitle} description={postDescription} slug={slug} />
      <article
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <h1>{postTitle}</h1>
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
          {postDate}
        </div>
        <HTMLContent content={postHtml} />
      </article>
      <Bio />
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
