<template>
  <div class="shelf-search-wrapper">
    <div class="shelf-search">
      <div class="search-wrapper">
        <div class="search-icon-wrapper">
          <span class="icon-search icon"></span>
        </div>
        <div class="search-input-wrapper">
          <input class="search-input"
                 type="text"
                 placeholder="搜索"
                 @click="onSearchClick"
                 v-click-outside="onCancelClick"
                 v-model="searchText">
        </div>
        <div class="icon-clear-wrapper"
             v-show="searchText.length > 0"
             @click="clearSearchText">
          <span class="icon-close-circle-fill icon"></span>
        </div>
      </div>
      <div class="cancel-btn-wrapper" v-if="isInputClicked" @click="onCancelClick">
        <span class="cancel-text">取消</span>
      </div>
      <div class="blankItem" v-else></div>
    </div>
  </div>
</template>

<script>
import clickOutside from "@/utils/clickOutside";
export default {
  name: "ShelfSearch",
  data() {
    return {
      isInputClicked: false,
      searchText: ''
    }
  },
  directives: {
    clickOutside
  },
  methods: {
    onSearchClick() {
      this.isInputClicked = true
    },
    onCancelClick() {
      this.isInputClicked = false
    },
    clearSearchText() {
      this.searchText = ''
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.shelf-search-wrapper {
  position: absolute;
  z-index: 105;
  width: 50%;
  top: px2rem(40);
  height: px2rem(40);
  font-size: px2rem(16);
  background: burlywood;
  @include center;
  .shelf-search {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 105;
    width: 100%;
    height: px2rem(40);
    .search-wrapper {
      display: flex;
      flex: 1;
      margin: px2rem(6) 0;
      border: px2rem(1) solid #DADFE6;
      border-radius: px2rem(20);
      .search-icon-wrapper {
        flex: 0 0 px2rem(22);
        @include right;
        .icon-search {
          font-size: px2rem(14);
        }
      }
      .search-input-wrapper {
        flex: 1;
        box-sizing: border-box;
        width: px2rem(200);
        @include center;
        .search-input {
          width: 100%;
          font-size: px2rem(14);
          border: none;
          color: #F0E68C;
          caret-color: #666666;
          background: transparent;
          &:focus {
            outline: none;
          }
          &::-webkit-input-placeholder {
            font-size: px2rem(14);
            padding-left: px2rem(5);
            color: #666666;
          }
        }
        .icon-clear-wrapper {
          flex: 0 0 px2rem(24);
          @include left;
          .icon-close-circle-fill {
            font-size: px2rem(14);
            color: #ccc;
          }
        }
      }
    }
    .cancel-btn-wrapper {
       width: px2rem(46);
       @include center;
       .cancel-text {
         font-size: px2rem(14);
         color: #666666;
       }
     }
    .blankItem {
      width: px2rem(46);
    }
  }
}


</style>
