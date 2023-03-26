import * as React from 'react'
import Sidebar from './sidebar'
import MainContent from './maincontent'
import { wrapper, wrapperItem, mainContentDiv, createdDate } from './wrapper.module.css'

const Wrapper = ({header, date, content, children}) => {
    return (
        <div className={wrapper}>
            <Sidebar className={wrapperItem}>
            </Sidebar>
            <MainContent className={wrapperItem} id="mainContent">
                <h1>{header}</h1>
                {date && <p className={createdDate}> {date} </p>}
                {content && <div className={mainContentDiv} dangerouslySetInnerHTML={{ __html: content }}></div>}
                {children}
            </MainContent>
            <Sidebar className={wrapperItem}>
            </Sidebar>
        </div>
    );
};
export default Wrapper