import React from 'react'
import { Provider } from 'react-redux'
import ClassComponent from '../ClassComponent'

// Tester
import TestRenderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

const desktopProps = {
  device: 'desktop',
  isPhone: false,
}

const mobileProps = {
  device: 'iphone',
  isPhone: true,
}

describe('ClassComponent Component', () => {
  describe('Render', () => {
    it('[ClassComponent] Default render desktop', () => {
      const store = mockStore({
        device: desktopProps,
      })
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <ClassComponent />
        </Provider>,
      )
      expect(testRenderer).toMatchSnapshot()
    })
    it('[ClassComponent]: Default render mobile', () => {
      const store = mockStore({
        device: mobileProps,
      })
      const mobileRender = TestRenderer.create(
        <Provider store={store}>
          <ClassComponent />
        </Provider>,
      )
      const instance = mobileRender.root
      expect(mobileRender).toMatchSnapshot()
      expect(instance.findByProps({ id: 'mobile' }).props).not.toBeFalsy()
    })
  })
})
