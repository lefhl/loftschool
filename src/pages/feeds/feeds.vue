<template>
  <topline>
    <template #headline>
        <icon name="logo" class="logo" />
        <user-bar />
    </template>
    <template #content>
      <div class="stories-wrapper">
        <ul class="stories">
        <li v-for="s in stories" :key="s.id" class="stories__item">
          <story-user-item
            :data="getStoryData(s)"
            @click="gotoSliderStorie(s.id)"
          />
        </li>
      </ul>
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
      ]
    }
  },
  async created () {
    this.getTrendings()
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
    gotoSliderStorie (id) {
      console.log('click')
      this.$router.push({ name: 'stories', params: { id } })
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

  &::after {
    content: "";
    position: absolute;
    height: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background-image: linear-gradient(to right, rgba(#fafafa, 0.25) 50%, rgba(#fafafa, 1) 100%);
    right: 0;
    height: 100%;
    pointer-events: none;
  }
}

.stories {
  display: flex;
  gap: 37px;
  overflow-x: scroll;
  &__item {
    flex-shrink: 0;
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
