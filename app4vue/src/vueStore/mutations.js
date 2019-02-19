import * as types from './mutation-types'

const mutations = {
  // 设置token
  [types.SET_COUNT](state) {
    state.count += 1
  }
}

export default mutations
