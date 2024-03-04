module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js'],
    other: './src/multiply.js',
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
    // runtime:指浏览器运行时，webpack用来连接模块化的应用程序的所有代码
    //
    splitChunks: {
      cacheGroups: {
        // 公共chunks
        commons: {
          chunks: 'initial',
          minChunks: 2, // 最少有两个引用
          minSize: 0, // 最小的体积
        },
        // 打包第三方包
        vender: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vender',
          enforce: true,
        },
      },
    },
  },
};
