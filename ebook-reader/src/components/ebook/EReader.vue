<template>
  <div class="ebook-reader">
    <div id="read"></div>
<!--    <div v-if="this.browserType==='pc'">-->
      <div class="mask" @click="onMaskClick" @touchmove="move" @touchend="moveEnd" @mousedown.left="onMouseEnter" @mousemove.left="onMouseMove" @mouseup.left="onMouseEnd">
      </div>
<!--    </div>-->
  </div>
</template>

<script>
import Epub from 'epubjs'
import {mixin} from '../../utils/mixin'
import {
  getFontFamily,
  getFontSize,
  getLocation,
  getTheme,
  saveFontFamily,
  saveFontSize,
  saveTheme
} from "@/utils/localStorage";
import {flatten} from "@/utils/book";

global.ePub = Epub
export default {
  mixins: [mixin],
  methods: {
    //epub格式电子书的解析与渲染
    initEpub() {
      const url = process.env.VUE_APP_RES_URL + '/epub/' + this.bookName + '.epub'
      this.book = new Epub(url)
      this.setCurrentBook(this.book)
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight
      })
      const location = getLocation(this.bookName)
      this.display(location, () => {
        this.initTheme()
        this.initFontSize()
        this.initFontFamily()
        this.initGlobalStyle()
      })


      // //手机页面的翻页操作
      // if (this.browserType === 'phone') {
      //   this.rendition.on('touchstart', event => {
      //     this.touchStartX = event.changedTouches[0].clientX
      //     this.touchStartTime = event.timeStamp
      //   }, {passive: false})
      //   this.rendition.on('touchend', event => {
      //     const deltaX = event.changedTouches[0].clientX - this.touchStartX
      //     const deltaTime = event.timeStamp - this.touchStartTime
      //     if (deltaX > 40 && deltaTime < 500) {
      //       this.prePage()
      //     } else if (deltaX < -40 && deltaTime < 500) {
      //       this.nextPage()
      //     } else {
      //       this.toggleTitleAndMenu()
      //     }
      //     // event.preventDefault()
      //     event.stopPropagation()
      //   })
      // }
      //注册字体主题文件
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`),
        ]).then(() => {
        })
      })
      this.parseBook()
      this.book.ready.then(() => {
        return this.book.locations.generate(750 * (window.innerWidth / 375) * (getFontSize(this.bookName) / 16))
      }).then(locations => {
        this.setBookAvailable(true)
        this.refreshLocation()
      })
    },
    initFontSize() {
      //初始化字号为默认大小(14px)——获取缓存的字号
      let fontSize = getFontSize(this.bookName)
      if (!fontSize) {
        this.currentBook.rendition.themes.fontSize(this.defaultFontSize + 'px')
        saveFontSize(this.bookName, this.defaultFontSize)
      } else {
        this.rendition.themes.fontSize(fontSize + 'px')
        this.setDefaultFontSize(fontSize)
      }
    },
    initFontFamily() {
      //初始化字体为默认字体(Times New Roman)——获取缓存的字体
      let font = getFontFamily(this.bookName)
      if (!font) {
        this.currentBook.rendition.themes.font(this.defaultFontFamily)
        saveFontFamily(this.bookName, this.defaultFontFamily)
      } else {
        this.rendition.themes.font(font)
        this.setDefaultFontFamily(font)
      }
    },
    //初始化主题为默认主题(Default)——获取缓存的主题
    initTheme() {
      let defaultTheme = getTheme(this.bookName)
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name
        saveTheme(this.bookName, defaultTheme)
      }
      this.setDefaultTheme(defaultTheme)
      this.themeList.forEach(theme => {
        this.rendition.themes.register(theme.name, theme.style)
      })
      this.rendition.themes.select(defaultTheme)
    },
    prePage() {
      if (this.rendition) {
        this.rendition.prev().then(() => {
          this.refreshLocation()
        })
        this.hideTitleAndMenu()
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next().then(() => {
          this.refreshLocation()
        })
        this.hideTitleAndMenu()
      }
    },
    toggleTitleAndMenu() {
      if (this.isMenuVisible) {
        this.setIsSettingVisible(0)
        this.setIsFontFamilyVisible(false)
      }
      this.setIsMenuVisible(!this.isMenuVisible)
    },
    parseBook() {
      this.book.loaded.cover.then(cover => {
        this.book.archive.createUrl(cover).then(url => {
          this.setBookCover(url)
        })
      })
      this.book.loaded.metadata.then(metadata => {
        this.setMetadata(metadata)
      })
      this.book.loaded.navigation.then(navigation => {
        const navigationItem = flatten(navigation.toc)
        function find(item, level = 0) {
          return !item.parent ? level : find(navigationItem.filter(parentItem => parentItem.id === item.parent)[0], ++level)
        }
        navigationItem.forEach(item => {
          item.level = find(item)
        })
        this.setNavigation(navigationItem)
      })
    },
    onMaskClick(e) {
      if (this.mouseState && (this.mouseState === 2 || this.mouseState === 3)) {
        return
      }
      const offsetX = e.offsetX
      const width = window.innerWidth
      if (offsetX > 0 && offsetX < width * 0.3) {
        this.prePage()
      } else if (offsetX > 0 && offsetX >width * 0.7) {
        this.nextPage()
      } else {
        this.toggleTitleAndMenu()
      }
    },
    move(e) {
      let offsetY = 0
      if (this.firstOffsetY) {
        offsetY = e.changedTouches[0].clientY - this.firstOffsetY
        this.setOffsetY(offsetY)
      } else {
        this.firstOffsetY = e.changedTouches[0].clientY
      }
      e.stopPropagation()
      e.preventDefault()
    },
    moveEnd(e) {
      this.setOffsetY(0)
      this.firstOffsetY  = null
    },
    onMouseEnd(e) {
      if (this.mouseState === 2) {
        this.setOffsetY(0)
        this.firstOffsetY = null
        this.mouseState = 3
      } else {
        this.mouseState = 4
      }
      const time = e.timeStamp - this.mouseStartTime
      if (time < 100) {
        this.mouseState = 4
      }
      e.preventDefault()
      e.stopPropagation()
    },
    onMouseMove(e) {
      if (this.mouseState === 1) {
        this.mouseState = 2
      } else if (this.mouseState === 2) {
        let offsetY = 0
        if (this.firstOffsetY) {
          offsetY = e.clientY - this.firstOffsetY
          this.setOffsetY(offsetY)
        } else {
          this.firstOffsetY = e.clientY
        }
      }
      e.preventDefault()
      e.stopPropagation()
    },
    onMouseEnter(e) {
      this.mouseState = 1
      this.mouseStartTime = e.timeStamp
      e.preventDefault()
      e.stopPropagation()
    }
  },
  mounted() {
    //动态路由获取静态资源服务器上的epub电子书
    this.setBookName(this.$route.params.filename.split('|').join('/')).then(() => {
      this.initEpub()
    })

  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";

.ebook-reader {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: 100%;

    .left {
      flex: 0 0 px2rem(100);
    }

    .center {
      flex: 1;
    }

    .right {
      flex: 0 0 px2rem(100);
    }
  }
}

</style>
