import React, { useState } from "react";
import { Link } from "@reach/router";
import NavLink from "./NavLink";
import "./css/Navbar.css";
import logo from "./img/logo.png";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (isExpanded) {
      mobileMenu.style.transform = "scaleY(0)";
      setIsExpanded(false);
    } else {
      mobileMenu.style.transform = "scaleY(1)";
      setIsExpanded(true);
    }
  };

  return (
    <nav className="Navbar">
      <div className="container d-flex wrapper">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <ul className="desktop-menu li-none">
          <li>
            <NavLink className="td-none" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="td-none" to="/about">
              About Me
            </NavLink>
          </li>
        </ul>

        <div className="mobile-menu-wrapper">
          <button
            className="menu-toggler c-pointer"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Expand Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="mobile-menu" id="mobile-menu" role="region">
            <li className="li-none">
              <NavLink className="td-none" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-none">
              <NavLink className="td-none" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
