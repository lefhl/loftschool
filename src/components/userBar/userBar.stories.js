import { userBar } from './index.js'

export default {
  title: 'userBar',
  component: { userBar },
  argTypes: {
    stars: {
      control: { type: 'number' }
    },
    forks: {
      control: { type: 'number' }
    }
  }
}

const template = (args) => ({
  components: { userBar },
  data () {
    return {
      args
    }
  },
  template: '<user-bar v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  stars: '123',
  forks: '4'
}
