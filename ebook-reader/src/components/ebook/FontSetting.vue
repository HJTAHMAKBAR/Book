<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="isMenuVisible && isSettingVisible === 4">
      <div class="setting-font-size">
        <div class="icon-wrapper">
          <span class="icon-Aminus" @click="decFontSize"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-Aplus" @click="incFontSize"></span>
        </div>
        <alert-msg ref="AlertMsg"></alert-msg>
      </div>
      <div class="setting-font-family" @click="showFontFamilySettingList">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">字体</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon-right"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mixin} from "@/utils/mixin";
import AlertMsg from "@/components/tools/AlertMsg";
import {saveFontSize} from "@/utils/localStorage";

export default {
  mixins: [mixin],
  components: {
    AlertMsg
  },
  methods: {
    decFontSize() {
      let curFontSize = this.defaultFontSize
      if (curFontSize <= 8) {
        this.$refs.AlertMsg.alertDialog('字体已为最小')
      } else {
        curFontSize -= 1
        this.setDefaultFontSize(curFontSize)
        saveFontSize(this.bookName, curFontSize)
        this.currentBook.rendition.themes.fontSize(curFontSize + 'px')
      }
    },
    incFontSize() {
      let curFontSize = this.defaultFontSize
      if (curFontSize >= 20) {
        this.$refs.AlertMsg.alertDialog('字体已为最大')
      } else {
        curFontSize += 1
        this.setDefaultFontSize(curFontSize)
        saveFontSize(this.bookName, curFontSize)
        this.currentBook.rendition.themes.fontSize(curFontSize + 'px')
      }
    },
    showFontFamilySettingList() {
      this.setIsFontFamilyVisible(true)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 101;
  width: 100%;
  height: px2rem(60);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  display: flex;
  flex-direction: row;
  .setting-font-size {
    flex: 2;
    display: flex;
    height: 100%;

    .icon-wrapper {
      flex: 1;
      @include center;

      .icon-Aminus {
        font-size: px2rem(24);
        font-weight: bold;
      }

      .icon-Aplus {
        font-size: px2rem(26);
        font-weight: bold;
      }
    }

  }
  .setting-font-family {
    flex: 1;
    font-size: px2rem(14);
    @include center
    .setting-font-family-text-wrapper {
      @include center
      .setting-font-family-text {
        font-weight: bold;
      }
    }
    .setting-font-family-icon-wrapper {
      .icon-right {
        font-weight: bold;
        @include center
      }
    }
  }
}
</style>
