<template>
  <div class="store-home">
    <home-header></home-header>
    <scroll :top="48" @onScroll="onScroll">
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
      <div>loading</div>
    </scroll>
  </div>

</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import Scroll from "@/components/tools/Scroll";
import {mixin, storeHomeMixin} from "@/utils/mixin";

export default {
  name: "StoreHome",
  components: {Scroll, HomeHeader},
  mixins: [storeHomeMixin],
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.store-home {
  width: 100%;
  min-width: 1000px;
  height: 100%;
}

</style>
