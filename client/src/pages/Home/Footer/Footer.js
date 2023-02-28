import React from "react";
import "./Footer.css";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-heading">Get In Touch</h2>
        <div className="footer-email">
          <FiMail className="footer-icon" />
          <a href="mailto:weomeenttic@gmail.com" className="footer-link">
          
            weomeenttic@gmail.com
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
