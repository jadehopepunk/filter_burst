import React from 'react';
import NewPostForm from './NewPostForm'
import MyFeed from './MyFeed'

class MyFeedPage extends React.Component {
  render() {
    return (
      <div>
        <NewPostForm />
        <MyFeed ref={(ref) => {this.postList = ref}} />
      </div>
    )
  }
}

export default MyFeedPage;
