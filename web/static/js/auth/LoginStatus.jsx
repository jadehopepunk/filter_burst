import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import * as Actions from './actions'
import { Button } from 'react-bootstrap'

const LoginStatus = (props) => {
  const auth = props.auth

  if (auth.loggedIn) {
    return (<span>AWESOME!</span>)
  } else {
    return <Button bsStyle="primary" className="navbar-btn" onClick={auth.login.bind(this)}>Login</Button>
  }
}

export default LoginStatus
