import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authLogOut, InitialStateType } from '../../Redux/authReducer';
import { StateType } from '../../Redux/redux-store';
import h from './Header.module.css';

const Header: React.FC = () => {

    const dispatch = useDispatch();
    const auth = useSelector<StateType, InitialStateType>((state) => {
        return state.auth
    });

    let logOut = () => {
        dispatch(authLogOut())
    };

    return (
        <header className={h.header}>
            <div className={h.logo}><a href="./">EI..</a></div>
            <div className={h.authBlock}>
                {auth.isAuth ?
                    <span>{auth.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>}
                <div><span onClick={logOut}>LOGOUT</span></div>
            </div>
        </header>
    );
};

export default Header;