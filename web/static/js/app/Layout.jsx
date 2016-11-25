import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import NavBar from './NavBar'
import SiteFooter from './SiteFooter'
import MetaSidebar from '../meta/MetaSidebar'

const Layout = (props) => {
  return (
    <div className={'row ' + css(styles.withSidebar)}>
      <div className={'col-md-8 ' + css(styles.containerColumn)}>
        <NavBar />
        <div className={css(styles.pageParts)}>
          <div className={css(styles.pageBody)}>
            {props.children}
          </div>
          <SiteFooter />
        </div>
      </div>
      <div className={'col-md-4 ' + css(styles.sidebar)}>
        <MetaSidebar />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  withSidebar: {
    height: '100%',
    width: '100%',
    overflowY: 'hidden',
    margin: 0,
  },
  containerColumn: {
    padding: 0,
    height: '100%',
  },
  container: {
    padding: 0,
    height: '100%',
  },
  pageParts: {
    height: 'calc(100% - 65px)',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  pageBody: {
    backgroundColor: '#fcfcfc',
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 50,
  },
  sidebar: {
    backgroundColor: '#2b3e50',
    // width: 700,
    color: 'white',
    padding: 0,
    height: '100%',
    overflow: 'hidden',
  }
})

export default Layout;
