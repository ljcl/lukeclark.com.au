// @flow

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Bio from '../components/Bio';
import { HTMLContent } from '../components/Content';
import { rhythm } from '../utils/typography';

type BlogPostType = {
  data: {
    markdownRemark: {
      html: string,
      frontmatter: {
        date: string,
        title: string,
        description: string
      },
      fields: {
        slug: string
      }
    },
    site: {
      siteMetadata: {
        title: string,
        description: string
      }
    }
  },
  location: {
    pathname: string
  }
};

const BlogPost = ({ data, location, pageContext }: BlogPostType) => {
  const {
    markdownRemark: {
      html: postHtml,
      frontmatter: {
        title: postTitle,
        description: postDescription,
        date: postDate
      },
      fields: { slug }
    },
    site: {
      siteMetadata: { title: siteTitle }
    }
  } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Meta title={postTitle} description={postDescription} slug={slug} />
      <article
        style={{ marginBottom: rhythm(2) }}
        itemScope="itemscope"
        itemType="http://schema.org/BlogPosting"
      >
        <h1>{postTitle}</h1>
        <div
          style={{
            color: '#707070',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginTop: rhythm(-1),
            marginBottom: rhythm(2)
          }}
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
    site {
      siteMetadata {
        title
        description
        author
      }
    }
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
