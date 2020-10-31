import React from 'react'
import TestRenderer from 'react-test-renderer'
import FunctionalComponent from '../FunctionalComponent'

describe('FunctionalComponent', () => {
  describe('Render', () => {
    it('[FunctionalComponent]: Should render loading default page', () => {
      const mobileRender = TestRenderer.create(<FunctionalComponent />)
      expect(mobileRender).toMatchSnapshot()
    })
  })
})
