import { slide } from './index.js'

export default {
  title: 'slide',
  component: { slide },
}

const template = (args) => ({
  components: { slide },
  data () {
    return {
      args
    }
  },
  template: '<slide />'
})

export const Default = template.bind({})

