import React from "react";
import "./Navbar.css";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-outside navbar">
        <div className="navbar_clock"></div>

        <div className="navbar_text">
          <div className="navbar_menu">
            <div className="navbar_menuIcon">
              {" "}
              <MdMenuOpen size={44} />{" "}
            </div>
          </div>
          <div className="navbar_options">
            {" "}
            <a href="#home" className="navbar-inside navbar-home">
              /Home
            </a>
            <a href="#about" className="navbar-inside navbar-about">
              /About
            </a>
            <a
              href="#myWork"
              className="navbar-inside navbar-software_creation"
            >
              /software creation
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
