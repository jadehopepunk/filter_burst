import React from 'react'
import NavBar from './NavBar'
import StoryList from './StoryList'
import FeedSettings from './FeedSettings'

const App = (props) => (
  <div>
    <NavBar />
    <div className="container">
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

export default App;
