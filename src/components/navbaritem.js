import * as React from 'react'
import { navbarItem, link} from './navbaritem.module.css'

const NavBarItem = (props) => {
    return (
        <div className={`${navbarItem} ${props.className} darkenOnHover`}>
            <a className ={link} href={props.link} id={props.id}>{props.text}</a>
        </div>
    );
};

export default NavBarItem