<template>
  <transition name="hot-search-move">
    <scroll class="hot-search-wrapper"
            @onScroll="onScroll"
            ref="scroll">
      <slide-search label="热门搜索"
                    btn="换一批"
                    :hotSearch="searchList.hotSearch"></slide-search>
      <div class="line"></div>
      <slide-search label="搜索历史"
                  btn="清空"
                  :hotSearch="searchList.historySearch"></slide-search>
    </scroll>
  </transition>
</template>

<script>
import Scroll from "@/components/tools/Scroll";
import SlideSearch from "@/components/home/SlideSearch";
import {storeHomeMixin} from "@/utils/mixin";

export default {
  name: "SearchList",
  mixins: [storeHomeMixin],
  components: {
    Scroll,
    SlideSearch
  },
  data() {
    return {
      searchList: {
        hotSearch: [
          {
            type: 1,
            text: 'Self-Reported Population Health',
            num: '1.8万'
          },
          {
            type: 1,
            text: 'Library and Information Sciences',
            num: '1.1万'
          },
          {
            type: 1,
            text: 'Global Business Strategy',
            num: '1.3万'
          }
        ],
        historySearch: [
          {
            type: 2,
            text: 'Computer Science'
          },
          {
            type: 2,
            text: 'ePub'
          }
        ]
      }
    }
  },
  methods: {
    onScroll(offsetY) {
      this.setHotSearchOffsetY(offsetY)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.hot-search-wrapper {
  width: 100%;
  height: px2rem(300)!important;
  z-index: 250;
  background: #FFEFD5;
  border-radius: px2rem(8);
  .line {
    width: 100%;
    height: 0;
    border-top: px2rem(1) solid #eee;
    margin: px2rem(10) 0;
  }
}
</style>
