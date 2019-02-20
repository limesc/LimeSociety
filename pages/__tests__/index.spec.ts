import { mount } from '@vue/test-utils'

import Index from '~/pages/Index.vue'

describe('HomePage', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Index, {
      stubs: ['nuxt-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
