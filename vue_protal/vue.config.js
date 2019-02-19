const path = require('path')
module.exports = {
  // 选项...outputDir => output.path
  // outputDir: path.resolve(__dirname, '../dist/index.html'),
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/main.ts',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // }, 
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        // change options setting
        options = {
          symbolId: 'icon-[name]'
        }
        return options
      })
    const svgDefRule = config.module.rule('extsvg')
    // todo vue-img 插件的解决方法
    svgDefRule
      .test(/iconfont\.svg$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options = {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]'
        }
        return options
      })
  },
  devServer: {
    contentBase: './release',
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      proxy: {
        "/app4": {
          target: "http://localhost:9004",
          pathRewrite: {"^/app4" : ""}
        }
      }
   }
}
