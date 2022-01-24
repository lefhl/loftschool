import { post } from './index.js'

export default {
  title: 'post',
  component: { post },
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { post },
  data () {
    return {
      args
    }
  },
  template: '<post v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/200/300',
  username: 'Имя юзера'
}
