const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('./webpack.common');
const { PROJECT_ROOT } = require('../constants');
const getCommonConfig = require('./webpack.common')

const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT
}

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(cleanOptions),
    ]
  })
}