// @flow

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import Card from '../components/Card';
import { rhythm } from '../utils/typography';

type IndexPageProps = {
  data: $Shape<{
    allMarkdownRemark: $Shape<{
      edges: Array<any>
    }>
  }>,
  location: any
};

export default class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data, location } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout location={location}>
        <section style={{ marginBottom: rhythm(2) }}>
          {posts.map(({ node }) => (
            <Card
              key={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              tags={node.frontmatter.tags}
              link={node.fields.slug}
            />
          ))}
        </section>
        <Bio />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
