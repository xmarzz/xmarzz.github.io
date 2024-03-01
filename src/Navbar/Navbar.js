import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import GMTClock from "../Components/GMTClock/GMTClock";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    setNavbar(true);
  }, []);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <nav className="navbar-outside navbar">
        <div className="navbar_logo">
          <div className="navbar_logo-text">
            <FaLinkedin
              size={22}
              className="linkedin_icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jaffer-sathick-6727a31ab/"
                )
              }
            />
            <FaGithub
              size={22}
              className="github_icon"
              onClick={() => window.open("https://github.com/xmarzz")}
            />
            <FaSquareXTwitter
              size={22}
              className="twitter_icon"
              onClick={() => window.open("https://twitter.com/marzelonnn")}
            />
            <MdEmail
              size={22}
              className="email_icon"
              onClick={() =>
                window.open("https://mailto:sathickjaffer44@gmail.com")
              }
            />
          </div>
          <div className="navbar_clock">
            <GMTClock />
          </div>
        </div>

        <div className="navbar_text">
          <div className="navbar_menu" onClick={handleClick}>
            <div className="navbar_menu-icon" >
              {navbar ? (
                <RxHamburgerMenu
                  size={28}
                  color="#64ffda"
                  className="hamburger-active"
                />
              ) : (
                <MdClose
                  size={30}
                  color="#64ffda"
                  className="hamburger-inactive"
                />
              )}
            </div>

            <div
              className={`navbar_options-mobile ${navbar ? "close" : "open"}`}
            >
              <div>
                {" "}
                <a href="#home" className="navbar-home_mobile">
                  /Home
                </a>
              </div>
              <div>
                {" "}
                <a href="#about" className="navbar-about_mobile">
                  /About
                </a>
              </div>
              <div>
                {" "}
                <a href="#myWork" className="navbar-software_creation_mobile">
                  /software creation
                </a>
              </div>
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
