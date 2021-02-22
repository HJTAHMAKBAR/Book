<template>
  <div class="ebook" ref="ebook">
    <title-bar></title-bar>
    <e-reader></e-reader>
    <menu-bar></menu-bar>
    <pull-down-book-mark></pull-down-book-mark>
    <e-header></e-header>
    <e-footer></e-footer>
  </div>
</template>

<script>
  import EReader from "../../components/ebook/EReader";
  import TitleBar from "../../components/ebook/TitleBar";
  import MenuBar from "../../components/ebook/MenuBar";
  import {mixin} from "@/utils/mixin";
  import PullDownBookMark from "@/components/ebook/PullDownBookMark";
  import EHeader from "@/components/ebook/EHeader";
  import EFooter from "@/components/ebook/EFooter";

  export default {
    mixins: [mixin],
    components: {
      EFooter,
      EHeader,
      PullDownBookMark,
      EReader,
      TitleBar,
      MenuBar
    },
    watch: {
      offsetY(e) {
        //监听下拉事件
        if (!this.isMenuVisible && this.bookAvailable) {
          if (e > 0) {
            this.move(e)
          } else if (e === 0) {
            this.restore()
          }
        }
      }
    },
    methods: {
      move(e) {
        this.$refs.ebook.style.top = e + 'px'
      },
      restore() {
        this.$refs.ebook.style.top = 0
        this.$refs.ebook.style.transition = 'all .2s linear'
        setTimeout(() => {
          this.$refs.ebook.style.transition = ''
        }, 200)
      }
    }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .ebook {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
