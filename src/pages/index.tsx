import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import Card from '../components/Card';
import { rhythm } from '../utils/typography';
import {
  IndexQuery,
  IndexQuery_allPinboardBookmark_edges_node as pinNode,
  IndexQuery_allMarkdownRemark_edges_node as postNode
} from '../types/IndexQuery';

type IndexPageProps = {
  data: IndexQuery;
  location: {
    pathname: string;
  };
};

export default class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data, location } = this.props;
    let pins;
    let posts;
    pins = data.allPinboardBookmark ? data.allPinboardBookmark.edges : [];
    posts = !data.allMarkdownRemark ? [] : data.allMarkdownRemark.edges;

    posts = posts
      ? posts
          .reduce((accumulator: postNode[], item) => {
            item &&
              item.node &&
              item.node.fields &&
              item.node.frontmatter &&
              accumulator.push(item.node);
            return accumulator;
          }, [])
          .map(({ fields, frontmatter }) => ({
            title: frontmatter && frontmatter.title,
            description: frontmatter && frontmatter.description,
            link: fields && fields.slug,
            date: frontmatter && frontmatter.date,
            type: 'post'
          }))
      : [];

    pins = pins
      ? pins
          .reduce((accumulator: pinNode[], item) => {
            item && item.node && accumulator.push(item.node);
            return accumulator;
          }, [])
          .map(item => ({
            title: item.description,
            description: item.extended,
            link: item.href,
            date: item.time,
            type: 'pin'
          }))
      : [];

    const mappedData = [...pins, ...posts]
      .filter(
        item =>
          item.title && item.description && item.link && item.type && item.date
      )
      .sort((a, b) => b.date - a.date);

    return (
      <Layout location={location}>
        <section style={{ marginBottom: rhythm(2) }}>
          {mappedData &&
            mappedData.map(item => (
              <Card
                key={item.link || Math.random()}
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
