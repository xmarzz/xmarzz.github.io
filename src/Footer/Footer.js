import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom' 
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer">
             <div className="footer-links">
                <div className="blog-texts">
                <p>To the blog section </p>
                <FaHouseFloodWaterCircleArrowRight />

                <Link to="/blog" className="footer-link">Blog</Link>
              </div>
            </div>
                <p>&copy; 2026 All rights reserved | built by jaffer</p>

            
        </footer>
    );
};

export default Footer;
