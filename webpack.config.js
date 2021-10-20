const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = ['dist'];
let cleanOptions = {
  verbose = true,
}

module.exports = () => {
  return {
    mode: 'none',
    devtool: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Изучаем вебпак',
      }),
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
    ]
  }
}