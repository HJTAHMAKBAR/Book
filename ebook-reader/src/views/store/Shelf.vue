<template>
  <div class="shelf">
    <home-header></home-header>
    <shelf-header></shelf-header>
    <scroll class="shelf-scroll-wrapper">
    </scroll>
  </div>
</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import ShelfHeader from "@/components/shelf/ShelfHeader";
import {shelfMixin} from "@/utils/mixin";
import Scroll from "@/components/tools/Scroll";

export default {
  name: "Shelf",
  mixins: [shelfMixin],
  components: { Scroll, ShelfHeader, HomeHeader}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.shelf {
  width: 100%;
  min-width: 1000px;
  height: 100%;
  background: #6d7178;

.shelf-scroll-wrapper {
  position: absolute;
  top: px2rem(178);
  left: 0;
  z-index: 101;
}

}
</style>
