const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const { siteMetadata } = require('./gatsby-config');

exports.createRSSFeed = async ({ graphql, actions  }) => {
    const { createPage } = actions;

    const query = `
    query{
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
            sort: {frontmatter: {date: DESC}}
        ) {
            nodes {
                excerpt(pruneLength: 280)
                html
                frontmatter {
                    title
                    date
                    slug
                    description
                }
            }
        }
    }
  `;

    const result = await graphql(query);

    if (result.errors) {
        throw result.errors;
    }

    const feed = new RSS({
        title: siteMetadata.title,
        description: siteMetadata.description,
        feed_url: `${siteMetadata.siteUrl}/blog/rss.xml`,
        site_url: siteMetadata.siteUrl,
        // image_url: `${siteMetadata.siteUrl}/favicon.ico`,
        language: 'en',
    });

    result.data.allMarkdownRemark.nodes.forEach((node) => {
        feed.item({
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            url: `${siteMetadata.siteUrl}/blog${node.frontmatter.slug}`,
            date: node.frontmatter.date,
            guid: node.frontmatter.slug,
            custom_elements: [
                { 'content:encoded': node.html },
                { 'dc:creator': siteMetadata.author },
            ],
        });
    });

    const rss = feed.xml();

    const outputPath = path.join(__dirname, 'public', 'blog', 'rss.xml');

    fs.writeFileSync(outputPath, rss);

    console.log('RSS feed generated at', outputPath);
};