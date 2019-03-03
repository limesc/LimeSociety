import { mount } from 'enzyme'
import React from 'react'

import App from './../login'

describe('pages/', () => {
  describe('login', () => {
    it('h1 표시', () => {
      const app = mount(<App />)
      expect(app.find('h1').text()).toEqual('로그인')
    })
  })
})
