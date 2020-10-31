import React from 'react'
import HomePage from '../HomePage'
import TestRenderer from 'react-test-renderer'

describe('HomePage Component', () => {
  describe('Render', () => {
    it('[HomePage] Default render desktop', () => {
      const testRenderer = TestRenderer.create(<HomePage />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
