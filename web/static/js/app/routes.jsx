import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Layout from './Layout';
import FeedPage from '../feeds/FeedPage';
import Login from '../auth/Login'
import AuthService from '../auth/AuthService'

const auth = new AuthService('bL2AwIzeIva6mCHF2KFRqKRUXYoXnsL3', 'filterburst.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

// <IndexRoute component={FeedPage} />

const routes = (
  <Route path="/" component={Layout} auth={auth}>

    <IndexRedirect to="/home" />
    <Route path="home" component={FeedPage} onEnter={requireAuth} />

    <Route path="login" component={Login} />
  </Route>
);

export default routes;
