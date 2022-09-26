import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

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
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" fluid light>
                <NavbarBrand tag={Link} to="/"><img src={require('./styles/logo.png')} />DMT Examination System</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="menu-bar navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/student-details">Student Details</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/exam-schedules">Exam Schedules</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                    </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
