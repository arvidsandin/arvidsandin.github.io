import * as React from 'react'
import NavBarItem from './navbaritem'
import useDarkMode from 'use-dark-mode';
import { navigationBar, button } from './navigationbar.module.css'

const NavigationBarBlog = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={navigationBar}>
      <NavBarItem link='/' id='homelink' text='Portfolio'></NavBarItem>
      <button type="button" className={`${button} unselectable`} onClick={darkMode.toggle}>☀/☾</button>
    </div>
  );
};

export default NavigationBarBlog
