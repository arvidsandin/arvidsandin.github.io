import * as React from 'react'
import { logo } from '../components/logo.module.css'


const Logo = (props) => {
    const size = props.size || 32
    return (
        <a href={props.link} className={logo}>
            <img
                src={props.logo}
                style={{ height: size, width: size }}
                alt={props.alt}
            />
        </a>
    );
};

export default Logo