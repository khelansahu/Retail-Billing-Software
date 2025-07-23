import React from 'react'
import logo from "../../assets/logo.png";
import { assests } from '../../assets/assests.js'
import './Menubar.css'
import { Link } from 'react-router-dom';
const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="#">
        <img
        // software logo............
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
            <Link className="nav-link"  to="/dashboard">
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
          <li className="nav-item">
            <Link className="nav-link" to="/manageuser">
              Manage Users
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/inventry">
              Inventry
            </Link>
          </li>
        </ul>
        {/* here we have to add dropdown */}
      </div>
    </nav>
  )
}
export default Menubar