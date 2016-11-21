import gql from 'graphql-tag'

// export const facebookLoginSuccess = createAction('FACEBOOK_LOGIN_SUCCESS',
//   facebookPayload => facebookPayload)

// export const userFetched = createAction('USER_FETCHED', user => user)


function generateMutationObject(facebookPayload) {
  return {
    mutation: gql`
     mutation updateFacebookUser($id: String!, $name: String!) {
       updateFacebookUser(userId: $id, name: $name) {
         userId
         name
       }
     }`,
    variables: facebookPayload
  };
};

export const handleFacebookResponse = (facebookPayload) => {
  return (dispatch, getState, apolloClient) => {
    console.log('facebook payload', facebookPayload)
    console.log('used to use axios here, am going to use apollo instead', apolloClient)
    apolloClient.mutate(generateMutationObject(facebookPayload)).then((result) => {
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
