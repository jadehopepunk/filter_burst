import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PostList from './PostList'
import socket from '../app/socket'

const feedQuery = gql`
  query  {
    feed {
      id
      text
      userId
      user {
        picture
      }
      source
      originUrl
    }
  }
`;

class MyFeed extends React.Component {
  constructor(props) {
    super()
    this.state = {dynamicPosts: []}
  }

  componentDidMount() {
    socket.connect()
    this.channel = socket.channel("feed")

    this.channel.on("new_post", this.onNewPost.bind(this))

    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }

  onNewPost(payload) {
    const newDynamicPosts = [payload.data.post, ...(this.state.dynamicPosts)]
    this.setState({dynamicPosts: newDynamicPosts})
  }

  render() {
    const data = this.props.data

    if (data.loading) {
      return <div>...loading feed</div>
    } else {
      return <PostList posts={this.state.dynamicPosts.concat(data.feed)} />
    }
  }
}

export default graphql(feedQuery)(MyFeed);
