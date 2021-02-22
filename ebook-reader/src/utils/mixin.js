import { mapGetters, mapActions } from 'vuex'
import {addCss, clearCss, themeList} from "@/utils/book";
import {getBookmark, saveLocation} from "@/utils/localStorage";
import EReader from "@/components/ebook/EReader";

export const mixin = {
  computed: {
    ...mapGetters([
      'bookName',
      'currentBook',
      'browserType',
      'isMenuVisible',
      'isSettingVisible',
      'defaultFontSize',
      'defaultFontFamily',
      'isFontFamilyVisible',
      'defaultTheme',
      'progress',
      'bookAvailable',
      'chapter',
      'bookCover',
      'metadata',
      'navigation',
      'offsetY',
      'isBookmark'
    ]),
    themeList() {
      return themeList(this)
    },
    getChapterName() {
      return this.chapter ? this.navigation[this.chapter].label : ''
    }
  },
  methods: {
    ...mapActions([
      'setIsMenuVisible',
      'setCurrentBook',
      'setBookName',
      'setIsSettingVisible',
      'setDefaultFontSize',
      'setDefaultFontFamily',
      'setIsFontFamilyVisible',
      'setDefaultTheme',
      'setProgress',
      'setBookAvailable',
      'setChapter',
      'setBookCover',
      'setMetadata',
      'setNavigation',
      'setOffsetY',
      'setIsBookmark'
    ]),
    //初始化全局样式
    initGlobalStyle() {
      clearCss()
      switch (this.defaultTheme) {
        case 'Default':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
        case 'Eye':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
          break
        case 'Gold':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
          break
        case 'Night':
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
          break
        default:
          addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
      }
    },
    refreshLocation() {
      const currentLocation = this.currentBook.rendition.currentLocation()
      if (currentLocation && currentLocation.start) {
        const startCfi = currentLocation.start.cfi
        const progress = this.currentBook.locations.percentageFromCfi(startCfi)
        this.setProgress(Math.floor(progress * 100))
        this.setChapter(currentLocation.start.index)
        saveLocation(this.bookName, startCfi)
        const bookmark = getBookmark(this.bookName)
        if (bookmark) {
          if (bookmark.some(item => item.cfi === startCfi)) {
            this.setIsBookmark(true)
          } else {
            this.setIsBookmark(false)
          }
        } else {
          this.setIsBookmark(false)
        }
      }
    },
    hideTitleAndMenu() {
      this.setIsMenuVisible(false)
      this.setIsSettingVisible(0)
      this.setIsFontFamilyVisible(false)
    },
    display(target, cb) {
      if (target) {
        this.currentBook.rendition.display(target).then(() => {
          this.refreshLocation()
          if (cb) cb()
        })
      } else {
        this.currentBook.rendition.display().then(() => {
          this.refreshLocation()
          if (cb) cb()
        })
      }
    }

  }
}

export const storeHomeMixin = {
  computed: {
    ...mapGetters([
      'offsetY',
      'hotSearchOffsetY',
      'headerSelectedType'
    ])
  },
  methods: {
    ...mapActions([
      'setOffsetY',
      'setHotSearchOffsetY',
      'setHeaderSelectedType'
    ])
  }


}

export const shelfMixin = {
  computed: {
    ...mapGetters([
      'isEditMode',
      'shelfList',
      'shelfSelected',
    ])
  },
  methods: {
    ...mapActions([
      'setIsEditMode',
      'setShelfList',
      'setShelfSelected',
    ]),
  }
}
