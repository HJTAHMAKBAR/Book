<template>
  <div class="ebook-slide-bookmark">
    <div class="slide-bookmark-title">书签 · {{bookmark ? bookmark.length : 0}}</div>
    <scroll class="slide-bookmark-list" :top="138" :bottom="0">
      <div class="slide-bookmark-item" v-for="(item, index) in bookmark" :key="index" @click="displayBookmark(item.cfi)">
        <div class="slide-bookmark-item-icon">
          <div class="icon-bookmark"></div>
        </div>
        <div class="slide-bookmark-item-text">{{item.text}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import {mixin} from "@/utils/mixin";
import Scroll from "@/components/tools/Scroll";
import {getBookmark} from "@/utils/localStorage";

export default {
  name: "BookMark",
  mixins: [mixin],
  components: {
    Scroll
  },
  data() {
    return {
      bookmark: null
    }
  },
  methods: {
    displayBookmark(target) {
      this.display(target, () => {
        this.hideTitleAndMenu()
      })
    }
  },
  mounted() {
    this.bookmark = getBookmark(this.bookName)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.ebook-slide-bookmark {
  width: 100%;
  .slide-bookmark-title {
    width: 100%;
    height: px2rem(48);
    font-size: px2rem(14);
    font-weight: bold;
    padding: 0 px2rem(15);
    box-sizing: border-box;
    @include left;
  }
  .slide-bookmark-list {
    padding: 0 px2rem(15);
    box-sizing: border-box;
    .slide-bookmark-item {
      display: flex;
      padding: px2rem(15) 0;
      box-sizing: border-box;
      .slide-bookmark-item-icon {
        flex: 0 0 px2rem(29);
        @include left;
        .icon-bookmark {
          width: px2rem(20);
          height: px2rem(20);
          font-size: px2rem(12);
          border-radius: 50%;
          background: #bbb;
          @include center;
        }
      }
      .slide-bookmark-item-text {
        font-size: px2rem(14);
        line-height: px2rem(15);
        max-height: px2rem(45);
        @include ellipsis2(3);
      }
    }
  }
}
</style>
