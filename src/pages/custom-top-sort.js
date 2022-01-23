import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin - Custom top sort</title>
        <NavigationBar></NavigationBar>
        <Wrapper header={<a href="https://github.com/arvidsandin/custom-top-sort-for-reddit">Color Codes</a>} content={[
        <b>Custom top sort for Reddit</b>,
        " is a browser extension get the top posts on reddit with other options than the defaul last hour, day, week, month and year. With the extension, it can be filtered and sorted from the last three days, 21 hours, 7 months or whatever you want!.",
        <br />, <br />, "The extension is available for ",
        <a href="https://addons.mozilla.org/addon/custom-top-sort-for-reddit/">Firefox</a>,
        ", ",
        <a href="https://chrome.google.com/webstore/detail/custom-top-sort-for-reddi/ppcdmieefbelokaacilcciackbocjghj">Google Chrome</a>,
        " and ",
        <a href="https://microsoftedge.microsoft.com/addons/detail/mkcacimdeiebnabgpikngeneojbeeafc">Microsoft Edge</a>,
        ". The source code is available on ",
        <a href="https://github.com/arvidsandin/custom-top-sort-for-reddit">Github</a>, "."
        ]}>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
