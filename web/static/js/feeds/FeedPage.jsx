import React from 'react';
import StoryList from './StoryList'

const FeedPage = () => (
  <div>
    <div className="alert alert-info">
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
    <StoryList />
  </div>
);

export default FeedPage;
