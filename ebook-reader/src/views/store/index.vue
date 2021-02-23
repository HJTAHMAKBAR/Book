<template>
  <div class="store">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.store {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: white;
}
</style>
