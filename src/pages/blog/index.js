import React from "react"
import { graphql } from "gatsby"
import { Metadata } from "../../components/metadata"
import NavigationBarBlog from "../../components/navigationbar_blog"
import Wrapper from "../../components/wrapper"
import Footer from "../../components/footer"
import BlogEntryCard from "../../components/blogentrycard"
import Icon from "../../components/icon"
import rssLogo from "../../logos/rss.svg"


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
    <NavigationBarBlog></NavigationBarBlog>
    <Wrapper header='Blog'>
      {Posts}
      <Footer><Icon icon={rssLogo} link='/blog/rss.xml'></Icon></Footer>
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
          excerpt(pruneLength: 350)
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

export const Head = () => (
  <Metadata title="Blog" />
)