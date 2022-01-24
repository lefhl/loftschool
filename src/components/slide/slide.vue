<template>
  <div class="slide">
    <div class="slide__header">
      <div class="slide__progress">
        <x-progress :percent="70"/>
      </div>
      <user :avatar="avatar" :username="username" size="xs"/>
    </div>
    <div class="slide__content-wrap">
      <div class="slide__content">
      <img class="slide__img" src="@assets/images/demo.png" alt="">
      <p>
        <strong>The easiest</strong>
         way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
      </p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
      <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
    </div>
    </div>
    <footer class="slide__footer">
      <btn class="slide__btn">Follow</btn>
    </footer>
  </div>
</template>

<script>
import { user } from '@comp/user'
import { progress } from '@comp/progress'
import { btn } from '@comp/btn'

export default {
  name: 'slide',
  components: { user, xProgress: progress, btn },
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
    max-width: 375px;
    padding-top: 80px;
    font-size: 14px;

    &__header {
      position: absolute;
      padding: 8px 12px 12px;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #CACACA;
      background: rgba(0, 0, 0, 0.0001);
    }

    &__progress {
      margin-bottom: 12px;
    }

    &__content-wrap {
      position: relative;

      &::after {
        content: "";
        height: 42px;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.051) 100%);
        pointer-events: none;
        position: absolute;

      }
    }

    &__content {
      max-height: 500px;
      overflow-y: auto;
      padding-left: 18px;
      padding-right: 15px;
      margin-right: 12px;
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #AFAFAF;
        border-radius: 10px;

      }

      p {
        margin-bottom: 14px;
      }
    }

    &__img {
      margin-bottom: 24px;
    }

    &__footer {
      border-top: 1px solid #CACACA;
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
  }
</style>
