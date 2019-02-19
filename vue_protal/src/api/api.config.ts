const DEV_PORT = '89' // dev ---> 端口号 89
const TEST_PORT = '88' // test ---> 端口号 88
const SHOW_PORT = '85' // show ---> 端口号 85
const PRO_PORT = '86' // pro ---> 端口号 86

// !当前分支的URL
const CURR_PORT: string = '89'

// todo 自动部署apk上传的oss路径
export function currBranch() {
  switch (CURR_PORT) {
    case '89':
      return 'dev'
    case '88':
      return 'test'
    case '86':
      return 'prod'
    case '85':
      return 'show'
  }
}

export function GQL_URL(arg: string) {
  return `https://graphql.gshbzw.com:${CURR_PORT}/api/${arg}/graphql`
}

export const WEBSOCKET_NOTIFY_URL = `https://graphql.gshbzw.com:${CURR_PORT}/api/message/endpointUser`

export const WEBSOCKET_DATAV_URL = `https://graphql.gshbzw.com:${CURR_PORT}/api/message/endpointDatav`

export const AXIOS_URL = `https://graphql.gshbzw.com:${CURR_PORT}/`
