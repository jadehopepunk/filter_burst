import { handleActions } from 'redux-actions'

const initialState = {
  user: 1
}

const authReducer = handleActions({
  'FACEBOOK_LOGIN_SUCCESS': (state, action) => ({
    facebook: action.payload
  }),
}, initialState);

export default authReducer
