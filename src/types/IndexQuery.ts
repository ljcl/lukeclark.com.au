/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_site_siteMetadata {
  __typename: "siteMetadata_2";
  title: string | null;
  author: string | null;
  description: string | null;
}

export interface IndexQuery_site {
  __typename: "Site";
  siteMetadata: IndexQuery_site_siteMetadata | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node_fields {
  __typename: "fields_4";
  slug: string | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "frontmatter_4";
  title: string | null;
  description: string | null;
  date: any | null;
}

export interface IndexQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  fields: IndexQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: IndexQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface IndexQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  /**
   * The item at the end of the edge
   */
  node: IndexQuery_allMarkdownRemark_edges_node | null;
}

export interface IndexQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  /**
   * A list of edges.
   */
  edges: (IndexQuery_allMarkdownRemark_edges | null)[] | null;
}

export interface IndexQuery_allPinboardBookmark_edges_node {
  __typename: "PinboardBookmark";
  href: string | null;
  description: string | null;
  extended: string | null;
  time: any | null;
}

export interface IndexQuery_allPinboardBookmark_edges {
  __typename: "PinboardBookmarkEdge";
  /**
   * The item at the end of the edge
   */
  node: IndexQuery_allPinboardBookmark_edges_node | null;
}

export interface IndexQuery_allPinboardBookmark {
  __typename: "PinboardBookmarkConnection";
  /**
   * A list of edges.
   */
  edges: (IndexQuery_allPinboardBookmark_edges | null)[] | null;
}

export interface IndexQuery {
  site: IndexQuery_site | null;
  /**
   * Connection to all MarkdownRemark nodes
   */
  allMarkdownRemark: IndexQuery_allMarkdownRemark | null;
  /**
   * Connection to all PinboardBookmark nodes
   */
  allPinboardBookmark: IndexQuery_allPinboardBookmark | null;
}
