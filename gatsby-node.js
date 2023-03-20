const path = require(`path`)
const { createRSSFeed } = require('./rss-feed');


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Page templates
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
  const portfolioEntry = path.resolve(`./src/templates/portfolio-entry.jsx`)

  await createPages("/blog", blogPost, "/\/blog\//", graphql, createPage)
  await createPages("", portfolioEntry, "/\/portfolio\//", graphql, createPage)
}

exports.onPostBuild = async ({ graphql, actions }) => {
  await createRSSFeed({ graphql, actions });
};

async function createPages(path, component, pathRegex, graphql, createPage){
  // Get all the Markdown nodes that are in the selected folder
  const result = await graphql(`
    {
      subfolderEntries: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "${pathRegex}"}}
      ){
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // Generate pages
  const posts = result.data.subfolderEntries.nodes
  if (posts.length > 0) {
    posts.forEach((post, index) => {

      createPage({
        path: path + post.frontmatter.slug,
        component: component,
        context: {
          id: post.id,
        },
      })
    })
  }
}