import React from "react";
import { Link, NavLink } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className="home-navbar">
      <Link to="/" className="brand">
        <i className="bx bxs-chalkboard"></i>
        <h3 className="brand-name">Tester</h3>
      </Link>
      <div className="navbar-items">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li>
            <Link className="btn-outline" to="/signup">Get started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
