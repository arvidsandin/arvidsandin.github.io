import * as React from "react"
import { graphql } from "gatsby"
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'

const BlogPostTemplate= ({ data /* this prop will be injected by the GraphQL query below.*/}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <title>Arvid Sandin - {frontmatter.title}</title>
            <NavigationBar></NavigationBar>
            <Wrapper header={frontmatter.title} content={html}>
            </Wrapper>
            <Footer></Footer>
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