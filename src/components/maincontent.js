import * as React from 'react'
import { mainContent } from './maincontent.module.css'

const MainContent = ({children}) => {
    return (
        <div className={mainContent}>
            {children}
        </div>
    );
};
export default MainContent