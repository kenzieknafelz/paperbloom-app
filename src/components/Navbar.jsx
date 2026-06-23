import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <a href="../pages/Dashboard.jsx">Dashboard</a>
                </li>

                <li className="navItem">
                    <a href="../pages/Wishlist.jsx">Book Wishlist</a>
                </li>

                <li className="navItem">
                    <a href="../pages/ReadingSession.jsx">Reading Sessions</a>
                </li>

                <li className="navItem">
                    <a href="../pages/Journal.jsx">Journal</a>
                </li>

                <li className="navItem">
                    <a href="../pages/Reviews.jsx">Reviews</a>
                </li>
            </ul>
        </nav>
    )
}