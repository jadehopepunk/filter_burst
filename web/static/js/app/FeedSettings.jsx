import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Slider from 'rc-slider'
import SliderCss from 'rc-slider/assets/index.css'

const FeedSettings = (props) => (
  <div>
    <label>
      Feed diversity
    </label>
    <Slider defaultValue={50} min={0} max={100} style={{width: '500'}} />
    <div className={css(styles.sliderLabels)}>
      <div className={css(styles.leftLabel)}>Safe/Comfortable</div>
      <div className={css(styles.rightLabel)}>Diverse</div>
    </div>
  </div>
);

const styles = StyleSheet.create({
  sliderLabels: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftLabel: {

  },
  rightLabel: {

  }
})

export default FeedSettings;
