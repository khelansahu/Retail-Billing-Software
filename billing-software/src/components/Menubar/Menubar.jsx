import React from "react";
import logo from "../../assets/logo.png";
import { assests } from "../../assets/assests.js";
import "./Menubar.css";
import profile from "../../assets/fevicon.png";
import { Link } from "react-router-dom";
const Menubar = ({ onLogout }) => {
  // const logout = () => {};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="#">
        <img
          // software logo............
          className="rounded-2"
          src={logo}
          alt="Logo"
          height="40"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manageitems">
              Manage Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/managecategory">
              Manage Categories
            </Link>
          </li>

          {/* 
          in future if we required we can create user implementation also..  
           */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/manageuser">
              Manage Users
            </Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" to="/inventry">
              Inventry
            </Link>
          </li>
        </ul>
        {/* here we have to profile dropdown */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={profile} alt="" height={35} width={35} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <a href="#!" className="dropdown-item">
                Setting
              </a>
              <a href="#!" className="dropdown-item">
                Activity Log
              </a>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <a href="#!" className="dropdown-item" onClick={onLogout}>
                LogOut
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menubar;
