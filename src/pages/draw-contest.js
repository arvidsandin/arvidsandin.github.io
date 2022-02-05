import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin - Draw contest</title>
        <NavigationBar></NavigationBar>
        <Wrapper header={<a href=" https://drawcontest.herokuapp.com/" target='_blank' rel='noopener noreferrer'>Draw contest</a>} content={[
        <b>Draw contest</b>,
        " is a real-time draw-and-guess game where one player tries to draw an image of something, while the others try to guess what it is. If a player guesses the correct word, both that player and the drawer gets awarded with one point each. The game can be played ",
        <a href="https://drawcontest.herokuapp.com/">here</a>,
        " and the source code is available on ",
          <a href="https://github.com/arvidsandin/draw-contest" target='_blank' rel='noopener noreferrer'>Github</a>]}>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
