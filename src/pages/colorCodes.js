import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin - Color Codes</title>
        <NavigationBar></NavigationBar>
        <Wrapper header={<a href="https://color-codes.onrender.com/">Color Codes</a>} content={[
        <b>Color Codes</b>,
        " is a color hex code browsing website. The website can be found ",
        <a href="https://color-codes.onrender.com/">here</a>," and the source code is available on ",
        <a href="https://github.com/arvidsandin/color-codes">Github</a>,
        <br />, <br />,
        <StaticImage
          src='../images/color-codes.png'
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
