const {HotModuleReplacementPlugin} = require('webpack');
const merge = require('webpack-merge');
const getCommonConfig = require('./webpack.common')


module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    entry: [
      'webpack-hot-middleware/client?reload=true&quiet=true',
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    plugins: [
      new HotModuleReplacementPlugin()
    ]
  })
}