import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className='nav__container'>
            <Link to="/">
                <div className='logoImage'>
                    <img src="little-lemon-logo.png" width="150px" height="80px" alt="little-lemon-logo" />
                </div>
            </Link>
            <nav>
                <ul className='nav__links'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order-online">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav