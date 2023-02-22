import * as React from 'react'
import useDarkMode from 'use-dark-mode';
import Icon from './icon'
import leftArrow from '../icons/arrow-left-lined.svg'
import { navigationBar, navigationBarBlog, button, blogLink } from './navigationbar.module.css'

const NavigationBarBlogEntry = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={`${navigationBar} ${navigationBarBlog}`}>
        <Icon className={blogLink} icon={leftArrow} size='36px' link='/blog'></Icon>
      <button type="button" className={`${button} unselectable`} onClick={darkMode.toggle}>☀/☾</button>
    </div>
  );
};

export default NavigationBarBlogEntry
