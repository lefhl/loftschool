import { user } from './index.js'

export default {
  title: 'user',
  component: { user },
  argTypes: {
    avatar: {
      control: { type: 'number' }
    },
    username: {
      control: { type: 'number' }
    }
  }
}

const template = (args) => ({
  components: { user },
  data () {
    return {
      args
    }
  },
  template: '<user v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/200/300',
  username: 'Lol kek'
}
