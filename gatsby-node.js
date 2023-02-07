const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Page templates
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
  const portfolioEntry = path.resolve(`./src/templates/portfolio-entry.jsx`)


  // Get all the Markdown nodes that posts that are on the blog folder
  const result2 = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
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

  const posts2 = result2.data.blogPosts.nodes
  if (posts2.length > 0) {
    posts2.forEach((post, index) => {

      createPage({
        path: "/blog" + post.frontmatter.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      })
    })
  }

  // Repeat for portfolio entries
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