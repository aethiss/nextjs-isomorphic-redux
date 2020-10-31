/* eslint-disable react/prop-types */
import React, { Component } from 'react'

// Next
import Head from 'next/head'

// Redux Actions
import { setDeviceConfig } from '../src/redux/actions/deviceActions'

// Component
import HomePage from '../src/components/containers/homepage/HomePage'
import Footer from '../src/components/commons/footer/Footer'

// Styles
import styles from '../styles/Home.module.css'
import ClassComponent from '../src/components/containers/classComponent/ClassComponent'

class Home extends Component {
  static async getInitialProps(context) {
    const { req, reduxStore } = context
    const userAgent = req
      ? req.headers['user-agent']
      : // eslint-disable-next-line no-undef
        window.navigator.userAgent

    await reduxStore.dispatch(setDeviceConfig(userAgent))

    return {
      page: 'index',
      device: reduxStore.getState().device,
    }
  }

  render() {
    const { device } = this.props
    return (
      <div className={styles.container}>
        <Head>
          <title>SRR Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <ClassComponent device={device} />
        <Footer />
      </div>
    )
  }
}

export default Home
