/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Locksley Kolakowski - Personal Website',
    author: 'Locksley Kolakowski',
    description: `This is where you can learn more about me and the coding I'm doing.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: 'gatsby-starter-default',
        // short_name: 'starter',
        // start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        // display: 'minimal-ui',
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `articles`,
      },
    },
    // 'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
