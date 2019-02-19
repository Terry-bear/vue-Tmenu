import * as types from './mutation-types'

export const fedLogOut = function({ commit, state}) {
  return new Promise(resolve => {
    commit(types.SET_COUNT, state.count++)
    resolve()
  })
}
