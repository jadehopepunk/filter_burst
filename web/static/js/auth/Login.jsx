import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from './AuthService'
import { StyleSheet, css } from 'aphrodite'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div className={css(styles.root)}>
        <h2>Login</h2>
        <ButtonToolbar className={css(styles.toolbar)}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
  },
  toolbar: {
    display: 'inline-block',
  }
})

export default Login;
