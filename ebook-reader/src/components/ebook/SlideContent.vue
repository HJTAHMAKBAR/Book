<template>
<div class="ebook-slide-contents">
  <scroll class="slide-contents-list" :top="138" :bottom="0" ref="scroll">
    <div class="slide-contents-item" v-for="(item, index) in navigation" :key="index">
      <span class="slide-contents-item-label" :style="catalogStyle(item)" :class="{'selected': chapter === index}" @click="switchChapter(item.href)">{{item.label}}</span>
      <span class="slide-contents-item-page"></span>
    </div>
  </scroll>
</div>
</template>

<script>
import Scroll from "@/components/tools/Scroll";
import {mixin} from "@/utils/mixin";
import {px2rem} from "@/utils/utils";

export default {
  name: "SlideContent",
  mixins: [mixin],
  components: {
    Scroll
  },
  methods: {
    catalogStyle(item) {
      return {
        marginLeft: `${px2rem(item.level * 15)}`
      }
    },
    switchChapter(target) {
      this.display(target, () => {
        this.hideTitleAndMenu()
      })
    }
  }

}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.ebook-slide-contents {
  .slide-contents-list {
    padding: 0 px2rem(15);
    box-sizing: border-box;
    .slide-contents-item {
      display: flex;
      padding: px2rem(20) 0;
      box-sizing: border-box;
      .slide-contents-item-label {
        flex: 1;
        font-size: px2rem(14);
        line-height: px2rem(16);
        @include ellipsis
      }
      .slide-contents-item-page {}
    }
  }
}
</style>
