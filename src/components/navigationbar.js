import * as React from 'react'
import NavBarItem from './navbaritem'
import useDarkMode from 'use-dark-mode';
import { navigationBar, button } from './navigationbar.module.css'

const NavigationBar = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Home'></NavBarItem>
      <NavBarItem link='/colorCodes' id='colorcodesLink' text='Color Codes'></NavBarItem>
      <NavBarItem link='/draw-contest' id='drawcontestLink' text='Draw contest'></NavBarItem>
      <NavBarItem link='/button' id='buttonLink' text='Button'></NavBarItem>
      <button type="button" className={`${button} unselectable`} onClick={darkMode.toggle}>
        ☀/☾
      </button>
    </div>
  );
};

export default NavigationBar
