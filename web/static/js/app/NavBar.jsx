import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response) => {
  console.log(response);
}

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
          <FacebookLogin
            appId="1288160917871988"
            autoLoad={true}
            fields="id,name,email"
            scope="public_profile,email,user_friends"
            cssClass="btn btn-link btn-facebook"
            callback={responseFacebook} />
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
