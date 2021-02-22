<template>
  <transition name="popup-slid-up">
    <div class="font-family-list" v-show="isFontFamilyVisible">
      <div class="font-family-title">
        <div class="font-family-title-icon" @click="closeFontFamilySettingList">
          <span class="icon-down2"></span>
        </div>
        <span class="font-family-title-text">选择字体</span>
      </div>
      <div class="font-family-list-wrapper">
        <div class="list-item" v-for="(item, index) in fontFamilyList" :key="index"
             @click="choseFontFamily(item.fontType)">
          <div class="list-item-text" :class="{'selected': isSelected(item)}">{{ item.fontType }}</div>
          <div class="list-item-select" v-if="isSelected(item)">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mixin} from "@/utils/mixin";
import {FONT_FAMILY} from "@/utils/book";
import {saveFontFamily} from "@/utils/localStorage";

export default {
  mixins: [mixin],
  data() {
    return {
      fontFamilyList: FONT_FAMILY
    }
  },
  methods: {
    closeFontFamilySettingList() {
      this.setIsFontFamilyVisible(false)
    },
    isSelected(item) {
      return this.defaultFontFamily === item.fontType
    },
    choseFontFamily(fontType) {
      this.setDefaultFontFamily(fontType)
      saveFontFamily(this.bookName, fontType)
      this.currentBook.rendition.themes.font(fontType)
    }
  }
}
</script>

<style lang="scss" ref="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.font-family-list {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 120;
  width: 100%;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);
  background: white;

  .font-family-title {
    padding: px2rem(15);
    bord-bottom: px2rem(1) solid #b8b9bb;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    @include center;

    .font-family-title-icon {
      position: absolute;
      left: px2rem(15);
      top: 0;
      height: 100%;
      @include center;
      font-size: px2rem(16);
      font-weight: bold;
    }

    .font-family-title-text {
      font-size: px2rem(14);
      font-weight: bold;
    }
  }

  .font-family-list-wrapper {
    .list-item {
      display: flex;
      padding: px2rem(12);

      .list-item-text {
        flex: 1;
        font-size: px2rem(14);
        text-align: left;

        &.selected {
          color: mediumaquamarine;
          font-weight: bold;
        }
      }

      .list-item-select {
        flex: 1;
        text-align: right;
        font-size: px2rem(14);
        font-weight: bold;
        color: mediumaquamarine;
      }
    }

  }
}

</style>
