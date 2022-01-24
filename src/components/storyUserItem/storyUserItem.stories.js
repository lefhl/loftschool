import { storyUserItem } from './index.js'

export default {
  title: 'storyUserItem',
  component: { storyUserItem },
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
  components: { storyUserItem },
  data () {
    return {
      args
    }
  },
  template: '<storyUserItem v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://picsum.photos/200/300',
  username: 'Имя юзера'
}
