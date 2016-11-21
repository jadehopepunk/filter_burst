import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FacebookLogin from 'react-facebook-login'
import * as Actions from './actions'

const LoginStatus = (props) => {
  console.log('props', props)
  return (
    <FacebookLogin
      appId="1288160917871988"
      autoLoad={true}
      fields="id,name,email,picture"
      scope="public_profile,email,user_friends"
      cssClass="btn btn-link btn-facebook"
      callback={props.actions.handleFacebookResponse} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginStatus)
