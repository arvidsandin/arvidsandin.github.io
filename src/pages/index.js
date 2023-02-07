import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
import Logo from '../components/logo'
import Github from '../logos/githubLogo.svg'
import LinkedIn from '../logos/linkedinLogo.svg'
import Instagram from '../logos/instagramLogo.svg'

const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin</title>
        <NavigationBar></NavigationBar>
        <Wrapper header='Arvid Sandin' content={
          "Hi! I'm Arvid Sandin and I'm currently studying towards a Master of Science in engineering degree in IT at Uppsala University. As a person I am always open to learn and appreciate well executed technical solutions"+
          '<br /><br />'+
          'On this website, you will find some personal programming projects and experiments. The pages above are sorted by seriousness from left to right. If you want to get in touch, please use send a message in any of the services linked below.'+
          '<br /><br />'+
          "If you're wondering about this website in particular, it's build with Gatsby.js and React.js and hosted with GitHub Pages. More details and the source code for can be found  <a href='https://github.com/arvidsandin/arvidsandin.github.io'>in the repository</a>."+
          '<br />'
        }>
          <Logo logo={LinkedIn} link='https://www.linkedin.com/in/arvid-sandin/' alt='LinkedIn logo'></Logo>
          <Logo logo={Github} link='https://github.com/arvidsandin' alt='Github logo'></Logo>
          <Logo logo={Instagram} link='https://www.instagram.com/arvidsandin/' alt='Instagram logo'></Logo>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
