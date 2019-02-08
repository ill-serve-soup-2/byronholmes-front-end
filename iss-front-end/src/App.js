import React, { Component } from "react";
import Register from "./components/Register";
import Inventory from "./components/Inventory";
import LocationGrab from "./components/LocationGrab";
import DisplayInventory from "./components/DisplayInventory";
import Authenticate from "./components/Authenticate";
import VolunteerRegister from "./components/VolunteerRegister";
import VolunteersLogin from "./components/VolunteersLogin";
import LocationFinder from "./components/LocationFinder";
import "./App.css";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
	render() {
		console.log("app");
		return (
			<div className="App">
				<NavBar />
				{/* <NavLink to="/display">DisplayInventory</NavLink>

      <NavLink to="inventory"></NavLink>
      <NavLink to="locations">Locations</NavLink>
      <NavLink to="volunteerRegister">Register Volunteer</NavLink>
      <NavLink to="volunteerLogin">Login Volunteer</NavLink> */}
				<Route exact path="/" component={DisplayInventory} />
				<Route path="/display" component={DisplayInventory} />
				<Route path="/inventory" component={Inventory} />
				<Route path="/locations" component={LocationFinder} />
				<Route
					path="/volunteerRegister"
					component={VolunteerRegister}
				/>
				<Route path="/volunteerLogin" component={VolunteersLogin} />
			</div>
		);
	}
}

const WrappedComponent = Authenticate(App);

export default WrappedComponent;
