import { stats } from './index.js'

export default {
  title: 'stats',
  component: { stats },
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
  components: { stats },
  data () {
    return {
      args
    }
  },
  template: '<stats v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  stars: '123',
  forks: '4'
}
