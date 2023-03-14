import React, {useState, useRef, useEffect} from 'react'
import useDarkMode from 'use-dark-mode';
import Icon from './icon'
import Sun from '../icons/weather-1.svg'
import Moon from '../icons/weather-114.svg'
import { button, lightDarkModeIcon, menu, expandableContent, expanded, expandableContentItem } from './light_darkmodetoggler.module.css'

// To prevent build error
const isBrowser = () => typeof window !== "undefined"

const LightDarkModeToggler = (props) => {    
    const darkMode = useDarkMode(isSystemSetToDarkMode());
    const [isExpanded, setIsExpanded] = useState(false);
    const [followSystem, setFollowSystem] = useState(undefined);

    function startFollowingSystem(){
        if(isBrowser()){localStorage.setItem('followSystemDarkMode', 'true')};
        if(isBrowser()){setFollowSystem(localStorage.getItem('followSystemDarkMode'))};
        isSystemSetToDarkMode() ? darkMode.enable() : darkMode.disable();
    }

    function stopFollowingSystem(isNewValueDarkMode){
        if(isBrowser()){localStorage.setItem('followSystemDarkMode', 'false')};
        if(isBrowser()){setFollowSystem(localStorage.getItem('followSystemDarkMode'))};
        isNewValueDarkMode ? darkMode.enable() : darkMode.disable();
    }

    function isSystemSetToDarkMode() {
        return isBrowser() && window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // look for changes in the system dark mode
    if(isBrowser()){
        window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (followSystem === 'true') {
                event.matches ? darkMode.enable() : darkMode.disable();
            }
        });
    }

    //Hide menu when clicking outside of it
    const menuExpander = useRef(null);
    const menuContent = useRef(null);
    useEffect(() => {
        setFollowSystem(localStorage.getItem('followSystemDarkMode'))
        if (followSystem === null || followSystem === undefined) {
            if(isBrowser()){localStorage.setItem('followSystemDarkMode', 'true')};
            if(isBrowser()){setFollowSystem(localStorage.getItem('followSystemDarkMode'))};
        }
        else if (followSystem === 'true') {
            isSystemSetToDarkMode() ? darkMode.enable() : darkMode.disable();
        }

        function handleClickOutside(event) {
            const isClickInsideExcludedElement = menuExpander.current.contains(event.target) || menuContent.current.contains(event.target);
            if (!isClickInsideExcludedElement) {
                setIsExpanded(false);
            }
        }

        // Add event listener when component mounts
        document.addEventListener('click', handleClickOutside);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [followSystem, darkMode]);

    return (
        <div className={menu}>
            <button ref={menuExpander} type="button" className={`${button} unselectable`} onClick={() => {setIsExpanded(!isExpanded)}}>
                <Icon icon={Sun} className={lightDarkModeIcon} size='24px' alt='Change to light mode'></Icon>
                <div className={lightDarkModeIcon} > / </div>
                <Icon icon={Moon} className={lightDarkModeIcon} size='18px' alt='Change to dark mode'></Icon>
            </button>

            <div ref={menuContent} className={`${expandableContent} ${isExpanded ? expanded : ''}`}>
                {isExpanded && 
                    <button type="button" className={`${button} ${expandableContentItem} darkenOnHover unselectable`} onClick={startFollowingSystem}>
                        <div > Follow system </div>
                    </button>
                }
                {isExpanded && 
                    <button type="button" className={`${button} ${expandableContentItem} darkenOnHover unselectable`} onClick={() => {stopFollowingSystem(false)}}>
                        <Icon icon={Sun} size='24px' alt='Change to light mode'></Icon>
                    </button>
                }
                {isExpanded && 
                    <button type="button" className={`${button} ${expandableContentItem} darkenOnHover unselectable`} onClick={() => {stopFollowingSystem(true)}}>
                        <Icon icon={Moon} size='18px' alt='Change to dark mode'></Icon>
                    </button>
                }
            </div>
        </div>
    );

};

export default LightDarkModeToggler

