import { toggler } from './index.js'
import { action } from '@storybook/addon-actions'

const methods = {
  toggle: action('toggle')
}

export default {
  title: 'toggler',
  component: { toggler }
}

const template = () => ({
  components: { toggler },
  template: '<toggler @toggle="toggle"/>',
  methods

})

export const Default = template.bind({})
