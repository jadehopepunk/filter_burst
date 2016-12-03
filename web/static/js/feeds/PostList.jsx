import React from 'react'
import _ from 'lodash'
import Post from './Post'

class PostList extends React.Component {
  renderPosts(posts) {
    return _.map(posts, (post) => {
      return <Post key={post.id} type="idea" text={post.text} user={post.user} />
    })
  }

  render() {
    return (
      <div>
        {this.renderPosts(this.props.posts)}
      </div>
    )
  }
}

export default PostList;
