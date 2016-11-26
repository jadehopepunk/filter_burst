import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Layout from './Layout';
import FeedPage from '../feeds/FeedPage';
import WhoOwnsThis from '../pages/WhoOwnsThis';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={FeedPage} />
    <Route path="/who-owns-this" component={WhoOwnsThis}/>
  </Route>
);

export default routes;
