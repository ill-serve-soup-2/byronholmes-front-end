import React from "react";
import Authenticate from "./Authenticate";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./isslogo.svg";

const NavBar = () => {
	return (
		<nav>
			<NavLink to="/">
				<img src={logo} height="40px" alt="I'll Serve Soup Logo" />
			</NavLink>

			<div className="link-wrapper">
				<NavLink to="/display">Display Inventory</NavLink>
				{/* <NavLink to="/inventory" /> */}
				<NavLink to="/locations">Locations</NavLink>
				<NavLink to="/volunteerRegister">Register Volunteer</NavLink>
				<NavLink to="/volunteerLogin">Login Volunteer</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;