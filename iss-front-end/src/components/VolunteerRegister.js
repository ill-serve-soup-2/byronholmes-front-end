import React, { Component } from "react";
import { connect } from "react-redux";
import { registerVolunteer } from "../actions/volunteersActions";
import "./volunteerRegister.css";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			name: "",
			email: "",
			phone: "",
		};
	}

	register = event => {
		event.preventDefault();
		this.props.registerVolunteer(this.state);
	};

	getInfo = event => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	};
	render() {
		return (
			<div className="volunteer-form-container">
				<h1>Volunteer Register</h1>
				<form onSubmit={this.register} className="volunteer-form">
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
					<label for="name">Name</label>
					<input
						name="name"
						placeholder="Name Nameson"
						type="text"
						onChange={this.getInfo}
						value={this.state.name}
					/>
					<label for="email">Email</label>
					<input
						name="email"
						type="email"
						placeholder="abc123@emailcompany.com"
						onChange={this.getInfo}
						value={this.state.email}
					/>
					<label for="phone">Phone</label>
					<input
						name="phone"
						placeholder="123-456-7890"
						type="tel"
						onChange={this.getInfo}
						value={this.state.phone}
					/>
					<div className="button-wrapper">
						<button
							type="submit"
							value="register"
							className="button"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		stuff: [],
	};
};

export default connect(
	mapStateToProps,
	{ registerVolunteer }
)(Register);
