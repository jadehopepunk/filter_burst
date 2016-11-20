import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Slider from 'rc-slider'
import SliderCss from 'rc-slider/assets/index.css'
import Mask from './mask'

const FeedSettings = (props) => (
  <div>
    <div className={css(styles.sliders)}>
      <h3>Feed diversity</h3>      
      <Slider defaultValue={50} min={0} max={100} style={{width: '500'}} />
      <div className={css(styles.sliderLabels)}>
        <div className={css(styles.leftLabel)}>Safe/Comfortable</div>
        <div className={css(styles.rightLabel)}>Diverse</div>
      </div>
    </div>
    <div>
      <h3>You are</h3>
      <Mask name="Valentine" description="friends and family" />
      <Mask name="Locke" description="openly gay" active={true} />
      <Mask name="Demosthenes" description="work and education" />
    </div>
  </div>
);

const styles = StyleSheet.create({
  sliders: {
    marginBottom: 40
  },
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
