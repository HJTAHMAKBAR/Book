<template>
  <div class="home-title-wrapper">
    <div class="label">{{label}}</div>
    <div class="btn" @click="click">{{btn}}</div>
  </div>
</template>

<script>
export default {
  name: "TitleView",
  props: {
    label: String,
    btn: String
  },
  methods: {
    click() {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.home-title-wrapper {
  width: 100%;
  padding: px2rem(15) px2rem(10);
  box-sizing: border-box;
  @include top;

  .label {
    flex: 1;
    font-size: px2rem(16);
    color: #333;
    font-weight: bold;
  }
  .btn {
    font-size: px2rem(14);
    color: rgba(51, 153, 153, 1);
    &:active {
      color: rgba(51, 153, 153, .5);
    }
  }
}
</style>
