const initialState = {
  user: 1
}

// const authReducer = handleActions({
//   'FACEBOOK_LOGIN_SUCCESS': (state, action) => ({
//     facebook: action.payload
//   }),
// }, initialState);

const authReducer = (state = initialState) => {
  return state
}

export default authReducer
