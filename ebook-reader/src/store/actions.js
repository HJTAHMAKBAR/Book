const actions = {
  setBookName: ({ commit }, bookName) => {
    return commit('SET_BOOKNAME', bookName)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENTBOOK', currentBook)
  },
  setIsMenuVisible: ({ commit }, isMenuVisible) => {
    return commit('SET_ISMENUVISIBLE', isMenuVisible)
  },
  setIsSettingVisible: ({ commit }, isSettingVisible) => {
    return commit('SET_ISSETTINGVISIBLE', isSettingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULTFONTSIZE', defaultFontSize)
  },
  setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
    return commit('SET_DEFAULTFONTFAMILY', defaultFontFamily)
  },
  setIsFontFamilyVisible: ({ commit }, isFontFamilyVisible) => {
    return commit('SET_ISFONTFAMILYVISIBLE', isFontFamilyVisible)
  },
  setDefaultTheme: ({ commit }, defaultTheme) => {
    return commit('SET_DEFAULTTHEME', defaultTheme)
  },
  setProgress: ({ commit }, progress) => {
    return commit('SET_PROGRESS', progress)
  },
  setBookAvailable: ({ commit }, bookAvailable) => {
    return commit('SET_BOOKAVAILABLE', bookAvailable)
  },
  setChapter: ({ commit }, chapter) => {
    return commit('SET_CHAPTER', chapter)
  },
  setBookCover: ({ commit }, bookCover) => {
    return commit('SET_BOOKCOVER', bookCover)
  },
  setMetadata: ({ commit }, metadata) => {
    return commit('SET_METADATA', metadata)
  },
  setNavigation: ({ commit }, navigation) => {
    return commit('SET_NAVIGATION', navigation)
  },
  setOffsetY({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY)
  },
  setIsBookmark({ commit }, isBookmark) {
    return commit('SET_IS_BOOKMARK', isBookmark)
  },
  setHotSearchOffsetY({ commit }, offsetY) {
    return commit('SET_HOT_SEARCH_OFFSETY', offsetY)
  },

}

export default actions
