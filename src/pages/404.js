import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'

const NotFoundPage = () => {
  return (
    <div>
      <title>Page not found</title>
      <NavigationBar></NavigationBar>
      <Wrapper header='404 - page not found'>
      </Wrapper>
      <Footer></Footer>
    </div>
  );
};

export default NotFoundPage
