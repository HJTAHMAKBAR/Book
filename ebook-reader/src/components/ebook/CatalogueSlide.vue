<template>
  <transition name="fade">
    <div class="slide-content-wrapper" v-show="isMenuVisible && isSettingVisible === 1">
      <transition name="slide-right">
        <div class="content" v-if="isSettingVisible === 1">
          <div class="content-page-wrapper">
            <div class="slide-contents-book-wrapper">
              <div class="slide-contents-book-img-wrapper">
                <img :src="bookCover" alt="" class="slide-content-book-img">
              </div>
              <div class="slide-contents-book-info-wrapper">
                <div class="slide-contents-book-title">
                  <span class="title-text">{{ metadata.title }}</span>
                </div>
                <div class="slide-contents-book-creator">{{ metadata.creator }}</div>
              </div>
            </div>
            <div class="content-page-table">
              <div class="content-page-table-item" :class="{'selected': currentTab === 1}" @click="selectTab(1)">目录
              </div>
              <div class="content-page-table-item" :class="{'selected': currentTab === 2}" @click="selectTab(2)">书签
              </div>
              <div class="content-page-table-item" :class="{'selected': currentTab === 3}" @click="selectTab(3)">想法
              </div>
            </div>
            <div class="content-page">
              <component :is=currentTabType></component>
            </div>
          </div>
        </div>
      </transition>
      <div class="content-bg" @click="hideCatalogue()"></div>
    </div>
  </transition>
</template>

<script>
import {mixin} from '../../utils/mixin'
import SlideContent from "@/components/ebook/SlideContent";
import BookMark from "@/components/ebook/BookMark";
import SlideIdea from "@/components/ebook/SlideIdea";

export default {
  mixins: [mixin],
  components: {
    SlideContent,
    BookMark,
    SlideIdea
  },
  data() {
    return {
      currentTab: 1,
      currentTabType: 'SlideContent'
    }
  },
  methods: {
    hideCatalogue() {
      this.setIsMenuVisible(false)
      this.setIsSettingVisible(0)
      this.setIsFontFamilyVisible(false)
    },
    selectTab(type) {
      this.currentTab = type
      switch (type) {
        case 1:
          this.currentTabType = 'SlideContent'
          break
        case 2:
          this.currentTabType = 'BookMark'
          break
        case 3:
          this.currentTabType = 'SlideIdea'
          break
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.slide-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  display: flex;

  .content {
    flex: 0 0 85%;
    width: 85%;
    height: 100%;

    .content-page-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .content-page {
        flex: 1;
        width: 100%;
        overflow: hidden;
      }

      .slide-contents-book-wrapper {
        display: flex;
        width: 100%;
        height: px2rem(90);
        padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
        box-sizing: border-box;

        .slide-contents-book-img-wrapper {
          flex: 0 0 px2rem(45);

          .slide-content-book-img {
            width: px2rem(45);
            height: px2rem(60);
          }
        }

        .slide-contents-book-info-wrapper {
          flex: 1;
          padding: 0 px2rem(10);
          box-sizing: border-box;
          .slide-contents-book-title {
            font-size: px2rem(14);
            line-height: px2rem(16);
            @include left
            .title-text {
              @include ellipsis2(2)
            }
            @include ellipsis2(2)
          }

          .slide-contents-book-creator {
            width: px2rem(223.75);
            font-size: px2rem(12);
            margin-top: px2rem(5);
            @include ellipsis
          }
        }
      }

      .content-page-table {
        display: flex;
        flex: 0 0 px2rem(48);
        width: 100%;
        height: px2rem(48);

        .content-page-table-item {
          flex: 1;
          font-size: px2rem(14);
          @include center
        }
      }
    }
  }

  .content-bg {
    flex: 0 0 15%;
    width: 15%;
    height: 100%;
  }
}
</style>
