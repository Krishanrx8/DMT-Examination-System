import React, { Component } from 'react';
import './styles/Login.css';


export class Login extends Component {
    static displayName = Login.name;

    render() {
		return (
			<div>
			<div class="bg-image">
                </div>
			<div class="login-wrap">
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
				</div>
			</div>
			
        );
    }
}
