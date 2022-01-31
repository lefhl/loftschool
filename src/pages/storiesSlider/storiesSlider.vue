<template>
  <div class="stories-slider">
    <div class="stories-slider__container">
      <ul class="stories" :style="{transform: `translateX(${-1 * slideIdx * 378       }px)`}">
        <li class="stories__item" v-for="(trend, idx) in trendings" :key="trend.id">
          <stories-slide
            :data="getStoryData(trend)"
            :active="slideIdx === idx"
            :btnsShown="activeBtns"
            :loading="slideIdx === idx && loading"
            @toggleSlide="toggleSlide"
            @onProgressFinish="toggleSlide"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { storiesSlide } from '@comp/slide'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  components: { storiesSlide },
  data () {
    return {
      slideIdx: 0,
      loading: false,
      btnsShown: false
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    activeBtns () {
      if (!this.btnsShown) return []
      if (this.slideIdx === 0) return ['next']
      if (this.slideIdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  async created () {
    const { id } = this.$route.params
    await this.getTrendings()
    await this.fetchReadmeForActiveSlide()
    if (id) {
      this.slideIdx = this.trendings.findIndex(item => +item.id === +id) || 0
    }
  },
  methods: {
    ...mapActions({
      getTrendings: 'trendings/getTrendings',
      fetchReadme: 'trendings/getReadme'
    }),
    async fetchReadmeForActiveSlide () {
      this.loading = true
      this.btnsShown = false
      const { id, owner, name } = this.trendings[this.slideIdx]

      try {
        await this.fetchReadme({ id, owner: owner.login, repo: name })
      } catch (err) {
        console.err(err)
        throw new Error(err)
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async toggleSlide (direction) {
      if (this.slideIdx === this.trendings.length - 1 && direction === 'next') return
      this.slideIdx = this.slideIdx + (direction === 'prev' ? -1 : 1)
      await this.fetchReadmeForActiveSlide()
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }

  }
}
</script>

<style lang="scss" scoped>
  .stories-slider {
    background-color: #101010;
    height: 100vh;
  }

  .stories {
    position: absolute;
    left: calc(50% - 188px);
    display: flex;
    align-items: center;
    height: 100vh;
    transition: .4s;
    gap: 24px;
  }
</style>
