import React from 'react'
import { connect } from 'react-redux'

class IfAuthenticated extends React.Component {
  static defaultProps = {
    is: true
  }

  render() {
    return (this.props.authenticated == this.props.is) ? this.props.children : null
  }
}

export default connect((state)=>{
  const { auth } = state;
  return { authenticated: !!state.auth.token };
})(IfAuthenticated);
