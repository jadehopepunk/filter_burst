import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router'
import StoryList from './StoryList'
import NewPostForm from './NewPostForm'
import IfAuthenticated from '../auth/IfAuthenticated'

const FeedPage = (props) => (
  <div>
    <div className={css(styles.valueProp)}>
      <h4 className={css(styles.valuePropHeading)}>
        Lets fix social media
      </h4>
      <p>
        We want to build a new type of social
        media <Link to="/who-owns-this">that we all own together</Link>.
        This should balance comfortable sharing with our
        friends with the need to be exposed to ideas from people
        different to us. We don't claim to know how to do this,
        so we're experimenting.
      </p>
    </div>
    <IfAuthenticated>
      <NewPostForm />
    </IfAuthenticated>
    <StoryList />
    {props.children}
  </div>
);

const styles = StyleSheet.create({
  valueProp: {
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
    marginBottom: 40,
    textAlign: 'center',
  },
  valuePropHeading: {
    marginTop: 0
  }
})

export default FeedPage;
