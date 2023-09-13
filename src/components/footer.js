import * as React from 'react'
import { footer, footerText } from './footer.module.css'

const Footer = (props) => {
    return (
        <div className={footer}>
            {props.children}
            <p className={footerText}> Made by: <a href="https://github.com/arvidsandin" target='_blank' rel='noopener noreferrer'>arvidsandin</a></p>
        </div>
    );
};
export default Footer