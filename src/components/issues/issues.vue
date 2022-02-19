<template>
  <div>
    <toggler @toggle="toggleVisibility" />
    <div v-show="isVisible">
      <placeholder v-if="loading" :count="1" :withImage="false" />
      <ul v-else class="issues">
        <li v-for="issue, idx in items" :key="idx" class="issues__item">
          <b>{{issue.user.login}}</b>
          <span>{{issue.body}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { placeholder } from '../../components/placeholder'

export default {
  name: 'issues',
  emits: ['toggleVisibility'],
  props: {
    items: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isVisible: false
    }
  },
  components: {
    toggler,
    placeholder
  },
  methods: {
    toggleVisibility (state) {
      this.isVisible = state
      this.$emit('toggleVisibility', state)
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
