import React from 'react'
import Footer from '../Footer'
import TestRenderer from 'react-test-renderer'

describe('Footer Component', () => {
  const testRenderer = TestRenderer.create(<Footer />)
  describe('Render', () => {
    it('[Footer] Default render', () => {
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
