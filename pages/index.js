/* eslint-disable react/prop-types */
import React, { Component } from 'react'

// Next
import Head from 'next/head'

// Component
import HomePage from '../src/components/containers/homepage/HomePage'
import Footer from '../src/components/commons/footer/Footer'

// Styles
import styles from '../styles/Home.module.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>SRR Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <HomePage />
        <Footer />
      </div>
    )
  }
}

export default Home
