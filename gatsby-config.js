module.exports = {
  siteMetadata: {
    siteUrl: "https://arvid.sandin.dev",
    title: "Arvid Sandin",
    description: "Arvid Sandin's personal website",
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            // options: {
            //   maxWidth: 800,
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-content`,
        path: `${__dirname}/src/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-content`,
        path: `${__dirname}/src/content/portfolio/`,
      },
    },
  ]
};
