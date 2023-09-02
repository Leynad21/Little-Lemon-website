import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <div className='logoImage'>
                <img src="" alt="" />
            </div>
            <nav>
                <ul>
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