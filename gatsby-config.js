require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Luke Clark',
    author: 'Luke Clark',
    description: 'Sydney based Software Engineer',
    siteUrl: 'https://lukeclark.com.au',
    social: {
      twitter: '@lukejclark',
      instagram: '@ljcl',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              wrapperStyle: 'margin-bottom:10px; background: red;',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: `language-`,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-17879409-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luke Clark`,
        short_name: `Luke Clark`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#E42341`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-pinboard',
      options: {
        authToken: process.env.PINBOARD_AUTH,
        tags: 'site-feed',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./src/graphqlTypes.ts`,
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
