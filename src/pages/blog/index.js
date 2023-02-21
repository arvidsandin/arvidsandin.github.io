import React from "react"
import { graphql } from "gatsby"
import MainContent from "../../components/maincontent"
import Wrapper from "../../components/wrapper"
import NavigationBarBlog from "../../components/navigationbar_blog"


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge =>
      <MainContent key={edge.node.id} >
        <a href={`/blog${edge.node.frontmatter.slug}`}>
          <h2>{edge.node.frontmatter.title}</h2>
        </a>
          <p>{edge.node.excerpt}</p>
        <p>{edge.node.frontmatter.date}</p>
      </MainContent>
    )

  return (
  <div>
    <title>Arvid Sandin - Blog</title>
    <NavigationBarBlog></NavigationBarBlog>
    <Wrapper header='Blog'>
      {Posts}
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