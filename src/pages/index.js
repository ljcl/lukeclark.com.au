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
    }>,
    allPinboardBookmark: $Shape<{
      edges: Array<any>
    }>
  }>,
  location: any
};

export default class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data, location } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: pins } = data.allPinboardBookmark;

    const mappedPosts = posts.map(({ node }) => ({
      key: node.fields.slug,
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      link: node.fields.slug,
      date: node.frontmatter.date,
      type: 'post'
    }));

    const mappedPins = pins.map(({ node }) => ({
      key: node.href,
      title: node.description,
      description: node.extended,
      link: node.href,
      date: node.time,
      type: 'pin'
    }));

    const mappedData = [...mappedPins, ...mappedPosts].sort(
      (a, b) => b.date - a.date
    );

    return (
      <Layout location={location}>
        <section style={{ marginBottom: rhythm(2) }}>
          {mappedData.map(item => (
            <Card
              key={item.key}
              title={item.title}
              description={item.description}
              link={item.link}
              type={item.type}
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
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "X")
          }
        }
      }
    }
    allPinboardBookmark(limit: 50) {
      edges {
        node {
          href
          description
          extended
          time(formatString: "X")
        }
      }
    }
  }
`;
