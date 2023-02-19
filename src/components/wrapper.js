import * as React from 'react'
import Sidebar from './sidebar'
import MainContent from './maincontent'
import { wrapper, wrapperItem, mainContentDiv } from './wrapper.module.css'

const Wrapper = ({header, content, children}) => {
    return (
        <div className={wrapper}>
            <Sidebar className={wrapperItem}>
            </Sidebar>
            <MainContent className={wrapperItem} id="mainContent">
                <h1>{header}</h1>
                <div className={mainContentDiv} dangerouslySetInnerHTML={{ __html: content }}></div>
                {children}
            </MainContent>
            <Sidebar className={wrapperItem}>
            </Sidebar>
        </div>
    );
};
export default Wrapper