import { getBreadCrumbList } from '@/libs/util'
export default {
  namespaced: true,
  state: {
    homeRoute: { 'menu_id': 1, 'menu_name': '首页', 'menu_icon': 'ios-briefcase', 'menu_url': '/home' },
    breadCrumbList: [],
    menuList: localStorage.getItem('menu_list') ? localStorage.getItem('menu_list') : null
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setMenuList (state, param) {
      // state.siderMenuMap = getSiderMenuMap(param)
      state.menuList = param
      localStorage.setItem('menu_list', JSON.stringify(state.menuList))
    }
  },
  getters: {
    getMenuList: (state) => {
      const cache = localStorage.getItem('menu_list')
      let cacheData = null
      if (cache) {
        cacheData = JSON.parse(cache)
      }
      if (state.menuList) {
        return state.menuList
      } else {
        return cacheData
      }
    }
  },
  actions: {

  }
}
