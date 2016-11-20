import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app/App';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// if (module.hot) {
//   module.hot.accept('./app/Root', () => {
//     const NextRoot = require('./app/Root').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextRoot />
//       </AppContainer>,
//       rootEl
//     );
//   });
// }
