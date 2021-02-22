const getters = {
  browserType: state => state.info.browserType,
  hotSearchOffsetY: state => state.store.hotSearchOffsetY,
  bookName: state => state.book.bookName,
  currentBook: state => state.book.currentBook,
  isMenuVisible: state => state.book.isMenuVisible,
  isSettingVisible: state => state.book.isSettingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  isFontFamilyVisible: state => state.book.isFontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme,
  progress: state => state.book.progress,
  bookAvailable: state => state.book.bookAvailable,
  chapter: state => state.book.chapter,
  bookCover: state => state.book.bookCover,
  metadata: state => state.book.metadata,
  navigation: state => state.book.navigation,
  offsetY: state => state.book.offsetY,
  isBookmark: state => state.book.isBookmark,

}

export default getters
