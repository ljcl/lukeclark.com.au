/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import Card from '../components/Card';
import { rhythm } from '../utils/typography';
import { IndexQueryQuery as Data } from '../graphqlTypes';

type IndexPageProps = {
  data: Data;
  location: Location;
};

type FormattedContent = {
  title: string;
  description?: string;
  link: string;
  date: number;
  type: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formatPosts(data: Data) {
  const posts = data.allMarkdownRemark.edges
    .map(({ node: { fields, frontmatter } }) => ({
      title: frontmatter && frontmatter.title,
      description: frontmatter && frontmatter.description,
      link: fields && fields.slug,
      date: frontmatter && frontmatter.date,
      type: 'post',
    }))
    .filter(({ title, link, date, type }) => title && link && date && type);
  return posts;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formatPins(data: Data) {
  const pins = data.allPinboardBookmark.edges
    .map(({ node }) => ({
      title: node.description,
      description: node.extended,
      link: node.href,
      date: node.time,
      type: 'pin',
    }))
    .filter(({ title, link, date, type }) => title && link && date && type);
  return pins;
}

export default function IndexPage(props: IndexPageProps): JSX.Element {
  const { data, location } = props;

  const content = [...formatPosts(data), ...formatPins(data)].sort(
    (a, b) => b.date - a.date
  );

  return (
    <Layout location={location}>
      <section
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
      >
        {content &&
          content.map(
            item =>
              item.link && (
                <Card
                  key={item.link}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  type={item.type}
                />
              )
          )}
      </section>
      <Bio />
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
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
