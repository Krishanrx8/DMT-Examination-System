import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink ,Nav } from 'reactstrap';
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
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={require('./styles/logo.png')} />DMT Examination System</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="hover-underline-animation" href="/questions">Questions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="hover-underline-animation" href="/exam-schedules">Exam Schedule</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="hover-underline-animation" href="/student-details">Examinee Details</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="hover-underline-animation" href="/Login">Login</NavLink>
                        </NavItem>
                        
                    </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
