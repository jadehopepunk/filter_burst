import React, { PropTypes } from 'react'
import { AuthComponents } from 'react-redux-auth0'

const Logout = AuthComponents.Logout

class LogoutMenuItem extends React.Component {
  render(){
    return (
      <li><Logout><span>Logout</span></Logout></li>
    );
  }
}

export default LogoutMenuItem
