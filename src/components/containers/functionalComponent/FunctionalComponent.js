import React, { useState, useEffect } from 'react'

// Lib
import { detectDevice } from '../../../libs/detectDevice'
import styles from '../../../../styles/Home.module.css'

const FunctionalComponent = () => {
  const [mobile, setMobile] = useState(false)
  const [pageLoaded, setPageLoad] = useState(false)

  useEffect(() => {
    if (!mobile) {
      // eslint-disable-next-line no-undef
      const userAgent = window?.navigator.userAgent
      detectDevice(userAgent).then((deviceDetails) => {
        // eslint-disable-next-line no-undef
        setTimeout(() => {
          setMobile(deviceDetails.isPhone)
          setPageLoad(true)
        }, 1000)
      })
    }
  }, [])

  return (
    <main className={styles.main}>
      {pageLoaded ? (
        <div>
          <p>This is Client Side Page</p>
          <p>
            You viewing this page with {mobile ? `mobile` : `desktop`} device !
          </p>
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </main>
  )
}

export default FunctionalComponent
