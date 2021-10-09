import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Navbar.scss';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
        <div className="nav-section">
            <nav className=" container nav-area">
                <input type="checkbox" id="box" />
                <label htmlFor="box" className="btn-area"><i className="fa fa-align-right"></i></label>
                <label>
                    <img src={logo} alt="" className="logo" />
                </label>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    {/* <li>
                    <Link className=" border border-2" to="/login">Login</Link>
                    </li> */}
                    <li>{
                        loggedInUser.email ? <span>{loggedInUser.email}</span> : <Link className=" border border-2" to="/login">Login</Link>}
                    </li>
                </ul>
            </nav></div>
    );
};

export default Navbar;