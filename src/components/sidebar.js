import * as React from 'react'
import { sidebar } from './sidebar.module.css'

const Sidebar = ({children}) => {
    return (
        <div className={sidebar}>
            {children}
        </div>
    );
};
export default Sidebar