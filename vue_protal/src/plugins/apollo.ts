import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'unfetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { GQL_URL } from '../api/api.config'
// 组件中使用 this.$apollo 调用 apollo
Vue.use(VueApollo)

const debug = process.env.NODE_ENV !== 'production'

const loading = 0

function newApolloClient(arg: string) {
  return new ApolloClient({
    link: new HttpLink({ uri: GQL_URL(arg), fetch }),
    cache: new InMemoryCache(),
    connectToDevTools: debug
  })
}
const defaultClient = newApolloClient(`auth`)
const menu = newApolloClient(`menu`)
const org = newApolloClient(`org`)
const offer = newApolloClient(`offer`)
const task = newApolloClient(`task`)
const message = newApolloClient(`message`)
const area = newApolloClient(`area`)
const person = newApolloClient(`person`)
const medical = newApolloClient(`medical`)
const device = newApolloClient(`device`)
// Create the apolloProvider
export const apolloProvider = new VueApollo({
  clients: {
    menu,
    org,
    offer,
    task,
    message,
    area,
    person,
    medical,
    device
  },
  defaultClient
  // watchLoading (state, mod) {
  //   loading += mod
  //   console.log('Global loading', loading, mod)
  // }
  // errorHandler (error) {
  //   console.log('Global error handler')
  //   console.error(JSON.parse(JSON.stringify(error)))
  // }
})
