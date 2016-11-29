import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'

class Post extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    // user: PropTypes.shape({
    //   picture: PropTypes.string
    // }).isRequired
  }

  render() {
    return (
      <div className={css(styles.container)}>
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
  },
  content: {
    padding: 15,
  }
})


export default Post;
