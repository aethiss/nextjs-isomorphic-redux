import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Styles
import styles from '../../../../styles/Home.module.css'

@connect(
  (state) => ({
    device: state.device,
  }),
  {},
)
class ClassComponent extends Component {
  render() {
    const { device } = this.props
    return (
      <main className={styles.main}>
        <p id={device.isPhone ? 'mobile' : 'desktop'}>
          This is a Server Side Render Page
        </p>
        <p>This example use a React Class Component Connected with Redux</p>
        <p>
          Start edit <code>/components/classComponent/ClassComponent.js</code>{' '}
          to play with this.
        </p>
        <p>
          You are viewing with a {device.isPhone ? 'Mobile' : 'Desktop'}.
          <br />
          {device.isPhone && `Your Mobile is ${device.device}`}
        </p>
        <p>
          please visit{' '}
          <u>
            <a href='https://developers.google.com/speed/pagespeed/insights/?hl=EN'>
              Google Seo Analyze
            </a>
          </u>{' '}
          to test this page
        </p>
      </main>
    )
  }
}

ClassComponent.propTypes = {
  device: PropTypes.object,
}

export default ClassComponent
