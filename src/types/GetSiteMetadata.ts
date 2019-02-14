/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSiteMetadata
// ====================================================

export interface GetSiteMetadata_site_siteMetadata_social {
  __typename: "social_2";
  twitter: string | null;
}

export interface GetSiteMetadata_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  author: string | null;
  description: string | null;
  siteUrl: string | null;
  social: GetSiteMetadata_site_siteMetadata_social | null;
}

export interface GetSiteMetadata_site {
  __typename: "Site";
  siteMetadata: GetSiteMetadata_site_siteMetadata | null;
}

export interface GetSiteMetadata {
  site: GetSiteMetadata_site | null;
}
