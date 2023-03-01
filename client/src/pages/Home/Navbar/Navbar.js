import React, { useState } from "react";

import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../Navbar/womennetic-logo.jpeg";

const Navbar = (props) => {
	const [Mobile, setMobile] = useState(false);
	return (
		<>
			<nav className="navbar">
				<Link className="logo" to={"/"}><img className="logo" src={logo} alt="logo" /></Link>
				

				<ul
					className={Mobile ? "nav-links-mobile" : "nav-links"}
					onClick={() => setMobile(false)}
				>
					<NavLink
						exact
						to="/"
						className="home"
						activeClassName={
							props.isActive === "homePage" ? "active" : undefined
						}
					>
						<li>HOME</li>
					</NavLink>
					<NavLink
						to="/About"
						className="about"
						activeClassName="active-nav-links"
					>
						<li>ABOUT US</li>
					</NavLink>
					<NavLink
						to="/code-of-conduct"
						className="services"
						activeClassName="active-nav-links"
					>
						<li>CODE OF CONDUCT</li>
					</NavLink>
				</ul>

				<button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
					{Mobile ? <ImCross /> : <FaBars />}
				</button>
			</nav>
		</>
	);
};
export default Navbar;
