import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const SiteFooter = (props) => (
  <footer className={css(styles.footer)}>
    <div className="container">
      <div>This software is open source. <a href="https://github.com/craigambrose/filter_burst">Get it on github.</a></div>
      <div>Started by <a href="http://enspiral.com/enspiral-people/craig-ambrose/">Craig Ambrose</a>, email me <a href="mailto:craig.ambrose@enspiral.com">here</a>.</div>
    </div>
  </footer>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#DDDDDD ',
    paddingTop: 20,
    paddingBottom: 40,
    // color: '#CCCCCC',
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
  }
})

export default SiteFooter;
