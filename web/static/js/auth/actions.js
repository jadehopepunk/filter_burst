import { createAction } from 'redux-actions'

export const facebookLoginSuccess = createAction('FACEBOOK_LOGIN_SUCCESS', facebookPayload => facebookPayload)
