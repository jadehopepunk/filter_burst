import {combineReducers} from 'redux';
import auth from '../auth/reducer'

const reducer = combineReducers({
  auth: auth
})

export default reducer
