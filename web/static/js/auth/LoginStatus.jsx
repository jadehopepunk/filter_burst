import React from 'react'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response) => {
  console.log(response);
}

const LoginStatus = (props) => (
  <FacebookLogin
    appId="1288160917871988"
    autoLoad={true}
    fields="id,name,email"
    scope="public_profile,email,user_friends"
    cssClass="btn btn-link btn-facebook"
    callback={responseFacebook} />
)

export default LoginStatus
