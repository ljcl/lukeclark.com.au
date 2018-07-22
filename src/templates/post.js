// @flow

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Bio from '../components/Bio';
import Card from '../components/Card';
import { HTMLContent } from '../components/Content';
import { rhythm } from '../utils/typography';

type BlogPostType = {
  data: {
    markdownRemark: {
      html: string,
      id: string,
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
  location: any,
  pageContext: any
};

const BlogPost = ({ data, location, pageContext }: BlogPostType) => {
  const { next, previous } = pageContext;
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0
        }}
      >
        {previous && (
          <Card
            link={previous.fields.slug}
            title={previous.frontmatter.title}
            description={previous.frontmatter.description}
            rel="prev"
          />
        )}
        {next && (
          <Card
            link={next.fields.slug}
            title={next.frontmatter.title}
            description={next.frontmatter.description}
            rel="next"
          />
        )}
      </div>
      <Bio />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
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
