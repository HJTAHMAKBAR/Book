<template>
  <div class="bookmark" ref="bookmark">
    <div class="bookmark-text-wrapper">
      <div class="bookmark-down-wrapper" ref="iconDown">
        <span class="icon-down"></span>
      </div>
      <div class="bookmark-text">{{ text }}</div>
    </div>
    <div class="bookmark-icon-wrapper" :style="isFixed ? fixedStyle : {}">
      <book-clip :color="color" :width="10" :height="20"></book-clip>
    </div>
  </div>
</template>

<script>
import BookClip from "@/components/tools/BookClip";
import {realPx} from "@/utils/utils";
import {mixin} from "@/utils/mixin";
import {getBookmark, saveBookmark} from "@/utils/localStorage";

const DEFAULT = '#FFF0F5'
const SELECTED = '#DC143c'
export default {
  name: "PullDownBookMark",
  components: {BookClip},
  mixins: [mixin],
  watch: {
    offsetY(e) {
      if (!this.bookAvailable || this.isMenuVisible || this.isSettingVisible > 0) {return}
      //状态二
      if (e >= this.height && e <= this.threshold) {
        this.$refs.bookmark.style.top = `${-e}px`
        if (this.isBookmark) {
          this.text = '下拉删除书签'
          this.color = SELECTED
          this.isFixed = true
        } else {
          this.text = '下拉增加书签'
          this.color = DEFAULT
          this.isFixed = false
        }
        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === 'rotate(180deg)') {
          iconDown.style.transform = 'rotate(0deg)'
        }
      } else if (e >= this.threshold) {
        //状态三
        this.$refs.bookmark.style.top = `${-e}px`
        if (this.isBookmark) {
          this.text = '松手删除书签'
          this.color = DEFAULT
          this.isFixed = false
        } else {
          this.text = '松手增加书签'
          this.color = SELECTED
          this.isFixed = true
        }
        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === '' || iconDown.style.transform === 'rotate(0deg)') {
          iconDown.style.transform = 'rotate(180deg)'
        }
      } else if (e > 0 && e < this.height) {
        // 状态一
        if (this.isBookmark) {
          this.text = '下拉删除书签'
          this.color = SELECTED
          this.isFixed = true
        } else {
          this.text = '下拉增加书签'
          this.color = DEFAULT
          this.isFixed = false
        }
      } else if (e === 0) {
        //状态四
        this.restore()
      }
    },
    isBookmark(isBookmark) {
      if (isBookmark) {
        this.color = SELECTED
        this.isFixed = true
      } else {
        this.color = DEFAULT
        this.isFixed = false
      }
    }
  },
  methods: {
    restore() {
      setTimeout(() => {
        this.$refs.bookmark.style.top = `${-this.height}px`
        this.$refs.iconDown.style.transform = 'rotate(0deg)'
      }, 200)
      if (this.isFixed) {
          this.setIsBookmark(true)
        this.addBookMark()
      } else {
        this.setIsBookmark(false)
        this.deleteBookMark()
      }
    },
    addBookMark() {
      this.bookmark = getBookmark(this.bookName)
      if (!this.bookmark) {
        this.bookmark = []
      }
      const currentLocation = this.currentBook.rendition.currentLocation()
      const cfibase = currentLocation.start.cfi.replace(/!.*/, '')
      const cfistart = currentLocation.start.cfi.replace(/.*!/, '').replace(/\)$/, '')
      const cfiend = currentLocation.end.cfi.replace(/.*!/, '').replace(/\)$/, '')
      const cfirange = `${cfibase}!,${cfistart},${cfiend})`
      this.currentBook.getRange(cfirange).then(range => {
        const text = range.toString().replace(/\s\s/g, '')
        this.bookmark.push({
          cfi: currentLocation.start.cfi,
          text: text
        })
        saveBookmark(this.bookName, this.bookmark)
      })
    },
    deleteBookMark() {
      const currentLocation = this.currentBook.rendition.currentLocation()
      const cfi = currentLocation.start.cfi
      this.bookmark = getBookmark(this.bookName)
      if (this.bookmark) {
        saveBookmark(this.bookName, this.bookmark.filter(item => item.cfi !== cfi))
        this.setIsBookmark(false)
      }
    }
  },
  computed: {
    height() {
      return realPx(20)
    },
    threshold() {
      return realPx(25)
    },
    fixedStyle() {
      return {
        position: 'fixed',
        top: 0,
        right: `${(window.innerWidth - this.$refs.bookmark.clientWidth) / 2}px`
      }
    }
  },
  data() {
    return {
      text: '',
      color: DEFAULT,
      isFixed: false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.bookmark {
  position: absolute;
  top: px2rem(-20);
  left: 0;
  z-index: 200;
  width: 100%;
  height: px2rem(20);

  .bookmark-text-wrapper {
    position: absolute;
    right: px2rem(45);
    bottom: 0;
    display: flex;

    .bookmark-down-wrapper {
      font-size: px2rem(14);
      color: white;
      transition: all .2s linear;
      @include center
    }

    .bookmark-text {
      font-size: px2rem(14);
      color: white;
    }
  }

  .bookmark-icon-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: px2rem(15);
  }
}
</style>
