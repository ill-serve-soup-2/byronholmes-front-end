import React, { Component } from "react";
import { connect } from "react-redux";
import { loginVolunteer } from "../actions/volunteersActions";
import "./volunteersLogin.css";
let user = { username: "", password: "" };

class LogIn extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentWillUpdate() {

	}
	logIn = event => {
		event.preventDefault();
		this.props.loginVolunteer(user, this.props.history);

		/*setTimeout(function(){
    localStorage.setItem("token", this.props.loginInfo)
  }, 300)*/
	};
	getInfo = event => {
		user[event.target.name] = event.target.value;
	};

	render() {
		return (
			<div className="volunteer-form-container">
				<h1>Volunteer Login</h1>
				<form onSubmit={this.logIn} className="volunteer-form">
					<label for="username">Username</label>
					<input
						name="username"
						placeholder="abc123"
						type="text"
						onChange={this.getInfo}
						value={this.state.username}
						required
					/>
					<label for="password">Password</label>
					<input
						name="password"
						placeholder="password"
						type="password"
						onChange={this.getInfo}
						value={this.state.password}
						required
					/>
					<div className="button-wrapper">
						<button type="submit" value="login" className="button">
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loginInfo: state.volunteers.loginInfo,
		loggingIn: state.volunteers.loggingIn,
		error: state.volunteers.error,
	};
};
export default connect(
	mapStateToProps,
	{ loginVolunteer }
)(LogIn);
