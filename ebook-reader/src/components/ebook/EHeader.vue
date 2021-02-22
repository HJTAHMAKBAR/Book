<template>
  <div class="header">
    <span class="header-text">{{ getChapterName }}</span>
  </div>
</template>

<script>
import {mixin} from "@/utils/mixin";

export default {
  mixins: [mixin],
  name: "EHeader",
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: px2rem(32);
  padding: 0 px2rem(15);
  box-sizing: border-box;
  overflow: hidden;
  @include left;
.header-text {
  font-size: px2rem(12);
  color: #6d7178;
}
}

</style>
