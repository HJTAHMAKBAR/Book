<template>
  <div class="home-header" :class="{'fixed': isFixed}">
    <div class="logo-wrapper">
      <img class="logo" src="../../assets/logo.png" alt="布课网logo">
    </div>
    <div class="title-wrapper">
      <div class="title-home-wrapper" @click="goToHome" :class="{'selected' : headerSelectedType === 1}">
        <span class="icon-shake icon"></span>
        <span class="title">首页</span>
      </div>
      <div class="title-shelf-wrapper" @click="goToShelf" :class="{'selected' : headerSelectedType === 2}">
        <span class="icon-shelf icon"></span>
        <span class="title">书架</span>
      </div>
    </div>
    <div class="search-wrapper" v-click-outside="hideSearchList">
      <div class="search-input-wrapper">
        <div class="search-input">
          <span class="icon-search icon"></span>
          <input class="input" type="text" placeholder="书籍搜索" v-model="searchText" @click="showSearchList">
        </div>
      </div>
      <div class="search-list-wrapper">
        <search-list v-show="isSearchVisible"></search-list>
      </div>
    </div>
    <div class="user-wrapper title">用户</div>
  </div>
</template>

<script>
import {storeHomeMixin} from "@/utils/mixin";
import SearchList from "@/components/home/SearchList";
import clickOutside from "@/utils/clickOutside";

export default {
  name: "HomeHeader",
  components: {SearchList},
  mixins: [storeHomeMixin],
  directives: {
    clickOutside
  },
  data() {
    return {
      searchText: '',
      isFixed: false,
      isSearchVisible: false,
      selectedType: 1
    }
  },
  watch: {
    offsetY(offsetY) {
      if (offsetY > 10) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  methods: {
    showSearchList() {
      this.isSearchVisible = true
    },
    hideSearchList() {
      this.isSearchVisible = false
    },
    goToShelf() {
      this.setHeaderSelectedType(2)
      this.$router.push('/store/shelf')
    },
    goToHome() {
      this.setHeaderSelectedType(1)
      this.$router.push('/store/home')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.home-header {
  z-index: 300;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: burlywood;

  &.fixed {
    border-bottom: 1px solid #DADFE6;
    box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);
  }

  .logo-wrapper {
    width: 20%;
    @include center;

    .logo {
      width: auto;
      height: px2rem(48);
    }
  }

  .title-wrapper {
    display: flex;
    width: 20%;

    .title-home-wrapper {
      width: 50%;
      @include center;

      .title {
        padding: px2rem(5);
      }
      &.selected {
        background-color: #7DA889;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .5);
      }
    }

    .title-shelf-wrapper {
      width: 50%;
      @include center;

      .title {
        padding: px2rem(5);
      }
      &.selected {
        background-color: #7DA889;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .5);
      }
    }
  }

  .search-wrapper {
    width: 40%;

    .search-input-wrapper {
      width: 100%;
      height: px2rem(48);
      padding: px2rem(10);
      box-sizing: border-box;
      @include center;

      .search-input {
        width: 100%;
        background: #F0E68C;
        border-radius: px2rem(8);
        padding: px2rem(5) px2rem(15);
        box-sizing: border-box;
        border: px2rem(1) solid #eee;
        @include left;

        .input {
          width: 100%;
          height: px2rem(22);
          border: none;
          background: transparent;
          margin-left: px2rem(10);
          font-size: px2rem(12);
          color: #333333;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .search-list-wrapper {
      padding: 0 px2rem(10);
    }
  }

  .user-wrapper {
    @include center;
    width: 20%;
  }
}

</style>
