import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import HelloWord from '~/components/HelloWord.vue'
// The component to test

test('displays message', () => {
  const wrapper = mount(HelloWord, {
    props: {
      name: 'Hello world',
    },
  })
  console.log(wrapper.get('h1').text())

  expect(wrapper.text()).toBeTruthy()

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello worldd')
})
