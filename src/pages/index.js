import * as React from 'react'
import NavigationBar from '../components/navigationbar'
import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
const IndexPage = () => {
    return (
      <div>
        <title>Arvid Sandin</title>
        <NavigationBar></NavigationBar>
        <Wrapper header='Arvid Sandin' content={[
          'On this website, you will find various hobby projects and experiments. The pages above are sorted by seriousness. Now, here comes some placeholder text:',
          <br />,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Tortor condimentum lacinia quis vel eros donec. Sapien pellentesque habitant morbi tristique senectus et. Ultrices dui sapien eget mi. Mauris sit amet massa vitae. Nulla aliquet enim tortor at auctor. Ultrices in iaculis nunc sed. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Varius sit amet mattis vulputate enim nulla aliquet. Aenean euismod elementum nisi quis eleifend.',
          <br />,
          'Tellus molestie nunc non blandit massa enim nec. Sit amet justo donec enim diam vulputate ut pharetra. Pretium aenean pharetra magna ac placerat vestibulum. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Eget velit aliquet sagittis id consectetur. Enim blandit volutpat maecenas volutpat blandit. Amet cursus sit amet dictum sit amet justo donec. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Vel elit scelerisque mauris pellentesque.',
          <br />,<br />,
          'Bibendum enim facilisis gravida neque convallis a cras semper auctor. In ornare quam viverra orci sagittis eu volutpat. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Dui ut ornare lectus sit amet est placerat in egestas. Morbi tristique senectus et netus et malesuada. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Ligula ullamcorper malesuada proin libero nunc consequat. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Turpis in eu mi bibendum neque egestas congue quisque egestas. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Ante metus dictum at tempor commodo ullamcorper. Dictum varius duis at consectetur. Malesuada proin libero nunc consequat. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Convallis tellus id interdum velit laoreet id donec. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Volutpat lacus laoreet non curabitur gravida. Ut tellus elementum sagittis vitae et leo duis ut diam. Ac turpis egestas sed tempus urna et pharetra pharetra. Sem nulla pharetra diam sit.'
          ]}>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
};

export default IndexPage
