import * as React from 'react'
import NavBarItem from './navbaritem'
import LightDarkModeToggler from './light_darkmodetoggler'
import { navigationBar } from './navigationbar.module.css'

const NavigationBar = () => {
  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Home'></NavBarItem>
      <NavBarItem link='/colorCodes' id='colorcodesLink' text='Color Codes'></NavBarItem>
      <NavBarItem link='/custom-top-sort' id='custom-top-sortLink' text='Custom top sort'></NavBarItem>
      <NavBarItem link='/draw-contest' id='drawcontestLink' text='Draw contest'></NavBarItem>
      <LightDarkModeToggler></LightDarkModeToggler>
    </div>
  );
};

export default NavigationBar
