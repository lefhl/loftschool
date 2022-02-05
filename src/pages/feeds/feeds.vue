<template>
  <topline>
    <template #headline>
        <icon :name="'logo'" class="logo" />
        <user-bar />
    </template>
    <template #content>
      <div class="stories-wrapper" :class="{scrolled_right: is_right_scrolled, scrolled_left: is_left_scrolled}">
        <div class="stories-scroll" v-dragscroll @dragscrollmove="handleScroll">
          <ul class="stories" v-if='!is_loading'>
            <li v-for="s in stories" :key="s.id" class="stories__item">
              <story-user-item
                :data="getStoryData(s)"
              />
            </li>
          </ul>
          <ul class="stories" v-else >
            <li v-for="num in 16" :key="num" class="stories__item">
              <story-user-item
                :placeholder='is_loading'
              />
            </li>
          </ul>
        </div>
      </div>
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
import { storyUserItem } from '@comp/storyUserItem'
import { topline } from '@comp/topline'
import { userBar } from '@comp/userBar'
import { post } from '@comp/post'
import { card } from '@comp/card'

import { mapActions, mapState } from 'vuex'

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
      path: 'ProfilePic.png',
      posts: [
        { username: 'joshua_l', avatar: 'ProfilePic-1.png' },
        { username: 'Camille', avatar: 'ProfilePic-2.png' }
      ],
      is_loading: false,
      is_right_scrolled: false,
      is_left_scrolled: true
    }
  },
  async created () {
    this.is_loading = true
    await this.getTrendings()
    this.is_loading = false
  },
  computed: {
    ...mapState({
      stories: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      getTrendings: 'trendings/getTrendings'
    }),

    imagePath (name) {
      return require('./../../assets/images/' + name)
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    handleScroll ({ target }) {
      const width = target.offsetWidth
      const leftScroll = target.scrollLeft
      const fullWidth = target.scrollWidth

      this.is_right_scrolled = fullWidth - leftScroll - width - 20 < 0
      this.is_left_scrolled = leftScroll - 20 < 0
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

.stories-wrapper {
  position: relative;
  overflow: hidden;
  cursor: grab;
  padding: 0 2px;
  margin: 0 -2px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    height: 100%;
    pointer-events: none;
  }

  &::after {
    content: "";
    background-image: linear-gradient(to right, rgba(#fafafa, 0.25) 50%, rgba(#fafafa, 1) 100%);
    right: 0;
  }

  &::before {
    content: "";
    background-image: linear-gradient(to left, rgba(#fafafa, 0.25) 50%, rgba(#fafafa, 1) 100%);
    left: 0;
  }

  &.scrolled_right::after {
    display: none;
  }

  &.scrolled_left::before {
    display: none;
  }
}

.stories-scroll {
  overflow-x: scroll;
  margin-bottom: -20px;
}

.stories {
  display: flex;
  gap: 37px;
  &__item {
    flex: 0 0 80px;
  }

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
