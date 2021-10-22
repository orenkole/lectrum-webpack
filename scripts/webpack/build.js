// 1 webpack
const webpack = require('webpack');
const chalk = require('chalk')
// 2 конфигурация
const getProdConfig = require('./config/webpack.prod')
const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
  if(error) {
    console.log(error.stack || error);
    if(error.details) {
      console.log(error.details);
    }
    return null
  }  

  const info = stats.toString({
    hash: true,
    modules: false,
    colors: true,
    entrypoints: false,
    version: true,
    env: true 
  })
  console.log(chalk.greenBright('Build completed'))
  console.log(info);
  if(stats.hasWarnings()) {
    console.log(chalk.yellowBright('Warning'))
  }
});