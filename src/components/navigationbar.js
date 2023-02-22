import * as React from 'react'
import NavBarItem from './navbaritem'
import useDarkMode from 'use-dark-mode';
import Icon from './icon'
import Sun from '../icons/weather-1.svg'
import Moon from '../icons/weather-114.svg'
import { navigationBar, button, lightDarkModeIcon } from './navigationbar.module.css'

const NavigationBar = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Home'></NavBarItem>
      <NavBarItem link='/colorCodes' id='colorcodesLink' text='Color Codes'></NavBarItem>
      <NavBarItem link='/custom-top-sort' id='custom-top-sortLink' text='Custom top sort'></NavBarItem>
      <NavBarItem link='/draw-contest' id='drawcontestLink' text='Draw contest'></NavBarItem>
      <button type="button" className={`${button} unselectable`} onClick={darkMode.toggle}>
        <Icon icon={Sun} className={lightDarkModeIcon} size='24px' alt='Change to light mode'></Icon>
        <div className={lightDarkModeIcon} > / </div>
        <Icon icon={Moon} className={lightDarkModeIcon} size='18px' alt='Change to dark mode'></Icon>
      </button>
    </div>
  );
};

export default NavigationBar
