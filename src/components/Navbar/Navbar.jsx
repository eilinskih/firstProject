import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={n.nav}>
      <div className={n.nav_item}><NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink></div>
      <div className={n.nav_item}><NavLink to="/profile" activeClassName={n.active}>Profile</NavLink></div>
      <div className={n.nav_item}><NavLink to="/users" activeClassName={n.active}>Users</NavLink></div>
      <div className={n.nav_item}><NavLink to="/news" activeClassName={n.active}>News</NavLink></div>
      <div className={n.nav_item}><NavLink to="/music" activeClassName={n.active}>Music</NavLink></div>
      <div className={n.nav_item}><NavLink to="/settings" activeClassName={n.active}>Settings</NavLink></div>
    </nav>
  );
}

export default Navbar;