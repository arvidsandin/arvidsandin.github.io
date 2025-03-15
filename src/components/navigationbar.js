import React, { useState, useEffect, useRef } from 'react'
import NavBarItem from './navbaritem'
import LightDarkModeToggler from './light_darkmodetoggler'
import Icon from './icon'
import hamburger from '../icons/menu-lined.svg'
import { navigationBar, hideOnMobile, hideOnDesktop, blogLink, expanded, expandableContent, expandableContentItem } from './navigationbar.module.css'

const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  //Hide menu when clicking outside of it
  const menuExpander = useRef(null);
  const menuContent = useRef(null);
  useEffect(() => {
    function handleClick(event) {
      const isClickInsideExcludedElement = menuContent.current.contains(event.target);
      if (menuExpander.current.contains(event.target)) {
        setIsExpanded(!isExpanded);
      }
      else if (!isClickInsideExcludedElement) {
        setIsExpanded(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener('click', handleClick);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isExpanded]);

  return (
    <div className={navigationBar}>
      <div className={`${hideOnDesktop}`}>
        <div ref={menuExpander} className={blogLink}><Icon className={``} icon={hamburger} size='36px' link='#'></Icon></div>
        <div className={`${expandableContent} ${isExpanded ? expanded : ''}`} ref={menuContent}>
          {isExpanded &&
            <NavBarItem className={expandableContentItem} link='/' id='homelink' text='Home'></NavBarItem>
          }{isExpanded &&
            <NavBarItem className={expandableContentItem} link='/blog' id='bloglink' text='Blog'></NavBarItem>
          }{isExpanded &&
            <NavBarItem className={expandableContentItem} link='/thesis' id='thesisLink' text='Illegal Cookie Banners'></NavBarItem>
          }{isExpanded &&
          <NavBarItem className={expandableContentItem} link='/custom-top-sort' id='custom-top-sortLink' text='Custom top sort'></NavBarItem>
          }{isExpanded &&
          <NavBarItem className={expandableContentItem} link='/colorCodes' id='colorcodesLink' text='Color Codes'></NavBarItem>
          }{isExpanded &&
          <NavBarItem className={expandableContentItem} link='/draw-contest' id='drawcontestLink' text='Draw contest'></NavBarItem>
          }
        </div>
      </div>
      <NavBarItem className={hideOnMobile} link='/' id='homelink' text='Home'></NavBarItem>
      <NavBarItem className={hideOnMobile} link='/blog' id='blogLink' text='Blog'></NavBarItem>
      <NavBarItem className={hideOnMobile} link='/thesis' id='thesisLink' text='Illegal Cookie Banners'></NavBarItem>
      <NavBarItem className={hideOnMobile} link='/custom-top-sort' id='custom-top-sortLink' text='Custom top sort'></NavBarItem>
      <NavBarItem className={hideOnMobile} link='/colorCodes' id='colorcodesLink' text='Color Codes'></NavBarItem>
      <NavBarItem className={hideOnMobile} link='/draw-contest' id='drawcontestLink' text='Draw contest'></NavBarItem>
      <LightDarkModeToggler></LightDarkModeToggler>
    </div>
  );
};

export default NavigationBar
