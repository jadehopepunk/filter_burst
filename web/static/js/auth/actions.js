import { createAction } from 'redux-actions'
import axios from 'axios'

// export const facebookLoginSuccess = createAction('FACEBOOK_LOGIN_SUCCESS',
//   facebookPayload => facebookPayload)

export const userFetched = createAction('USER_FETCHED', user => user)

export const handleFacebookResponse = (facebookPayload) => {
  return (dispatch) => {
    return axios({
      url: "http://localhost:4000/api/users",
      method: 'post',
      responseType: 'json'
    }).then(function(response) {
      console.log('heard back from axios', response)
      dispatch(userFetched(response.data));
    })
    // dispatch(facebookLoginSuccess(facebookPayload))
  }
}
