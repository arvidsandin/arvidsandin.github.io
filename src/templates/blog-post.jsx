import * as React from "react"
import { graphql } from "gatsby"
import { Metadata } from "../components/metadata"
import NavigationBarBlogEntry from '../components/navigationbar_blogEntry'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
import EditNote from "../components/editnote"
import {sidebarSmall} from '../components/sidebar.module.css'

const BlogPostTemplate= ({ data /* this prop will be injected by the GraphQL query below.*/}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <NavigationBarBlogEntry></NavigationBarBlogEntry>
            <Wrapper leftSidebarClass={sidebarSmall} header={frontmatter.title} date={frontmatter.date} content={html}>
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
        description
        image
      }
    }
  }
`

export const Head = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Metadata
      title={frontmatter.title}
      pathname={'/blog' + frontmatter.slug}
      description={frontmatter.description}
      const image={'/blog' + frontmatter.image}
    />
  )
}