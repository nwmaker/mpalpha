/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Welcome to MPost"', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).toEqual('Welcome to MPost')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Welcome to MPost"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
