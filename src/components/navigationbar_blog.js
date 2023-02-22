import * as React from 'react'
import NavBarItem from './navbaritem'
import useDarkMode from 'use-dark-mode';
import Icon from './icon'
import Sun from '../icons/weather-1.svg'
import Moon from '../icons/weather-114.svg'
import { navigationBar, button, lightDarkModeIcon } from './navigationbar.module.css'

const NavigationBarBlog = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Portfolio'></NavBarItem>
      <button type="button" className={`${button} unselectable`} onClick={darkMode.toggle}>
        <Icon icon={Sun} className={lightDarkModeIcon} size='24px' alt='Change to light mode'></Icon>
        <div className={lightDarkModeIcon} > / </div>
        <Icon icon={Moon} className={lightDarkModeIcon} size='18px' alt='Change to dark mode'></Icon>
      </button>
    </div>
  );
};

export default NavigationBarBlog
