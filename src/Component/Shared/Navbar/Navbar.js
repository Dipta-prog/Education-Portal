import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="nav-section">
            <nav className=" container nav-area">
                <input type="checkbox" id="box" />
                <label htmlFor="box" className="btn-area"><i className="fa fa-align-right"></i></label>
                <label>
                    <img src={logo} alt="" className="logo" />
                </label>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Events</a></li>
                    <li ><Link className=" border border-2" to="/login">Login</Link></li>
                </ul>
            </nav></div>
    );
};

export default Navbar;