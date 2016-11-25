import React from 'react'
import { connect } from 'react-redux'
import { AuthComponents } from 'react-redux-auth0'
const { LoginSignup } = AuthComponents;

const LoginStatus = (props) => {
  const auth = props.auth
  const loggedIn = auth.token
  const profile = auth.profile

  if (loggedIn) {
    return <img src={profile.picture} width={40} height={40} className="navbar-btn" />
  } else {
    return <div className="navbar-btn"><LoginSignup login className="navbar-btn"><span>Sign in</span></LoginSignup></div>
  }
}

export default connect((state)=>{
  const { auth } = state;
  return { auth };
})(LoginStatus);
