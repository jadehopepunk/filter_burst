import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router'
import SamplePostList from './SamplePostList'
import NewPostForm from './NewPostForm'
import IfAuthenticated from '../auth/IfAuthenticated'
import SampleFeedPage from './SampleFeedPage'
import PostList from './PostList'

const FeedPage = (props) => (
  <div>
    <IfAuthenticated is={false}>
      <SampleFeedPage />
    </IfAuthenticated>
    <IfAuthenticated>
      <NewPostForm />
      <PostList />
    </IfAuthenticated>
    {props.children}
  </div>
);

const styles = StyleSheet.create({
})

export default FeedPage;
