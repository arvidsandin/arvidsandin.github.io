module.exports = {
  siteMetadata: {
    siteUrl: "https://arvid.sandin.dev",
    title: "Arvid Sandin",
    description: "Arvid Sandin's personal website",
    author: "Arvid Sandin",
    // TODO: create and use og-image
    image: "/icons/icon-512x512.png",
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
        "excerpt_separator": "<!-- end excerp -->",
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              prompt: {global: true},
            }
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/icons/favicon.png',
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
