import * as React from 'react'
import Sidebar from './sidebar'
import MainContent from './maincontent'
import { wrapper, wrapperItem } from './wrapper.module.css'

const Wrapper = ({header, content}) => {
    return (
        <div className={wrapper}>
            <Sidebar className={wrapperItem}>
            </Sidebar>
            <MainContent className={wrapperItem} id="mainContent">
                <h2>{header}</h2>
                <p>{content}</p>
            </MainContent>
            <Sidebar className={wrapperItem}>
            </Sidebar>
        </div>
    );
};
export default Wrapper