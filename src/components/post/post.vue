<template>
  <div class="post">
    <div class="post__user">
      <user :avatar="avatar" :username="username"/>
    </div>
    <div class="post__card">
      <slot name="card" />
    </div>

    <toggler @toggle="isSpoilerOpen = !isSpoilerOpen"/>

    <div class="post__comments" v-show="isSpoilerOpen">
      <div class="post__comment" v-for="(c, idx) in comments" :key="idx">
        <b>{{c.name}}</b>
        <span>{{c.comment}}</span>
      </div>
    </div>

    <div class="post__date">15 may</div>
  </div>
</template>

<script>
import { toggler } from '@comp/toggler'
import { user } from '@comp/user'

export default {
  name: 'post',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  components: {
    toggler,
    user
  },
  data () {
    return {
      isSpoilerOpen: false,
      comments: [
        { name: 'joshua_l', comment: 'Enable performance measuring in production, at the user\'s request' },
        { name: 'Camille', comment: 'It\'s Impossible to Rename an Inherited Slot' },
        { name: 'Marselle', comment: 'transition-group with flex parent causes removed items to fly' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .post {
    & + & {
      margin-top: 24px;
    }
    &__user {
      margin-bottom: 16px;
    }
    &__card {
      margin-bottom: 18px;
    }
    &__comments {
      padding-top: 10px;
    }
    &__comment {
      margin-bottom: 6px;
      font-size: 14px;
      b {
        margin-right: 8px;
      }
    }
    &__date {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 10%;
      color: rgba(#000, 0.4);
      margin-top: 10px;
    }
  }
</style>
