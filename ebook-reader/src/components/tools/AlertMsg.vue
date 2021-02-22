<template>
  <div class="toastBorder" :style="{display: displayState}" ref="alertMsg">
    <div class="toastText">{{toast_Msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toast_Msg: '',
      displayState: 'none'
    }
  },
  methods: {
    alertDialog(msg) {
      this.displayState = 'block'
      this.toast_Msg = msg
      window.setTimeout(() => {
        this.displayState = 'none'
      }, 800)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.toastBorder{
  position: fixed;
  background: grey;
  bottom: px2rem(108);
  left: 50%;
  z-index: 102;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  .toastText{
    font-size: px2rem(14);
    color: white;
    padding: px2rem(5) px2rem(10);
    text-align: center;
  }
}

</style>
