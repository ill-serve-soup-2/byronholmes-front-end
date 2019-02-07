import React from "react";
import Authenticate from "./Authenticate";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<NavLink to="/display">DisplayInventory</NavLink>
			<NavLink to="/inventory" />
			<NavLink to="/locations">Locations</NavLink>
			<NavLink to="/volunteerRegister">Register Volunteer</NavLink>
			<NavLink to="/volunteerLogin">Login Volunteer</NavLink>
		</nav>
	);
};

export default NavBar;
