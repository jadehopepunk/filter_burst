import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import * as Actions from './actions'

const LoginStatus = (props) => {
  console.log('props', props)
  return (
    <Link to="/login">Login</Link>
  )
}

// const mapStateToProps = state => ({
//   auth: state.auth
// })
//
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(Actions, dispatch)
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginStatus)

export default LoginStatus
