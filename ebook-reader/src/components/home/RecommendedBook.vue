<template>
  <div class="guess-you-like">
    <title-view label="最新推荐" btn="换一批" @onClick="change"></title-view>
    <div class="guess-you-like-list">
      <div class="guess-you-like-item" v-for="(item, index) in showData" :key="index" @click="showBookDetail(item)">
        <div class="img-wrapper">
          <img class="img" :src="item.cover">
        </div>
        <div class="content-wrapper">
          <div class="title" ref="title">{{item.title}}</div>
          <div class="author" ref="author">{{item.author}}</div>
<!--          <div class="result third-title" ref="result">{{resultText(item)}}</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleView from "@/components/home/TitleView";
export default {
  name: "RecommendedBook",
  props: {
    data: Array
  },
  data() {
    return {
      total: 0,
      index: 0
    }
  },
  components: {
    TitleView
  },
  methods: {
    change() {
      this.index += 1
    },
  },
  computed: {
    showData() {
      if (this.data) {
        this.total = this.data.length
        return [
          this.data[this.index % this.total],
          this.data[(this.index + 2) % this.total],
          this.data[(this.index + 4) % this.total],
          this.data[(this.index + 6) % this.total],
          this.data[(this.index + 8) % this.total],
          this.data[(this.index + 10) % this.total],
        ]
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.guess-you-like {
  .guess-you-like-list {
    width: 100%;
    padding: px2rem(3) px2rem(10);
    box-sizing: border-box;
    display: flex;
    @include center
    .guess-you-like-item {
      @include columnLeft;
      padding: 0 px2rem(5);
      height: px2rem(200);
      .img-wrapper {
        flex: 0 0 20%;
        height: px2rem(120);
        width: px2rem(130);
        box-sizing: border-box;
        .img {
          height: px2rem(120);
          width: auto;
        }
      }
      .content-wrapper {
        flex: 1;
        height: px2rem(80);
        padding: px2rem(10) 0;
        box-sizing: border-box;
        width: px2rem(130);
        .title {
          line-height: px2rem(18);
          font-size: px2rem(14);
          max-height: px2rem(36);
          color: #444;
          font-weight: bold;
          @include ellipsis2(2);
        }
        .author {
          margin-top: px2rem(3);
          line-height: px2rem(12);
          font-size: px2rem(10);
          max-height: px2rem(12);
          color: #666;
          @include ellipsis2(1);
        }
        .result {
          margin-top: px2rem(5);
        }
      }
    }
  }
}
</style>
