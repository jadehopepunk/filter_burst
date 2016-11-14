import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import NavBar from './NavBar'
import StoryList from './StoryList'
import FeedSettings from './FeedSettings'

const App = (props) => (
  <div>
    <NavBar />
    <div className="container">
      <div className={"alert alert-info " + css(styles.notice)}>
        <h4>How do we fix social media?</h4>
        <p>
          It feels like the US has been torn in half. How do we social media conversations
          with people different to us, when it&#39;s already hard enough to talk online
          without abuse? Is facebook going to make that happen for us?
        </p>
        <p>
          This is an experiment to try doing it ourselves. If you have any ideas on how
          to make online conversation more <b>diverse</b> or more <b>safe</b> then
          list them on our <a href="https://filterburst.useresponse.com/">idea voting page</a>.
        </p>
      </div>

      <div className="row">
        <div className="col-md-8">
          <StoryList />
        </div>
        <div className="col-md-4">
          <FeedSettings />
        </div>
      </div>
    </div>
  </div>
);

const styles = StyleSheet.create({
  notice: {
    // padding: 10,
  }
})

export default App;
