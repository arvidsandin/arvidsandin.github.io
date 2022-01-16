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
  ],
};
