<template>
  <ul class="issues">
    <li v-for="issue, idx in items" :key="idx" class="issues__item">
      <b>{{issue.user.login}}</b>
      <span>{{issue.body}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'issues',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .issues {
    &__item {
      margin-bottom: 6px;
    font-size: 14px;
    b {
      margin-right: 8px;
    }
    }
  }
</style>
