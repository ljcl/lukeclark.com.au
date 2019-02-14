/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostBySlug
// ====================================================

export interface BlogPostBySlug_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface BlogPostBySlug_site {
  __typename: "Site";
  siteMetadata: BlogPostBySlug_site_siteMetadata | null;
}

export interface BlogPostBySlug_markdownRemark_frontmatter {
  __typename: "frontmatter_4";
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface BlogPostBySlug_markdownRemark_fields {
  __typename: "fields_4";
  slug: string | null;
}

export interface BlogPostBySlug_markdownRemark {
  __typename: "MarkdownRemark";
  html: string | null;
  frontmatter: BlogPostBySlug_markdownRemark_frontmatter | null;
  fields: BlogPostBySlug_markdownRemark_fields | null;
}

export interface BlogPostBySlug {
  site: BlogPostBySlug_site | null;
  markdownRemark: BlogPostBySlug_markdownRemark | null;
}

export interface BlogPostBySlugVariables {
  slug: string;
}
