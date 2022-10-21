import React, { Component } from "react";
import "./styles/Login.css";
import SessionManager from "../helpers/SessionManager";
import { alertService } from "../services/alert.service";
import { userService } from "../services/user.service";

export class Login extends Component {
	static displayName = Login.name;
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};

		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onKeyDown = (e) => {
		if (e.key === "Enter") {
			this.login();
		}
	}


	login() {
		let userInfo = this.state;

		return userService.login(userInfo).then((user) => {
			if (user?.user_id) {
				SessionManager.setUserSession(user.user_id, user.full_name, user.avatar, user.username, user.phone_number, user.email, user.user_type)
				window.location.href = "/home";
			}
			else {
				this.error = "Invalid username or password."
            }
		});
	}

	render() {
		let content;
		if (this.state.loading) {
			content = <div>Loading...</div>;
		}

		return (
			<div>
			<div className="bg-image">
				

		<div className="login-wrap">
				<div className="login-html">
					<div className="login-form">
						<div className="sign-in-htm">
							<div className="group">
								<label className="label">Username</label>
								<input id="user" type="text" className="input" name="username"
								onChange={this.onChange}
								onKeyDown={this.onKeyDown}></input>
							</div>
							<div className="group">
								<label className="label">Password</label>
								<input id="pass" type="password" className="input" data-type="password" name="password"
								onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
							</div>
							<div className="group">
									<button type="submit" className="button" onClick={this.login}>Sign In</button>
								</div>
								<p>{this.error}</p>
							<div className="hr"></div>
							<div className="foot-lnk">
								<a href="#forgot">Forgot Password?</a>
							</div>
						</div>
					</div>
				</div>
					</div>
				</div>
			</div>
        );
    }
}
