import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import FeedSettings from './FeedSettings'

const MetaSidebar = (props) => (
  <div className={css(styles.container)}>
    <h2>
      This is an Experiment<br />
    <small>...and you control it</small>
    </h2>

    <p>
      Change the settings here to control your
      experience and we'll try and build a better
      social feed together.
    </p>
    <p>
      <strong>This sidebar doesn't do anything yet</strong> because we haven't started our
      first experiment. First, we're working to ensure that while
      have a steady feed of social data to experiment on.
    </p>
    <div className={css(styles.feedSettingsContainer)}>
      <div className={css(styles.exampleContainer)}>
        <FeedSettings />
      </div>
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  feedSettingsContainer: {
    marginTop: 30,
    borderTop: '1px solid #999999',
    paddingTop: 30
  },
  exampleContainer: {
    opacity: 0.3
  }
})

export default MetaSidebar;
