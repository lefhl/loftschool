<template>
  <topline>
    <template #headline>
      <icon name="logo" class="logo" />
      <user-bar />
    </template>
    <template #content>
      <ul class="stories">
        <li v-for="s in stories" :key="s.id" class="stories__item">
          <story-user-item
            :avatar="imagePath(s.avatar)"
            :username="s.username"
            @onPress="onPressStory"
          />
        </li>
      </ul>
    </template>
  </topline>
  <ul class="x-container posts">
    <li v-for="(post, idx) in posts" :key="idx" class="posts__item">
      <post :username="post.username" :avatar="imagePath(post.avatar)">
        <template #card> <card /></template>
      </post>
    </li>
  </ul>
</template>

<script>
import Icon from '@assets/icons/icon.vue'
import stories from './data.json'
import { storyUserItem } from '@comp/storyUserItem'
import { topline } from '@comp/topline'
import { userBar } from '@comp/userBar'
import { post } from '@comp/post'
import { card } from '@comp/card'

export default {
  name: 'feeds',
  components: {
    topline,
    icon: Icon,
    storyUserItem,
    userBar,
    post,
    card
  },
  data () {
    return {
      stories,
      path: 'ProfilePic.png',
      posts: [
        { username: 'joshua_l', avatar: 'ProfilePic-1.png' },
        { username: 'Camille', avatar: 'ProfilePic-2.png' }
      ]
    }
  },
  methods: {
    onPressStory () {
      console.log('onPressStory')
    },
    imagePath (name) {
      return require('./../../assets/images/' + name)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 174px;
}
.icon {
  width: 40px;
  color: red;
}
.stories {
  display: flex;
  gap: 37px;
}

.posts {
  max-width: 1020px;
  padding: 0 20px;
  margin: 32px auto 0;

  &__item {
    & + & {
      margin-top: 24px;
    }
  }
}
</style>
