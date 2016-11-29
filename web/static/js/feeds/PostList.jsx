import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import _ from 'lodash'
import Post from './Post'

const feedQuery = gql`
  query  {
    feed {
      id
      text
      userId
      user {
        picture
      }
    }
  }
`;

class PostList extends React.Component {
  refetch() {
    alert('refetch')
  }

  renderPosts(posts) {
    return _.map(posts, (post) => {
      return <Post key={post.id} type="idea" text={post.text} user={post.user} />
    })
  }

  render() {
    const data = this.props.data

    if (data.loading) {
      return <div>...loading feed</div>
    } else {
      return (
        <div>
          {this.renderPosts(data.feed)}
        </div>
      )
    }
  }
}

const styles = StyleSheet.create({
})

export default graphql(feedQuery)(PostList);
