import * as React from 'react'
import Sidebar from './sidebar'
import MainContent from './maincontent'
import { wrapper, mainContentDiv, createdDate } from './wrapper.module.css'

const Wrapper = ({header, date, content, leftSidebarClass, rightSidebarClass, children}) => {
    console.log("leftSidebarClass: " + leftSidebarClass);
    return (
        <div className={wrapper}>
            <Sidebar classes={leftSidebarClass}>
            </Sidebar>
            <MainContent id="mainContent">
                <h1>{header}</h1>
                {date && <p className={createdDate}> {date} </p>}
                {content && <div className={mainContentDiv} dangerouslySetInnerHTML={{ __html: content }}></div>}
                {children}
            </MainContent>
            <Sidebar classes={rightSidebarClass}>
            </Sidebar>
        </div>
    );
};
export default Wrapper