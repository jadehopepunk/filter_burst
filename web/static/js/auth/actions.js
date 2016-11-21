import gql from 'graphql-tag'
import _ from 'lodash'

// export const facebookLoginSuccess = createAction('FACEBOOK_LOGIN_SUCCESS',
//   facebookPayload => facebookPayload)

// export const userFetched = createAction('USER_FETCHED', user => user)


function buildFacebookMutation(facebookPayload) {
  const user = _.pick(facebookPayload, ['id', 'name', 'email', 'accessToken', 'expiresIn'])

  return {
    mutation: gql`
     mutation updateFacebookUser($facebookUser: FacebookUserInput!) {
       updateFacebookUser(facebook_user: $facebookUser) {
         id
         name
       }
     }`,
    variables: {facebookUser: user}
  };
};

export const handleFacebookResponse = (facebookPayload) => {
  return (dispatch, getState, apolloClient) => {
    console.log('facebook payload', facebookPayload)
    console.log('used to use axios here, am going to use apollo instead', apolloClient)
    apolloClient.mutate(buildFacebookMutation(facebookPayload)).then((result) => {
      if (result.data) {
        // if the mutation yields data, dispatch an action with that data
        console.log('got a result', result)
        // return dispatch({
        //   type: "UPDATE_MEDIA",
        //   data: result.data._id
        // });
      }
    });
    // return axios({
    //   url: "http://localhost:4000/api/users",
    //   method: 'post',
    //   responseType: 'json'
    // }).then(function(response) {
    //   console.log('heard back from axios', response)
    //   dispatch(userFetched(response.data));
    // })
    // dispatch(facebookLoginSuccess(facebookPayload))
  }
}
