import React from 'react';
import NewPostForm from './NewPostForm'
import PostList from './PostList'

class MyFeedPage extends React.Component {
  onPostSubmitted = () => {
    this.postList.renderedElement.props.data.refetch()
    // console.log('this.postList', this.postList)
    // this.postList.children[0].refetch()
  }

  render() {
    return (
      <div>
        <NewPostForm onSubmitted={this.onPostSubmitted} />
        <PostList ref={(ref) => {this.postList = ref}} />
      </div>
    )
  }
}

export default MyFeedPage;
