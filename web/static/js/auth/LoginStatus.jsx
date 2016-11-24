import React from 'react'
import { connect } from 'react-redux'
import { AuthComponents } from 'react-redux-auth0'
const { LoginSignup } = AuthComponents;

const LoginStatus = (props) => {
  const auth = props.auth
  const loggedIn = auth.token
  console.log('auth', auth)

  if (loggedIn) {
    return (<div className="navbar-btn"><span>AWESOME!</span></div>)
  } else {
    return <div className="navbar-btn"><LoginSignup login className="navbar-btn" /></div>
  }
}

export default connect((state)=>{
  const { auth } = state;
  return { auth };
})(LoginStatus);
