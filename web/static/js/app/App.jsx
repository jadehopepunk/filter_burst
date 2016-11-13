import React from 'react'
import NavBar from './NavBar'
import StoryList from './StoryList'

const App = (props) => (
  <div>
    <NavBar />
    <div className="container">
      <StoryList />
    </div>
  </div>
);

export default App;
