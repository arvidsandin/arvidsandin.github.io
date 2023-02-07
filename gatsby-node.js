const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const portfolioEntry = path.resolve(`./src/templates/portfolio-entry.jsx`)


  const result = await graphql(`
    {
      portfolioEntries: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/\/portfolio\//"}}
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

  const posts = result.data.portfolioEntries.nodes
  if (posts.length > 0) {
    posts.forEach((post, index) => {

      createPage({
        path: post.frontmatter.slug,
        component: portfolioEntry,
        context: {
          id: post.id,
        },
      })
    })
  }
}