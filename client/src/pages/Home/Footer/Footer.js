import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<h2 className="footer-heading">Get In Touch</h2>

				<div className="get-in">
					<div className="footer-email">
						<div className="footer-icon1">
							<FiMail className="footer-icon" />

							<h4 className="footer2-heading">Email Address</h4>
						</div>
						<a
							target="blank"
							maito="info@womennetic.com"
							className="footer-link"
						>
							info@womennetic.com
						</a>
					</div>

					<div className="footer-email">
						<div className="footer-icon1">
							<FaLinkedin className="footer-icon" />

							<h4 className="footer2-heading">LinkedIn</h4>
						</div>
						<a
							target="blank"
							href="https://www.linkedin.com/company/womennetic/"
							className="footer-link"
							id="footer-link"
						>
							linkedin.com.womennetic
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
