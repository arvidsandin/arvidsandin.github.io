import * as React from 'react'
import Icon from './icon'
import LightDarkModeToggler from './light_darkmodetoggler'
import leftArrow from '../icons/arrow-left-lined.svg'
import { navigationBar, navigationBarBlog, blogLink } from './navigationbar.module.css'

const NavigationBarBlogEntry = () => {
  return (
    <div className={`${navigationBar} ${navigationBarBlog}`}>
      <Icon className={blogLink} icon={leftArrow} size='36px' link='/blog'>Back to blog</Icon>
      <LightDarkModeToggler></LightDarkModeToggler>
    </div>
  );
};

export default NavigationBarBlogEntry
