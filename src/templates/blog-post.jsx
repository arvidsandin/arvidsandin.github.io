import * as React from "react"
import { graphql } from "gatsby"
import NavigationBarBlog from '../components/navigationbar_blog'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'

const BlogPostTemplate= ({ data /* this prop will be injected by the GraphQL query below.*/}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <title>Arvid Sandin - {frontmatter.title}</title>
            <NavigationBarBlog></NavigationBarBlog>
            <Wrapper header={<div>{frontmatter.title}</div>} content={html}>
            <Footer></Footer>
            </Wrapper>
        </div>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
      }
    }
  }
`