import React, { Component } from 'react';
import './styles/Login.css';
import SessionManager from "../helpers/SessionManager";
import { alertService } from '../services/alert.service';
import { userService } from '../services/user.service';

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
		if (e.key === 'Enter') {
			this.login();
		}
	}


	login() {
		let userInfo = this.state;
		this.setState({
			full_name: null,
			avatar: null,
			email:null
		});

		return userService.login(userInfo).then((result) => {
			/*if (result?.token) {
				SessionManager.setUserSession(result.username, result.token, result.userId, result.usersRole)

				if (SessionManager.getToken()) {
					this.setState({
						loading: false
					});

					// <LoginMenu menuText = 'Logout' menuURL = '/logout' />

					// If login successful and get token
					// redirect to dashboard
					window.location.href = "/home";
				}
			}

			else {
				let errors = '';
				for (const key in result?.errors) {
					if (Object.hasOwnProperty.call(result.errors, key)) {
						errors += result.errors[key];

					}
				}
				errors = errors === '' ? 'Login is unsuccessfull!' : errors;
				alertService.error('User added', { keepAfterRouteChange: true });

				this.setState({
					errors: "Login failed!",
					loading: false
				});
			}
*/
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
				</div>
				<div className="row">
				<div className="login-box col-md-4">
					<div className="login-logo">
						<a href="/"><b>ECommerce</b></a>
					</div>
					<div className="login-box-body">
						<p className="login-box-msg">Sign in to access the application</p>

						<div className="form-group has-feedback">
							<input
								type="text"
								className="form-control"
								placeholder="Please Enter Username"
								name="username"
								onChange={this.onChange}
								onKeyDown={this.onKeyDown}
							/>
							<span className="glyphicon glyphicon-user form-control-feedback" />
						</div>
						<div className="form-group has-feedback">
							<input type="password" className="form-control" placeholder="Please Enter Password" name="password"
								onChange={this.onChange} onKeyDown={this.onKeyDown}
							/>
							<span className="glyphicon glyphicon-lock form-control-feedback" />
						</div>
						<div className="row">
							<div className="col-md-4">
								<button className="btn btn-primary btn-block" onClick={this.login}>
									Sign In
								</button>
							</div>
							<div className="col-md-6">
								<button className="btn btn-primary btn-block" onClick={this.registration}>
									Create an account
								</button>
							</div>
							<div className="col-md-2">
								{content}
							</div>
						</div>
						<div className="row">
							<div className="col-md-8">
							<strong className="has-error" ></strong>
					</div>
					<div className="col-md-4">
					</div>
				</div>
			</div>

		{/*	<div class="login-wrap">
				<div class="login-html">
					<div class="login-form">
						<div class="sign-in-htm">
							<div class="group">
								<label for="user" class="label">Username</label>
								<input id="user" type="text" class="input"></input>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label>
								<input id="pass" type="password" class="input" data-type="password"></input>
							</div>
							<div class="group">
								<input id="check" type="checkbox" class="check" checked></input>
								<label for="check"><span class="icon"></span> Keep me Signed in</label>
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign In"></input>
							</div>
							<div class="hr"></div>
							<div class="foot-lnk">
								<a href="#forgot">Forgot Password?</a>
							</div>
						</div>
					</div>
				</div>
				</div>*/}
			</div>
				</div>
				</div>
        );
    }
}
