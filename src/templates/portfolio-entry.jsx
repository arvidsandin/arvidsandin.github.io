import * as React from "react"
import { graphql } from "gatsby"
import { Metadata } from "../components/metadata"
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'

const PortfolioEntryTemplate= ({ data /* this prop will be injected by the GraphQL query below.*/}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Wrapper header={frontmatter.headerLink ? <a href={frontmatter.headerLink} target='_blank' rel='noopener noreferrer'>{frontmatter.title}</a> : frontmatter.title} content={html}>
            <Footer></Footer>
            </Wrapper>
        </div>
    )
  }

export default PortfolioEntryTemplate

export const pageQuery = graphql`
  query PortfolioEntriesBySlug(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        slug
        headerLink
      }
    }
  }
`

export const Head = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Metadata title={frontmatter.title} pathname={frontmatter.slug} />
  )
}