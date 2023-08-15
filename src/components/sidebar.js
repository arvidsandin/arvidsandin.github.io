import * as React from 'react'
import { sidebar } from './sidebar.module.css'

const Sidebar = ({classes, children}) => {
    return (
        <div className={`${sidebar} ${classes}`}>
            {children}
        </div>
    );
};
export default Sidebar