import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

const Layout = (props) => (
  <div className={css(styles.pageParts)}>
    <NavBar />
    <div className={"container " + css(styles.container)}>
      {props.children}
    </div>
    <SiteFooter />
  </div>
);

const styles = StyleSheet.create({
  pageParts: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    paddingBottom: 30,
  },
})

export default Layout;
