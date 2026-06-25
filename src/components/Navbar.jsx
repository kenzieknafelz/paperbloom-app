import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link to="/">Dashboard</Link>
                </li>

                <li className="navItem">
                    <Link to='/wishlist'>Wishlist</Link>
                </li>

                <li className="navItem">
                    <Link to='/sessions'>Reading Sessions</Link>
                </li>

                <li className="navItem">
                    <a href="../pages/Journal.jsx">Journal</a>
                </li>

                <li className="navItem">
                    <Link to="/reviews">Reviews</Link>
                </li>
            </ul>
        </nav>
    )
}