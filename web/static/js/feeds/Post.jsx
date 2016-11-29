import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'
import AvatarImage from '../auth/AvatarImage'

class Post extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      picture: PropTypes.string
    }).isRequired
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <AvatarImage picture={this.props.user.picture} />
        <div className={css(styles.content)}>
          {this.props.text && <p>{this.props.text}</p>}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    border: '1px solid #dddddd',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 15
  }
})


export default Post;
