import { topline } from './index.js'
import icon from '@assets/icons/icon.vue'
import { userBar } from '@comp/userBar'
import { storyUserItem } from '@comp/storyUserItem'

export default {
  title: 'topline',
  component: { topline },
  subcomponents: {
    icon,
    userBar,
    storyUserItem
  }
}

const template = () => ({
  components: {
    topline,
    icon,
    userBar
  },

  template: `
  <topline>
    <template #headline>
      <div class="logo">
        <icon name="logo" class="logo" />
      </div>
      <user-bar />
    </template>
  </topline>`
})

export const Default = template.bind({})

const WithStoriesTemplate = (args) => ({
  components: { topline, icon, userBar, storyUserItem },
  props: Object.keys(args),
  data () {
    return {
      args
    }
  },
  template: `
  <topline>
    <template #headline>
      <div class="logo">
        <icon name="logo" class="logo" />
      </div>
      <user-bar />
    </template>
    <template #content>
      <ul class="stories" style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        <li v-for="(el, idx) in 10" :key="idx" class="stories__item">
          <story-user-item
            :username="args.username"
            :avatar="args.avatar"
          />
        </li>
      </ul>
    </template>
  </topline>`
})

export const WithStories = WithStoriesTemplate.bind({

})

// WithStories.args = {
//   avatar: ''
// }

WithStories.args = {
  avatar: 'https://picsum.photos/200/300',
  username: 'Имя юзера'
}
