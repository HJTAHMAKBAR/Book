<template>
  <div class="featured">
    <title-view :label="titleText" :btn="btnText" v-if="titleVisible && data && data.length > 0"></title-view>
    <div class="featured-list">
      <div class="featured-item-wrapper">
        <div class="featured-item" v-for="(item, index) in data" :key="index" @click="showBookDetail(item)">
          <div class="img-wrapper">
            <img class="img" :src="item.cover">
          </div>
          <div class="content-wrapper">
            <div class="title title-small" ref="title">{{item.title}}</div>
            <div class="author sub-title-tiny" ref="author">{{item.author}}</div>
            <div class="category third-title-tiny" ref="category">{{categoryText(item.category)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleView from "@/components/home/TitleView";
import {categoryText} from "@/utils/store";

export default {
  name: "FeaturedBook",
  components: {
    TitleView
  },
  props: {
    data: Array,
    titleVisible: {
      type: Boolean,
      default: true
    },
    titleText: {
      type: String
    },
    btnText: {
      type: String
    }
  },
  methods: {
    categoryText(category) {
      return categoryText(category, this)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.featured {
  .featured-list {
    width: 100%;
    padding: 0 px2rem(10);
    box-sizing: border-box;
    .featured-item-wrapper {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      .featured-item {
        flex: 0 0 50%;
        width: 50%;
        padding: px2rem(5) 0;
        @include top;
        .img-wrapper {
          flex: 0 0 30%;
          width: 30%;
          .img {
            width: 100%;
            // width: px2rem(50);
            // height: px2rem(75);
          }
        }
        .content-wrapper {
          flex: 1;
          width: px2rem(117.5);
          padding: 0 px2rem(5);
          box-sizing: border-box;
          .author {
            margin-top: px2rem(15);
          }
          .category {
            margin-top: px2rem(5);
          }
        }
      }
    }
  }
}
</style>
