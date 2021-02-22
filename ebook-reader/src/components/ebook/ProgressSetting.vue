<template>
  <div class="setting-wrapper" v-if="isMenuVisible && isSettingVisible === 0">
    <div class="setting-progress">
      <div class="chapter-name-wrapper">
        <span class="chapter-name-text">{{getChapterName}}</span>
        <span>({{ bookAvailable ? progress + '%' : '加载中...' }})</span>
        <span class="icon-right"></span>
      </div>
      <div class="progress-wrapper">
        <div class="progress-text-wrapper" @click="preChapter">
          <span class="progress-text">上一章</span>
        </div>
        <input class="progress" type="range"
               max="100"
               min="0"
               step="1"
               @change="onProgressChange($event.target.value)" @input="onProgressInput($event.target.value)"
               :value="progress"
               :disabled="!bookAvailable"
               ref="progress">
        <div class="progress-text-wrapper" @click="nextChapter">
          <span class="progress-text">下一章</span>
        </div>
      </div>
      <div class="text-wrapper">
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/utils/mixin";

export default {
  mixins: [mixin],
  methods: {
    onProgressChange(progress) {
      this.setProgress(progress).then(() => {
        this.displayProgress()
        this.darkenLine()
      })
    },
    displayProgress() {
      const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
      this.display(cfi)
    },
    onProgressInput(progress) {
      this.setProgress(progress).then(() => {
        this.displayProgress()
        this.darkenLine()
      })
    },
    preChapter() {
      if (this.chapter > 0 && this.bookAvailable) {
        this.setChapter(this.chapter - 1).then(() => {
          const section = this.currentBook.section(this.chapter)
          if (section && section.href) {
            this.display(section.href)
          }
        })
      }
    },
    nextChapter() {
      if (this.chapter < this.currentBook.spine.length - 1 && this.bookAvailable) {
        this.setChapter(this.chapter + 1).then(() => {
          const section = this.currentBook.section(this.chapter)
          if (section && section.href) {
            this.display(section.href)
          }
        })
      }
    },
    darkenLine() {
      if (this.$refs.progress) {
        this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
      }
    }
  },
  updated() {
    this.darkenLine()
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 102;
  width: 100%;
  height: px2rem(60);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

  .setting-progress {
    position: relative;
    width: 100%;
    height: 100%;

    .chapter-name-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: px2rem(30);
      font-size: px2rem(12);
      @include center
      .chapter-name-text {
        @include ellipsis
      }
    }

    .progress-wrapper {
      width: 100%;
      height: 100%;
      @include center;
      padding: 0 px2rem(20);
      box-sizing: border-box;
      .progress-text-wrapper {
        width: px2rem(50);

        .progress-text {
          font-size: px2rem(10);
          position: relative;
          text-align: center;
          @include center
        }
      }

      .progress {
        width: 100%;
        -webkit-appearance: none;
        height: px2rem(2);
        margin: 0 px2rem(10);

        &:focus {
          outline: none;
        }

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: px2rem(20);
          width: px2rem(20);
          border-radius: 50%;
          background: white;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
          border: px2rem(1) solid #ddd;
        }
      }
    }
  }
}
</style>
