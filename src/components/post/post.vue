<template>
  <div class="post">
    <div class="post__user">
      <user :avatar="data.owner?.avatar_url" :username="data.owner.login" />
    </div>
    <div class="post__card">
      <slot name="card" />
    </div>

    <div class="post__comments">

      <issues :loading="issuesloading" :items="issue_items" @toggleVisibility="handleToggle"/>
      <!-- <div v-else class="post__comment" v-for="(issue, idx) in issues" :key="idx">
        <b>{{issue.user.login}}</b>
        <span>{{issue.body}}</span>
      </div> -->
    </div>

    <div class="post__date">15 may</div>
  </div>
</template>

<script>
import { user } from '@comp/user'
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
    user,
    issues
  },

  data () {
    return {
      issuesloading: false
    }
  },

  computed: {
    ...mapGetters('trendings', {
      repoIssues: 'repoIssues'
    }),
    issue_items () {
      const issues = this.repoIssues(this.$props.data.name)
      if (!issues) return []
      return issues
    }
  },
  methods: {
    ...mapActions({
      getIssuesByRepo: 'trendings/getIssuesByRepo'
    }),
    async handleToggle () {
      this.issuesloading = true
      await this.getIssuesByRepo({
        owner: this.$props.data.owner.login,
        repo: this.$props.data.name
      })
      this.issuesloading = false
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
