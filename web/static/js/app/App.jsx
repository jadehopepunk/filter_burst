import React from 'react'
import Root from './Root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store = createStore(reducer, devtools)

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
