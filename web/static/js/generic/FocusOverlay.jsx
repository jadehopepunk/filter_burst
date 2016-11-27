import React from 'react';
import { StyleSheet, css } from 'aphrodite'

class FocusOverlay extends React.Component {
  constructor() {
    super()
    this.state = {focus: false}
  }

  focus = () => {
    this.setState({focus: true})
  }

  blur = () => {
    this.setState({focus: false})
  }

  renderOverlay() {
    if (this.state.focus) {
      return <div className={css(styles.overlay)} onClick={this.blur}></div>
    } else {
      return null
    }
  }

  render() {
    var containerStyles = [styles.container]
    if (this.state.focus) containerStyles.push(styles.focussedContainer)

    return (
      <div>
        {this.renderOverlay()}
        <div
          className={css(...containerStyles)}
          onFocus={this.focus}
          onClick={this.focus} >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'relative',
    zIndex: 101,
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
})


export default FocusOverlay
