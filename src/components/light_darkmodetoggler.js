import React, {useState, useRef, useEffect} from 'react'
import useDarkMode from 'use-dark-mode';
import Icon from './icon'
import Sun from '../icons/weather-1.svg'
import Moon from '../icons/weather-114.svg'
import { button, lightDarkModeIcon, menu, expandableContent, expanded, expandableContentItem } from './light_darkmodetoggler.module.css'

const LightDarkModeToggler = (props) => {    
    const darkMode = useDarkMode(isSystemSetToDarkMode());
    const [isExpanded, setIsExpanded] = useState(false);
    const [followSystem, setFollowSystem] = useState(localStorage.getItem('followSystemDarkMode'));
    // check if the user has set a preference for following the system dark mode
    if (followSystem === null) {
        localStorage.setItem('followSystemDarkMode', 'true');
        setFollowSystem(localStorage.getItem('followSystemDarkMode'));
    }

    function startFollowingSystem(){
        localStorage.setItem('followSystemDarkMode', 'true');
        setFollowSystem(localStorage.getItem('followSystemDarkMode'));
        isSystemSetToDarkMode() ? darkMode.enable() : darkMode.disable();
    }

    function stopFollowingSystem(isNewValueDarkMode){
        localStorage.setItem('followSystemDarkMode', 'false');
        setFollowSystem(localStorage.getItem('followSystemDarkMode'));
        isNewValueDarkMode ? darkMode.enable() : darkMode.disable();
    }

    function isSystemSetToDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // look for changes in the system dark mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (followSystem === 'true') {
            event.matches ? darkMode.enable() : darkMode.disable();
        }
    });

    //Hide menu when clicking outside of it
    const menuExpander = useRef(null);
    const menuContent = useRef(null);
    useEffect(() => {
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
    }, []);

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

