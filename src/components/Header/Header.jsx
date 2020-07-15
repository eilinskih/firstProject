import React from 'react';
import h from './Header.module.css';

function Header() {
    return  (
    <header className={h.header}>
    <div className={h.logo}><a href="./">EI..</a></div>
          </header>
    );
}

export default Header;