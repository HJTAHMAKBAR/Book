<template>
  <div class="store-home">
    <home-header></home-header>
    <scroll :top="48" @onScroll="onScroll">
      <recommended-book :data="guessYouLike"></recommended-book>
      <featured-book :titleText="'精选图书'" :btnText="'查看更多'" :data="featured"></featured-book>
      <div v-for="(item, index) in categoryList" :key="index">
        <category-book :data="item"></category-book>
      </div>
      <category :data="categories"></category>
    </scroll>
  </div>

</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import Scroll from "@/components/tools/Scroll";
import { storeHomeMixin} from "@/utils/mixin";
import {home} from "@/api/store";
import RecommendedBook from "@/components/home/RecommendedBook";
import FeaturedBook from "@/components/home/FeaturedBook";
import CategoryBook from "@/components/home/CategoryBook";
import Category from "@/components/home/Category";

export default {
  name: "StoreHome",
  components: {Category, CategoryBook, FeaturedBook, RecommendedBook, Scroll, HomeHeader},
  mixins: [storeHomeMixin],
  data() {
    return {
      guessYouLike: null,
      featured: null,
      categoryList: null,
      categories: null
    }
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
    }
  },
  mounted() {
    home().then(response => {
      if (response && response.status === 200) {
        const data = response.data
        this.guessYouLike = data.guessYouLike
        this.featured = data.featured
        this.categoryList = data.categoryList
        this.categories = data.categories
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.store-home {
  width: 1200px;
  background: #EFEFEF;
  margin: 0 auto;
  min-width: 1000px;
  height: 100%;
}

</style>
