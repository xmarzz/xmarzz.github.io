import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { MdMenuOpen, MdClose  } from "react-icons/md";
import GMTClock from "../Components/GMTClock/GMTClock";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);


  useEffect(() => {
    setNavbar(true);
  }, []);

  const handleClick=()=>{
    setNavbar(!navbar)
  }

  return (
    <div>
      <nav className="navbar-outside navbar">
        <div className="navbar_clock">
                <GMTClock/>
        </div>

        <div className="navbar_text">
            <div className="navbar_menu">
             <div className="navbar_menu-icon">{navbar ? <MdMenuOpen size={44} color="#64ffda" onClick={handleClick}/> : <MdClose size={44} color="#64ffda" onClick={handleClick} />}</div>
          
             
            <div className={`navbar_options-mobile ${navbar ? "close" : "open"}`}>
             <div> <a href="#home" className="navbar-home_mobile">
                /Home
              </a></div>
             <div> <a href="#about" className="navbar-about_mobile">
                /About
              </a></div>
            <div>  <a
                href="#myWork"
                className="navbar-software_creation_mobile"
              >
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
