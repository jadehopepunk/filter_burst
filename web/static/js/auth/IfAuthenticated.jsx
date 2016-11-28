import React from 'react'
import { connect } from 'react-redux'

const IfAuthenticated = (props) => {
  if (props.authenticated) {
    return props.children
  } else {
    return null
  }
}

export default connect((state)=>{
  const { auth } = state;
  return { authenticated: !!state.auth.token };
})(IfAuthenticated);
