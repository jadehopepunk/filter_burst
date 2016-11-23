import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'

const Layout = (props) => {
  let children = null;
  if (props.children) {
    children = React.cloneElement(props.children, {
      auth: props.route.auth //sends auth instance from route to children
    })
  }

  return (
    <div className={css(styles.pageParts)}>
      <NavBar />
      <div className={"container " + css(styles.container)}>
        {children}
      </div>
      <SiteFooter />
    </div>
  )
}

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
