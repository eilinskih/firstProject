import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

function Header(props) {
    let logOut = () => {
        props.authLogOut()
    }
    return (
        <header className={h.header}>
            <div className={h.logo}><a href="./">EI..</a></div>

            <div className={h.authBlock}>
                {props.isAuth ?
                    <span>{props.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>}
                <div><span onClick={logOut}>LOGOUT</span></div>

            </div>
        </header>
    );
}

export default Header;