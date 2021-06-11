import './Navbar.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Navbar() {
    return (
                <ul className = "Navbar">
                    <Link>
                        <li className="nav-logo">Eclipse</li>
                    </Link>
                    <Link to="/user" >
                        <li className="nav-content">User</li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-content">About Us</li>
                    </Link>
                    <Link to="/" >
                        <li className="nav-content">Home</li>
                    </Link>
                </ul>
    )
}

export default Navbar;