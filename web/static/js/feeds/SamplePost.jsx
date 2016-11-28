import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'
import Lorem from 'react-lorem-component'

const typeIcons = {
  idea: 'lightbulb-o',
  entertainment: 'glass',
  personal: 'user',
  news: 'newspaper-o',
}

const SamplePost = (props) => (
  <div className={css(styles.container)}>
    <div className={css(styles.indicatorBase, styles[`${props.type}Indicator`])}>
      <FontAwesome name={typeIcons[props.type]} size='2x' />
    </div>
    <div className={css(styles.content)}>
      {props.text && <p>{props.text}</p>}
      <Lorem count={props.text ? 1 : 2} />
    </div>
  </div>
)

const styles = StyleSheet.create({
  container: {
    border: '1px solid #dddddd',
    marginBottom: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  indicatorBase: {
    paddingTop: 10,
    paddingBottom: 10,
    minWidth: 40,
    textAlign: 'center',
    fontSize: '80%',
  },
  ideaIndicator: {
    backgroundColor: '#f4c45d',
  },
  entertainmentIndicator: {
    backgroundColor: '#42d4f4',
  },
  personalIndicator: {
    backgroundColor: '#f442ad',
  },
  newsIndicator: {
    backgroundColor: '#7b92e0',
  },
  content: {
    padding: 10,
  }
})


export default SamplePost;
