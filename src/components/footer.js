import * as React from 'react'
import { footer, footerText } from './footer.module.css'

const Footer = () => {
    return (
        <div className={footer}>
            <p className={footerText}> Made by: <a href="https://github.com/arvidsandin" target='_blank' rel='noopener noreferrer'>arvidsandin</a></p>
        </div>
    );
};
export default Footer