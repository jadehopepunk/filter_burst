import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Layout from './Layout';
import FeedPage from '../feeds/FeedPage';
import Login from '../auth/Login'
import AuthService from '../auth/AuthService'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={FeedPage} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
