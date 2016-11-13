import React from 'react'
import Story from './Story'

const StoryList = (props) => (
  <div>
    <Story type="idea" />
    <Story type="entertainment" />
    <Story type="personal" />
    <Story type="idea" />
    <Story type="news" />
  </div>
);

export default StoryList;
