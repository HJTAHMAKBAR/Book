<template>
  <div>
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': !isMenuVisible||isSettingVisible>0}" v-show="isMenuVisible">
        <progress-setting></progress-setting>
        <div class="icon-wrapper">
          <span class="icon-menu" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-search" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(4)"></span>
        </div>
      </div>
    </transition>
    <font-setting></font-setting>
    <font-family-setting></font-family-setting>
    <theme-setting></theme-setting>
    <catalogue-slide></catalogue-slide>
    <content-search></content-search>

  </div>
</template>

<script>
import {mixin} from "../../utils/mixin";
import FontSetting from "@/components/ebook/FontSetting";
import FontFamilySetting from "@/components/ebook/FontFamilySetting";
import ThemeSetting from "@/components/ebook/ThemeSetting";
import ProgressSetting from "@/components/ebook/ProgressSetting";
import CatalogueSlide from "@/components/ebook/CatalogueSlide";
import ContentSearch from "@/components/ebook/ContentSearch";

export default {
  components: {ProgressSetting, FontFamilySetting, FontSetting, ThemeSetting, CatalogueSlide, ContentSearch},
  mixins: [mixin],
  comments: {
    FontSetting,
  },
  methods: {
    showSetting(type) {
      this.setIsSettingVisible(type)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 102;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  font-size: px2rem(20);

  &.hide-box-shadow {
    box-shadow: none;
  }

  .icon-wrapper {
    flex: 1;
    @include center;

    .icon-progress {
      font-size: px2rem(28);
    }

    .icon-bright {
      font-size: px2rem(24);
    }
  }
}
</style>
