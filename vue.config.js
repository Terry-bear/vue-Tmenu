const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
console.log('当前环境:', process.env.NODE_ENV)
console.log('当前名称:', process.argv[4])
process.env.VUE_APP_TARGET_PROJECT = process.argv[4]
module.exports = {
  // 选项...outputDir => output.path
  // outputDir: path.resolve(__dirname, '../dist/index.html'),
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
