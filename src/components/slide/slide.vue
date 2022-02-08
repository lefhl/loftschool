<template>
  <div class="slide" :class="{ active }">
    <div class="slide__header">
      <div class="slide__progress">
        <x-progress
          :active="active"
          @onProgressFinish="$emit('OnProgressFinish', 'next')"
        />
      </div>
      <user :avatar="data.userAvatar" :username="data.username" size="xs" />
    </div>
    <div class="slide__content-wrap">
      <div class="slide__content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <template v-else>
          <div
            v-if="data.content?.length"
            class="slide_content-inner"
            v-html="data.content"
          ></div>
          <placeholder v-else />
        </template>
      </div>
    </div>
    <footer class="slide__footer" >
      <btn
        :loading="data.following.loading"
        :theme="data.following.status ?  'grey' : 'green'"
        class="slide__btn"
        @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
      >
        {{data.following.status ? 'Unfollow' : 'Follow'}}
      </btn>
    </footer>
    <template v-if="active">
      <button
        @click="$emit('toggleSlide', 'prev')"
        v-show="btnsShown.includes('prev')"
        class="slide__toggle-btn"
      >
        <icon name="arrowPrev" />
      </button>
      <button
        @click="$emit('toggleSlide', 'next')"
        v-show="btnsShown.includes('next')"
        class="slide__toggle-btn slide__next-btn"
      >
        <icon name="arrowNext" />
      </button>
    </template>
  </div>
</template>

<script>
import { user } from '@comp/user'
import { xProgress } from '@comp/progress'
import { btn } from '@comp/btn'
import { spinner } from '@comp/spinner'
import { placeholder } from '@comp/placeholder'
import Icon from '@assets/icons/icon.vue'

export default {
  name: 'storiesSlide',
  components: { user, xProgress, btn, spinner, placeholder, icon: Icon },
  emits: ['toggleSlide', 'onFollow', 'onUnFollow'],
  props: {
    data: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  data () {
    return {
      avatar: 'https://picsum.photos/200/300',
      username: 'React.reposit'
    }
  }
}
</script>

<style lang="scss">
.slide {
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  width: 376px;
  padding-top: 80px;
  font-size: 14px;
  position: relative;

  &.active {
    margin: 0 12px;
  }

  .loader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__header {
    position: absolute;
    padding: 8px 12px 12px;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #cacaca;
    background: rgba(0, 0, 0, 0.0001);
  }

  &__progress {
    margin-bottom: 12px;
  }

  &__content-wrap {
    position: relative;
    overflow: visible;
    &::after {
      content: "";
      height: 42px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.051) 100%
      );
      pointer-events: none;
      position: absolute;
    }
  }

  &__content {
    height: 400px;
    overflow-y: auto;
    padding-left: 18px;
    padding-right: 15px;
    margin-right: 12px;
    scrollbar-width: thin;
    transition: height 0.3s ease;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #afafaf;
      border-radius: 10px;
    }

    p {
      margin-bottom: 14px;
      line-height: 1.6;
    }

    .active & {
      height: 500px;
    }
  }

  &__img {
    margin-bottom: 24px;
  }

  &__footer {
    border-top: 1px solid #cacaca;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    justify-content: center;
  }

  &__btn {
    max-width: 270px;
    width: 100%;
    text-align: center;
  }

  &__toggle-btn {
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: -20px;
    path.arrow {
      transition: fill 0.15s ease;
    }

    &:hover {
      path.arrow {
        fill: #31ae54;
      }
    }
  }

  &__next-btn {
    left: auto;
    right: -20px;
    transform: translate(100%, -50%);
    z-index: 10;
  }
}
</style>
