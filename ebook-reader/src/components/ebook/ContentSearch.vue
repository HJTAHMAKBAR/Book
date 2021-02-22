<template>
  <div class="content-search">
    <transition name="slide-up">
      <div class="search-wrapper" v-show="isMenuVisible && isSettingVisible === 2">
        <div class="search-box">
          <div class="search-input-wrapper">
            <div class="search-icon">
              <span class="icon-search"></span>
            </div>
            <input class="search-input" type="text" v-model="searchText" placeholder="搜索全文内容" @keyup.enter.exact="search()">
            <div class="search-cancel" v-if="isSearchVisible" @click="hideSearchPage()">取消</div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="slide-up2">
      <div class="search-result-wrapper" v-if="isSearchVisible && isMenuVisible && isSettingVisible === 2">
        <scroll class="slide-search-list" :top="64" :bottom="64" v-show="isSearchVisible">
          <div class="slide-search-item" v-for="(item, index) in searchList" :key="index" v-html="item.excerpt" @click="displaySearchResult(item.cfi)"></div>
          <alert-msg ref="AlertMsg"></alert-msg>
        </scroll>
      </div>
    </transition>

  </div>
</template>

<script>
import {mixin} from "@/utils/mixin";
import Scroll from "@/components/tools/Scroll";
import AlertMsg from "@/components/tools/AlertMsg";

export default {
  components: {Scroll},
  mixins: [mixin],
  components: {
    AlertMsg,
    Scroll
  },
  data() {
    return {
      isSearchVisible: false,
      searchList: null,
      searchText: ''
    }
  },
  name: "ContentSearch",
  methods: {
    doSearch(q) {
      if (this.bookAvailable) {
        return Promise.all(
          this.currentBook.spine.spineItems.map(item => item.load(this.currentBook.load.bind(this.currentBook)).then(item.find.bind(item, q)).finally(item.unload.bind(item)))
        ).then(results => Promise.resolve([].concat.apply([], results)));
      }
    },
    hideSearchPage() {
      this.isSearchVisible = false
      this.searchText = ''
      this.searchList = null
    },
    showSearchPage() {
      this.isSearchVisible = true
    },
    search () {
      if (this.searchText && this.searchText.length > 0) {
        this.showSearchPage()
        this.doSearch(this.searchText).then(list => {
          if (list.length) {
            this.searchList = list
            this.searchList.map(item => {
              item.excerpt = item.excerpt.replace(this.searchText, `<span class="content-search-text">${this.searchText}</span>`)
              return item
            })
          } else {
            this.$refs.AlertMsg.alertDialog('未搜索到内容')
          }
        })
      }
    },
    displaySearchResult(cfi) {
      this.display(cfi, () => {
        this.hideTitleAndMenu()
        this.currentBook.rendition.annotations.highlight(cfi)
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.content-search {
  top: 0;
  height: 100%;
  width: 100%;
  .search-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    z-index: 101;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    display: flex;
    width: 100%;
    height: px2rem(60);
    @include center;

    .search-box {
      width: 85%;

      .search-input-wrapper {
        flex: 1;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        border-radius: px2rem(15);
        @include center;

        .search-icon {
          flex: 0 0 px2rem(28);
          font-size: px2rem(12);
          @include center
        }

        .search-input {
          flex: 1;
          width: 100%;
          height: px2rem(32);
          font-size: px2rem(14);
          background: transparent;
          border: none;

          &:focus {
            outline: none;
          }
        }

        .search-cancel {
          flex: 0 0 px2rem(50);
          font-size: px2rem(14);
          @include right
        }
      }
    }
  }

  .search-result-wrapper {
    position: absolute;
    top: px2rem(48);
    bottom: px2rem(108);
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    @include center
    .slide-search-list {
      width: 100%;
      padding: 0 px2rem(15);
      box-sizing: border-box;
      .slide-search-item {
        font-size: px2rem(14);
        line-height: px2rem(16);
        padding: px2rem(20) 0;
        box-sizing: border-box;
      }
    }
  }
}

</style>
