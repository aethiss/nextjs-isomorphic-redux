import React from 'react'
import TestRenderer from 'react-test-renderer'
import FunctionalComponent from '../FunctionalComponent'

jest.useFakeTimers()

import { detectDevice } from '../../../../libs/detectDevice'
jest.mock('../../../../libs/detectDevice', () => {
  // Works and lets you check for constructor calls:
  return {
    detectDevice: jest.fn().mockImplementation(() => {
      // eslint-disable-next-line no-undef
      return new Promise((resolve) => {
        resolve({ isPhone: false, device: undefined })
      })
    }),
  }
})

describe('FunctionalComponent', () => {
  describe('Render', () => {
    it('[FunctionalComponent]: Should render loading default page', () => {
      const mobileRender = TestRenderer.create(<FunctionalComponent />)
      expect(mobileRender).toMatchSnapshot()
    })
    it('[FunctionalComponent]: Should render desktop view', () => {
      TestRenderer.create(<FunctionalComponent />)
      expect(detectDevice).toHaveBeenCalled()
    })
  })
})
