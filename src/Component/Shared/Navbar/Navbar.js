import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserLoggedinContext } from "../../../App";
import logo from "../../../Media/img/Shared-Images/education-portal-logo.jpg";
import "./Navbar.scss";

const Navbar = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  return (
    <div className="nav-section">
      <nav className=" container nav-area">
        <input type="checkbox" id="box" />
        <label htmlFor="box" className="btn-area">
          <i className="fa fa-align-right"></i>
        </label>
        <label>
          <Link to="/">
            {" "}
            <img src={logo} alt="" className="logo" />{" "}
          </Link>
        </label>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/">About</Link>
          </li>
         <li>
            <Link to="/adminDashboard">Admin Dashboard</Link>
            
          </li>
          <li>
          <Link to="/student-deshbord"> Student Dashboard</Link>
          </li> */}
          <li>
            <Link to="/department">COURSE REQUEST</Link>
          </li>
          <li>
            <div className="right-menu">
              <button className="menu-button">DASHBOARD</button>
              <div className="dropdown-menu">
                <Link to="/adminDashboard">Admin</Link>
                <br />
                <Link to="/student-deshbord">Student</Link>
                <br />
                <Link to="/teacherProfile">Teacher</Link>
              </div>
            </div>
          </li>
          {/* <li>
            <div className="right-menu">
              <button className="menu-button"> <Link to="/">EVENTS</Link></button>
              <div className="dropdown-menu">
                <a href="">Our Event</a>
                <br />
                <a href="">Event Details</a>
                <br />
              </div>
            </div>
          </li> 
          <li>
            <div className="right-menu">
              <button className="menu-button"> <Link to="/">COURSE</Link></button>
              <div className="dropdown-menu">
                <a href="">Our Courses</a>
                <br />
                <a href="">Course List</a>
                <br />
                <a href="">Course Details</a>
                <br />
              </div>
            </div>
          </li>
          <li>
            <div className="right-menu">
              <button className="menu-button">TEACHERS</button>
              <div className="dropdown-menu">
                <a href="">Our Teacher</a>
                <br />
                <a href="">Teacher Details</a>
                <br />
              </div>
            </div>
          </li> */}
          {loggedinUser.email ? (
            <span
              style={{ color: "#86bc42", fontSize: "17px", fontWeight: "bold" }}
            >
              {loggedinUser.email}
            </span>
          ) : (
            <li>
              <Link className=" border border-2" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
