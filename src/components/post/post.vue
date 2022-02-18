<template>
  <div class="post">
    <div class="post__user">
      <user :avatar="data.owner?.avatar_url" :username="data.owner.login"/>
    </div>
    <div class="post__card">
      <slot name="card" />
    </div>

    <toggler @toggle="handleToggle"/>

    <div class="post__comments" v-show="isSpoilerOpen">
      <placeholder v-if="!issues" :count="1" :withImage="false"/>
      <issues v-else :items="issues" />
      <!-- <div v-else class="post__comment" v-for="(issue, idx) in issues" :key="idx">
        <b>{{issue.user.login}}</b>
        <span>{{issue.body}}</span>
      </div> -->
    </div>

    <div class="post__date">15 may</div>
  </div>
</template>

<script>
import { toggler } from '@comp/toggler'
import { user } from '@comp/user'
import { placeholder } from '@comp/placeholder'
import { issues } from '@comp/issues'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'post',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    toggler,
    user,
    placeholder,
    issues
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
  },
  computed: {
    ...mapGetters('trendings', {
      repoIssues: 'repoIssues'
    }),
    issues () {
      const issues = this.repoIssues(this.$props.data.name)
      if (!issues) return false
      return issues
    }
  },
  methods: {
    ...mapActions({
      getIssuesByRepo: 'trendings/getIssuesByRepo'
    }),
    async handleToggle () {
      this.isSpoilerOpen = !this.isSpoilerOpen
      await this.getIssuesByRepo({
        owner: this.$props.data.owner.login,
        repo: this.$props.data.name
      })
    }
  }
}
</script>

<style lang="scss">
  .post {
    &__user {
      margin-bottom: 16px;
    }
    &__card {
      margin-bottom: 18px;
    }
    &__comments {
      padding-top: 10px;
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
