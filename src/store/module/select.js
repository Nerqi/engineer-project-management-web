import { axios } from '../../libs/http'
import services from '../../api/services'

const state = {
  cycleList: null
}

// mutations
const mutations = {
  setCycleList (state, data) {
    state.cycleList = data
    localStorage.setItem('cycleList_sel', JSON.stringify(data))
  }
}

// getters
const getters = {
  getCycleList: (state) => {
    const cache = localStorage.getItem('cycleList_sel')
    let cacheData = null
    if (cache) {
      cacheData = JSON.parse(cache)
    }
    if (state.cycleList) {
      return state.cycleList
    } else {
      return cacheData
    }
  }
}

const actions = {
  cycleList (context) {
    axios.post(services.commonSel.getCycleList).then(res => {
        if (res.data && res && res.data.data) {
          const data = res.data.data
          context.commit('setCycleList', data)
        }
      }
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
