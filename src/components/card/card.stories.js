import { card } from './index.js'

export default {
  title: 'card',
  component: { card }
}

const template = () => ({
  components: { card },
  template: '<card />'
})

export const Default = template.bind({})
