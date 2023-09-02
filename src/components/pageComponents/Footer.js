import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='footerImage'>
                <img src="footer-logo.jpg" alt="footer-logo" />
            </div>
            <div className="footer__content">
                <div>
                    <h2>Navigation</h2>
                    <nav className="footer__items">
                        <ul className='footer__links'>
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
                </div>
                <div className="footer__items">
                    <h2>Contact</h2>
                    <p>Street: 326 Blue Space Lane</p>
                    <p>City: Chicago</p>
                    <p>410-327-9214</p>
                    <p>Zip code: 18231</p>
                </div>
                <div className="footer__items">
                    <h2>Join us!</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer