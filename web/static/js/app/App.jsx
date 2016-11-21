import React from 'react'
import Root from './Root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import appReducer from './reducer'
import ReduxThunk from 'redux-thunk'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const apolloClient = new ApolloClient();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  app: appReducer,
  apollo: apolloClient.reducer(),
})

let store = createStore(reducer, {}, composeEnhancers(
  applyMiddleware(
    apolloClient.middleware(),
    ReduxThunk.withExtraArgument(apolloClient)
  )
))

const App = () => (
  <ApolloProvider store={store} client={apolloClient}>
    <Root />
  </ApolloProvider>
);

export default App;
