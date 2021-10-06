/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { Query } from '../graphqlTypes';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

type MetaProps = {
  description?: string | null;
  image?: string | null;
  slug?: string | null;
  title?: string | null;
};

function Meta({
  image,
  title,
  description,
  slug = '',
}: MetaProps): JSX.Element {
  return (
    <StaticQuery
      query={query}
      render={(data: Query): JSX.Element => {
        const siteMetadata = data.site?.siteMetadata;
        const metaDescription =
          description || siteMetadata?.description || undefined;
        const metaImage = image
          ? `${siteMetadata?.siteUrl}/${image}`
          : undefined;
        const url = `${siteMetadata?.siteUrl}${slug}`;
        const defaultTitle = siteMetadata?.title || undefined;
        const twitterUser = siteMetadata?.social?.twitter || undefined;
        return (
          <Helmet
            defaultTitle={defaultTitle}
            titleTemplate={`%s - ${defaultTitle}`}
          >
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={twitterUser} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="twitter:image" content={metaImage} />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap"
              rel="stylesheet"
            />
          </Helmet>
        );
      }}
    />
  );
}

export default Meta;
