import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1 className="header__text">Boilerplate</h1>

        <nav className="nav">
            <NavLink to="/" exact className="nav__link">Home</NavLink>
            <NavLink to="/contact" className="nav__link">Contact</NavLink>
        </nav>
    </header>
);

export default Header;
