import React from 'react'
import Root from './Root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
