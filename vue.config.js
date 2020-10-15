const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const path = require('path')

const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'), // antd包位置
  stylesDir: path.join(__dirname, './src/css/theme'), // 主题文件所在文件夹
  varFile: path.join(__dirname, './src/css/theme/variables.less'), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, './src/css/theme/main.less'), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  outputFilePath: path.join(__dirname, './public/color.less'), // 提取的less文件输出到什么地方
  themeVariables: ['@primary-color'], // 要改变的主题变量
  indexFileName: './public/index.html', // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
}

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#00cdcd',
          // 'font-size-base': '12px'
        },
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3005',
        changeOrigin: true
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/login/, to: '/login.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Bonree' // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    },
    login: {
      entry: 'src/pages/login.js',
      template: 'public/index.html',
      filename: 'login.html',
      title: 'login'
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [new AntDesignThemePlugin(options)]
  }
}
