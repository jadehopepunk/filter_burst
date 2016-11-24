import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import LoginStatus from '../auth/LoginStatus'

const NavBar = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Filter Burst</a> - an experiment in diverse yet civil conversation
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="https://filterburst.useresponse.com/">Participate</a></li>
        <li>
          <LoginStatus auth={props.auth} />
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
