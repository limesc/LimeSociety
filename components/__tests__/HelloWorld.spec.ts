import { mount } from '@vue/test-utils'

import HelloWorld from '~/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('is a Vue component', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
