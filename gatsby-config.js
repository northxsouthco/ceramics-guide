module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `3D Ceramics at MCC`,
    description: `Resources for MCC ceramics students`,
    author: `Stephy Miehle`,
  },
  plugins: [
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `3D Ceramics at MCC`,
        short_name: `MCC Ceramics`,
        start_url: `/`,
        background_color: `#3d3531`,
        theme_color: `#3d3531`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
