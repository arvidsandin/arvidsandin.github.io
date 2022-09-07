import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin - Draw contest</title>
        <NavigationBar></NavigationBar>
        <Wrapper header={'Draw contest'} content={[
        <b>Draw contest</b>,
        " is a real-time draw-and-guess game where one player tries to draw an image of something, while the others try to guess what it is. If a player guesses the correct word, both that player and the drawer gets awarded with one point each. Due to the removal of Heroku free plans in November 28, 2022, there is no longer a live version of this project. However, the source code is still available on ",
          <a href="https://github.com/arvidsandin/draw-contest" target='_blank' rel='noopener noreferrer'>Github</a>,
          <br />, <br />,
          <StaticImage
            src='../images/draw-contest.png'
            alt='Screenshot of the website'
          >
          </StaticImage>,
        ]}>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
