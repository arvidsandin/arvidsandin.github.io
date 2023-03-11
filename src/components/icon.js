import * as React from 'react'
import { icon, iconClickable } from '../components/icon.module.css'

const defaultSize = 32;

const Logo = (props) => {
    const height = props.height || props.size || defaultSize;
    const width = props.width || props.size || defaultSize;
    if (props.link) {
        return (
            <a href={props.link} className={`${icon} ${iconClickable} ${props.className}`}>
                <img
                    src={props.icon}
                    style={{ height: height, width: width }}
                    alt={props.alt}
                />
            </a>
        );
    }
    else {
        return (
            <div className={`${icon} ${props.className}`}>
                <img
                    src={props.icon}
                    style={{ height: height, width: width }}
                    alt={props.alt}
                />
            </div>
        );
    }
};

export default Logo