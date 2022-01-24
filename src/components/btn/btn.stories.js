import { btn } from './index.js'

export default {
  title: 'btn',
  component: { btn }
}

const template = (args) => ({
  components: { btn },
  data () {
    return {
      args
    }
  },
  template: '<btn>Имя кнопки</btn>'
})

export const Default = template.bind({})
