import { userBar } from './index.js'

export default {
  title: 'userBar',
  component: { userBar }
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
