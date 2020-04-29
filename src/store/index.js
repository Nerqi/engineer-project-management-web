import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import menu from './module/menu'
import select from './module/select'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    menu,
    select
  }
})
