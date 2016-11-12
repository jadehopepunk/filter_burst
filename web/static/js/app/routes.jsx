import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Main from '../main/Main';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
);

export default routes;
