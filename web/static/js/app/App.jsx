import React from 'react'
import NavBar from './NavBar'
import StoryList from './StoryList'

const App = (props) => (
  <div>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <StoryList />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  </div>
);

export default App;
