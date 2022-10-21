import React, { Component } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from "reactstrap";
import SessionManager from "../helpers/SessionManager";
import "./styles/NavMenu.css";


export class NavMenu extends Component {
    static displayName = NavMenu.name;
    isAdmin = SessionManager.getUserType()

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        if (this.isAdmin == "admin") {
            return (
                <header>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/admin-dashboard"><img src={require("./styles/logo.png")} />DMT Examination System</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/exam-result">Exam Results</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/add-questions">Add Exam Questions</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/exam-schedule">Exam Schedule</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/view-exam">View Exam</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/logout">Logout</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            );
        }
        else if (this.isAdmin == "user") {
            return (
                <header>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/student-dashboard"><img src={require("./styles/logo.png")} />DMT Examination System</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/exams">Exam</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/exam-schedule">Exam Schedule</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/logout">Logout</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            );
        }

        else {
            return (
                <header>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/"><img src={require("./styles/logo.png")} />DMT Examination System</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="hover-underline-animation" href="/login">Login</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            );
        }
  }
}
