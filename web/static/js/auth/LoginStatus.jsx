import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import * as Actions from './actions'
import { Button } from 'react-bootstrap'

const LoginStatus = (props) => {
  console.log('props', props)
  return (
    <Button bsStyle="primary" className="navbar-btn" onClick={props.auth.login.bind(this)}>Login</Button>
  )
}

export default LoginStatus
