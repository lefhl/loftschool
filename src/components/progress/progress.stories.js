import { progress } from './index.js'

export default {
  title: 'progress',
  component: { progress },
  argTypes: {
    stars: {
      control: { type: 'number' }
    }

  }
}

const template = (args) => ({
  components: { progress },
  data () {
    return {
      args
    }
  },
  template: '<progress />'
})

export const Default = template.bind({})
