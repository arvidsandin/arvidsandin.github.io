module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Arvid Sandin",
  },
  plugins: [
    'gatsby-plugin-use-dark-mode',
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'arvid-sandin-dev',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ]
};
