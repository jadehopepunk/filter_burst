import React from 'react';
import NewPostForm from './NewPostForm'
import PostList from './PostList'

import { Socket } from "phoenix"

class MyFeedPage extends React.Component {
  componentDidMount() {
    this.socket = new Socket("/socket", {
      params: {token: window.userToken},
      logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
    })
    console.log('created this.socket', this.socket)

    this.socket.connect()

    console.log('connected')

    this.channel = this.socket.channel("feed")

    console.log('this.channel', this.channel)

    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })

  }

  render() {
    return (
      <div>
        <NewPostForm />
        <PostList ref={(ref) => {this.postList = ref}} />
      </div>
    )
  }
}

export default MyFeedPage;
