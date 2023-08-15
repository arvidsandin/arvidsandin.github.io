import * as React from 'react'
import NavBarItem from './navbaritem'
import LightDarkModeToggler from './light_darkmodetoggler'
import { navigationBar } from './navigationbar.module.css'

const NavigationBarBlog = () => {
  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Home'></NavBarItem>
      <LightDarkModeToggler></LightDarkModeToggler>
    </div>
  );
};

export default NavigationBarBlog
