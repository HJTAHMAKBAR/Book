import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import info from './modules/info'
import getters from './getters'
import actions from './actions'
import store from "@/store/modules/store";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    info,
    store
  },
  getters,
  actions
})
