import { Component } from "react";
import SessionManager from "../helpers/SessionManager";

export class Logout extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        console.log("component did mount for logout");
        SessionManager.removeUserSession();
        window.location.href = "/login";
    }

    render() {
        return (
            <div></div>
        );
    }

}
