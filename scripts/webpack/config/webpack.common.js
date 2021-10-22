const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('../constants');

module.exports = () => {
  return {
    mode: 'none',
    entry: [
      SOURCE_DIRECTORY
    ],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Изучаем вебпак',
      }),
    ]
  }
}