import React from 'react'

// Styles
import styles from '../../../../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/aethiss?tab=repositories'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by aethiss@gmail.com (Git)
      </a>
    </footer>
  )
}

export default Footer
