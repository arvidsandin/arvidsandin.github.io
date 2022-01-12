import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin - Color Codes</title>
        <NavigationBar></NavigationBar>
        <Wrapper header={<a href="https://arvidsandin.github.io/color-codes/">Color Codes</a>} content={<p><b>Color Codes</b> is a color hex code browsing website. The website can be found <a href="https://arvidsandin.github.io/color-codes/">here</a> and the source code is available on <a href="https://github.com/arvidsandin/color-codes">Github</a></p>}>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
