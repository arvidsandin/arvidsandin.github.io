import * as React from "react"
import { graphql } from "gatsby"
import NavigationBarBlogEntry from '../components/navigationbar_blogEntry'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
import EditNote from "../components/editnote"

const BlogPostTemplate= ({ data /* this prop will be injected by the GraphQL query below.*/}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <title>Arvid Sandin - {frontmatter.title}</title>
            <NavigationBarBlogEntry></NavigationBarBlogEntry>
            <Wrapper header={frontmatter.title} date={frontmatter.date} content={html}>
            <EditNote edited={frontmatter.lastChanged} created={frontmatter.date}></EditNote>
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
        lastChanged(formatString: "MMMM DD, YYYY")
      }
    }
  }
`