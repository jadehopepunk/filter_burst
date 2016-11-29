import React from 'react';
import { Link } from 'react-router'
import SamplePostList from './SamplePostList'
import IfAuthenticated from '../auth/IfAuthenticated'
import SampleFeedPage from './SampleFeedPage'
import MyFeedPage from './MyFeedPage'

const FeedPage = (props) => (
  <div>
    <IfAuthenticated is={false}>
      <SampleFeedPage />
    </IfAuthenticated>
    <IfAuthenticated>
      <MyFeedPage />
    </IfAuthenticated>
    {props.children}
  </div>
);

export default FeedPage;
