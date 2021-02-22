const store = {
  state: {
    hotSearchOffsetY: 0,
    headerSelectedType: 1,
    isEditMode: false,
    shelfList: [],
    shelfSelected: [1, 2, 3],
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY(state, offsetY) {
      state.hotSearchOffsetY = offsetY
    },
    SET_HEADERSELECTEDTYPE(state, headerSelectedType) {
      state.headerSelectedType = headerSelectedType
    },
    SET_IS_EDIT_MODE(state, isEditMode) {
      state.isEditMode = isEditMode
    },
    SET_SHELF_LIST(state, list) {
      state.shelfList = list
    },
    SET_SHELF_SELECTED(state, selected) {
      state.shelfSelected = selected
    },
  }
}

export default store
