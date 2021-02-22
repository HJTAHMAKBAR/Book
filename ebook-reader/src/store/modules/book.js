const book = {
  state: {
    bookName: '',
    currentBook: null,
    isMenuVisible: false,
    isSettingVisible: 0, //0:默认-带进度条  1:目录  2:搜索  3:阅读器主题  4:字体大小
    defaultFontSize: 14,
    defaultFontFamily: 'Times New Roman',
    isFontFamilyVisible: false,
    defaultTheme: 'Default',
    progress: 0,
    bookAvailable: false,
    chapter: 0,
    bookCover: null,
    metadata: null,
    navigation: null,
    offsetY: 0,
    isBookmark: null

  },
  mutations: {
    'SET_BOOKNAME': (state, bookName) => {
      state.bookName = bookName
    },
    'SET_CURRENTBOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_ISMENUVISIBLE': (state, isMenuVisible) => {
      state.isMenuVisible = isMenuVisible
    },
    'SET_ISSETTINGVISIBLE': (state, isSettingVisible) => {
      state.isSettingVisible = isSettingVisible
    },
    'SET_DEFAULTFONTSIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    'SET_DEFAULTFONTFAMILY': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    },
    'SET_ISFONTFAMILYVISIBLE': (state, isFontFamilyVisible) => {
      state.isFontFamilyVisible = isFontFamilyVisible
    },
    'SET_DEFAULTTHEME': (state, defaultTheme) => {
      state.defaultTheme = defaultTheme
    },
    'SET_PROGRESS': (state, progress) => {
      state.progress = progress
    },
    'SET_BOOKAVAILABLE': (state, bookAvailable) => {
      state.bookAvailable = bookAvailable
    },
    'SET_CHAPTER': (state, chapter) => {
      state.chapter = chapter
    },
    'SET_BOOKCOVER': (state, bookCover) => {
      state.bookCover = bookCover
    },
    'SET_METADATA': (state, metadata) => {
      state.metadata = metadata
    },
    'SET_NAVIGATION': (state, navigation) => {
      state.navigation = navigation
    },
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    },
    'SET_IS_BOOKMARK': (state, isBookmark) => {
      state.isBookmark = isBookmark
    }
  }
}

export default book
