import React from 'react'
import Root from './Root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, {}, composeEnhancers(
  applyMiddleware(ReduxThunk)
))

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
