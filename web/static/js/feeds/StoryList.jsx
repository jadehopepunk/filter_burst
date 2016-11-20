import React from 'react'
import Story from './Story'

const StoryList = (props) => (
  <div>
    <Story type="idea" text="This is an idea. It's public, but it's fairly subjective. It doesn't claim to be fact, so we don't need to fact-check it, but we do need to watch for hate speach." />
    <Story type="news" text="When we share news socially, stuff needs to become interesting. We want to involved professional journalists in the mix. Stories need to initially show as clearly unconfirmed until fact checks start to come in." />
    <Story type="entertainment" text="This is entertainment. Much of our social media use is just fun stuff, like movies, jokes, and pictures of cats. If we try to create good dialog only on serious political websites, that wont be where most people go. Also, perhaps even our fun stuff can benefit from bursting our social media bubbles a bit." />
    <Story type="personal" text="Hey mum, here's a picture of baby's first steps. This isn't necessarily for the whole internet. Personal stuff is just shared with your friends, much like any old social network. By flagging it clearly as such, we don't need to worry about other features like fact checks and things here." />
    <Story type="idea" />
  </div>
);

export default StoryList;
