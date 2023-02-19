import * as React from 'react'
import { icon, iconClickable } from '../components/icon.module.css'


const Logo = (props) => {
    const size = props.size || 32
    if (props.link) {
        return (
            <a href={props.link} className={`${icon} ${iconClickable}`}>
                <img
                    src={props.logo}
                    style={{ height: size, width: size }}
                    alt={props.alt}
                />
            </a>
        );
    }
    else {
        return (
            <div className={icon}>
                <img
                    src={props.logo}
                    style={{ height: size, width: size }}
                    alt={props.alt}
                />
            </div>
        );
    }
};

export default Logo