import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Styles
import styles from '../../../../styles/Home.module.css'

class HomePage extends Component {
  render() {
    return (
      <main className={styles.main}>
        <h3 className={styles.title}>
          Aethiss Isomorphic App with <a href='https://nextjs.org'>Next.js!</a>
        </h3>

        <div className={styles.grid}>
          <Link href='/SSR'>
            <a className={styles.card}>
              <h3>SSR Page &rarr;</h3>
              <p>Example of Server Side Render Page</p>
            </a>
          </Link>

          <Link href='/CSR'>
            <a className={styles.card}>
              <h3>CSR Page &rarr;</h3>
              <p>Example of Client Side Render Page (No SEO)</p>
            </a>
          </Link>

          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>
    )
  }
}

export default HomePage
