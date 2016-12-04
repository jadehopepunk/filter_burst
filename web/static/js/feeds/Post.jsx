import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'
import AvatarImage from '../auth/AvatarImage'

class Post extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    source: PropTypes.string,
    originUrl: PropTypes.string,
    user: PropTypes.shape({
      picture: PropTypes.string
    }).isRequired,
  }

  renderOriginLink() {
    if (this.props.source == 'TWITTER') {
      return <a href={this.props.originUrl} className={css(styles.sourceLink)}><img src="/images/external_brands/twitter_logo_blue_32.png" /></a>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <AvatarImage picture={this.props.user.picture} />
        <div className={css(styles.content)}>
          {this.props.text && <p>{this.props.text}</p>}
        </div>
        {this.renderOriginLink()}
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
    marginLeft: 15,
    flex: 1,
  },
  sourceLink: {
    ':hover': {
      opacity: 0.5,
    }
  }
})


export default Post;
