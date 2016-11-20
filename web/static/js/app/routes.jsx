import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import FeedPage from '../feeds/FeedPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={FeedPage} />
  </Route>
);

export default routes;
