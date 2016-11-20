import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Mask = (props) => (
  <div className={css(styles.container, (props.active ? styles.active : styles.inactive))}>
    <img src="/images/mask.png" className={css(styles.maskImage)} />
    <div>
      <div className={css(styles.name)}>
        {props.name}
      </div>
      <div>
        {props.description}
      </div>
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    border: '1px solid #dddddd',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  active: {

  },
  inactive: {
    opacity: 0.5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: '110%',
    lineHeight: '100%',
    marginBottom: 5,
    fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  maskImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  }
})

export default Mask;
