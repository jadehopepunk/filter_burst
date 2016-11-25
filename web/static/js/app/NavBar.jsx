import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import LoginStatus from '../auth/LoginStatus'
import { StyleSheet, css } from 'aphrodite'

const NavBar = (props) => (
  <Navbar inverse fluid collapseOnSelect className={css(styles.navbar)}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Filter Burst</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="https://filterburst.useresponse.com/">Participate</a></li>
        <li>
          <LoginStatus />
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);

const styles = StyleSheet.create({
  navbar: {
    marginBottom: 0,
    borderRadius: 0,
  }
})

export default NavBar;
