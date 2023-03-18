import React from "react"
import { graphql } from "gatsby"
import NavigationBarBlog from "../../components/navigationbar_blog"
import Wrapper from "../../components/wrapper"
import Footer from "../../components/footer"
import BlogEntryCard from "../../components/blogentrycard"


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge =>
      <BlogEntryCard key={edge.node.id} data={edge.node}></BlogEntryCard>
    )

  return (
  <div>
    <title>Arvid Sandin - Blog</title>
    <NavigationBarBlog></NavigationBarBlog>
    <Wrapper header='Blog'>
      {Posts}
      <Footer></Footer>
    </Wrapper>
  </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC }},
      filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`