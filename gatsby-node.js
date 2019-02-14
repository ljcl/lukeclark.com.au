const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/posts`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`
  });
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.tsx`);
    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  title
                  description
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges;
        posts.map((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;
          createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
              previous,
              next,
              slug: post.node.fields.slug
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
