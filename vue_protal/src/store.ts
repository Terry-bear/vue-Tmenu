import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 防抖时间
let timer: NodeJS.Timeout
export default new Vuex.Store({
  state: {
    loginToken: 'sss',
    subMenuStatus: true,
    dataList: [
      {
        name: '流浪地球',
        title: '流浪地球title',
        url: '#1',
        id: '11233543',
        icon: '1',
        status: false
      },
      {
        name: '飞驰人生',
        title: '流浪地球title',
        url: '#2',
        id: '112337656',
        icon: '2',
        status: true
      },
      {
        name: '疯狂的外星人',
        title: '疯狂的外星人title',
        url: '#3',
        id: '11236781',
        icon: '3',
        status: false
      },
      {
        name: '一出好戏',
        title: '一出好戏title',
        url: '#4',
        id: '11238901',
        icon: '4',
        status: false
      },
      {
        name: '阿甘正传',
        title: '阿甘正传title',
        url: '#5',
        id: '11267891',
        icon: '5',
        status: true
      },
      {
        name: '当幸福来敲门',
        title: '当幸福来敲门title',
        url: '#6',
        id: '1167896',
        icon: '6',
        status: false
      },
      {
        name: '战狼1',
        title: '战狼1title',
        url: '#7',
        id: '116896',
        icon: '7',
        status: false
      },
      {
        name: '唐人街探案',
        title: '唐人街探案title',
        url: '#8',
        id: '167896',
        icon: '8',
        status: true
      },
      {
        name: '阿凡达',
        title: '阿凡达title',
        url: '#9',
        id: '116786',
        icon: '9',
        status: false
      }
    ]
  },
  mutations: {
    /**
     * 设置可选菜单状态
     * @param state dataList
     * @param payload index
     */
    setDataListStatus(state: any, payload: number) {
      state.dataList[payload].status = !state.dataList[payload].status
    },

    /**
     * 设置左侧菜单排序
     */
    setDataListOrder(state: any, payload: number) {
      console.table(state.dataList)
      console.table(payload)
    },
    setSubMenu(state: any, paylaod: boolean) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        state.subMenuStatus = paylaod
      }, 300)

    }
  },
  actions: {

  }
})
