<template>
  <div class="shelf-header">
    <div class="shelf-header-text-wrapper">
      <span class="shelf-header-text">我的书架</span>
      <span class="shelf-header-sub-text" v-show="isEditMode">{{ selectedBookText }}</span>
    </div>
    <div class="shelf-header-btn-wrapper btn-left">
      <span class="shelf-header-btn-text" @click="clearBook">删除所有</span>
    </div>
    <shelf-search class="shelf-search"></shelf-search>
    <div class="shelf-header-btn-wrapper btn-right">
      <span class="shelf-header-btn-text" @click="onEditClick"> {{ isEditMode ? '取消' : '编辑' }} </span>
    </div>
  </div>
</template>

<script>
import {shelfMixin} from "@/utils/mixin";
import ShelfSearch from "@/components/shelf/ShelfSearch";

export default {
  name: "ShelfHeader",
  components: {ShelfSearch},
  mixins: [shelfMixin],
  computed: {
    selectedBookText() {
      const selectedNumber = this.shelfSelected ? this.shelfSelected.length : 0
      return selectedNumber <= 0 ? '选择书籍' : '已选择' + selectedNumber + '本书'
    }
  },
  methods: {
    onEditClick() {
      this.setIsEditMode(!this.isEditMode)
    },
    clearBook() {
      alert('删除所有')
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.shelf-header {
  position: relative;
  top: px2rem(50);
  width: 100%;
  height: px2rem(80);
  z-index: 120;
  background: burlywood;
  @include center
  .shelf-header-text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(40);
    @include columnCenter;
    .shelf-header-text {
      font-size: px2rem(16);
      line-height: px2rem(20);
      font-weight: bold;
      color: #333;
    }

    .shelf-header-sub-text {
      font-size: px2rem(10);
      color: #333;
    }
  }

  .shelf-header-btn-wrapper {
    position: absolute;
    top: px2rem(40);
    box-sizing: border-box;
    height: px2rem(40);
    @include center;
    .shelf-header-btn-text {
      font-size: px2rem(14);
      color: #666;
    }

    &.btn-left {
      left: 0;
      padding-left: px2rem(15);
    }

    &.btn-right {
      right: 0;
      padding-right: px2rem(15);
    }

  }

}
</style>
