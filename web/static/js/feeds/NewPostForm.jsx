import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite'
import Textarea from 'react-textarea-autosize'
import { ButtonToolbar, Button } from 'react-bootstrap'
import FocusOverlay from '../generic/FocusOverlay'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import AvatarImage from '../auth/AvatarImage'

const createPost = gql`
  mutation createPost($userId: String!, $text: String!) {
    createPost(userId: $userId, text: $text) {
      id
      userId
      text
    }
  }
`;

class NewPostForm extends React.Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    onSubmitted: PropTypes.func,
    profile: PropTypes.shape({
      picture: PropTypes.string
    }).isRequired
  }

  state = {
    text: "",
  }

  post = (event) => {
    event.target.blur()
    this.props.mutate({ variables: { userId: this.props.userId, text: this.state.text } })
    .then(({ data }) => {
      console.log('got data', data)
      this.setState({text: ""})
      this.refs.focusOverlay.blur()
      if (this.props.onSubmitted) this.props.onSubmitted()
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <FocusOverlay ref="focusOverlay">
        <div className={css(styles.container)}>
          <div className={css(styles.talkBox)}>
            <div className={css(styles.avatarContainer)}>
              <AvatarImage picture={this.props.profile.picture} />
            </div>
            <div className={css(styles.textAreaContainer)}>
              <Textarea
                className={css(styles.textarea)}
                placeholder="what would you like to share?"
                value={this.state.text}
                minRows={2}
                onChange={this.handleTextChange} />
            </div>
          </div>
          <div className={css(styles.controls)}>
            <ButtonToolbar>
              <div className="pull-right">
                <Button onClick={this.post}>Post</Button>
              </div>
            </ButtonToolbar>
          </div>
        </div>
      </FocusOverlay>
    )
  }
}

const paddingSize = 15

const styles = StyleSheet.create({
  container: {
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
    marginBottom: 20,
    border: "1px solid #dddddd",
    padding: 0,
    position: 'relative',
    zIndex: 101,
    backgroundColor: 'white',
    padding: paddingSize,
    borderRadius: 2,
  },
  textAreaContainer: {
    flex: 1,
    borderBottom: '1px solid #dddddd',
  },
  textarea: {
    margin: 0,
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    resize: 'none',
    outline: 'none',
    width: '100%',
    flex: 1,
    marginBottom: paddingSize,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  talkBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarContainer: {
    marginRight: paddingSize,
  },
  controls: {
    paddingTop: paddingSize,
  }
})

function mapStateToProps(state) {
  return {
    userId: state.auth.id,
    profile: {
      picture: state.auth.profile.picture
    }
  }
}

const NewPostFormWithMutate = graphql(createPost)(connect(mapStateToProps)(NewPostForm));
export default NewPostFormWithMutate;
