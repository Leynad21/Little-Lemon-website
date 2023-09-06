import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`nav__container ${isOpen ? 'open' : ''}`}>
            <Link to="/">
                <div className='logoImage'>
                    <img src="little-lemon-logo.png" width="150px" height="80px" alt="little-lemon-logo" />
                </div>
            </Link>
            <nav>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav__links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" onClick={toggleMenu}>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations" onClick={toggleMenu}>Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order-online" onClick={toggleMenu}>Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" onClick={toggleMenu}>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
