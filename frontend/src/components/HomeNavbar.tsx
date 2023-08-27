import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const HomeNavbar = () => {

  const [visible, setVisible] = useState(false);

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <nav className="home-navbar">
      <div className="top-section">
        <Link onClick={dismiss} to="/" className="brand">
          <i className="bx bxs-chalkboard"></i>
          <h3 className="brand-name">Tester</h3>
        </Link>
        <button onClick={() => setVisible(!visible)} className={`collapse-toggle ${visible ? 'toggled' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`navbar-items ${!visible ? 'collapsed' : ''}`}>
        <ul className="navbar-menu">
          <li>
            <NavLink onClick={dismiss} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink onClick={dismiss} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink onClick={dismiss} to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink onClick={dismiss} to="/signup">Sign up</NavLink>
          </li>
        </ul>
        <ul className="navbar-menu hide-700">
          <li>
            <Link className="btn-outline" to="/signup">Get started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
