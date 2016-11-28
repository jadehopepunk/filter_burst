import React from 'react'
import { connect } from 'react-redux'
import { AuthComponents } from 'react-redux-auth0'
import { NavDropdown, MenuItem } from 'react-bootstrap'
import UserNavDropdown from './UserNavDropdown'

const { LoginSignup } = AuthComponents;

const LoginStatus = (props) => {
  const auth = props.auth
  const loggedIn = auth.token

  if (loggedIn) {
    return <UserNavDropdown profile={auth.profile} />
  } else {
    return <li><div className="navbar-btn"><LoginSignup login className="navbar-btn"><span>Sign in</span></LoginSignup></div></li>
  }
}

export default connect((state)=>{
  const { auth } = state;
  return { auth };
})(LoginStatus);

// <img src={profile.picture} width={40} height={40} className="navbar-btn" />
