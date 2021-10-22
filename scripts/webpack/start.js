// 1. webpack
// 2. webpack-dev-server (express + webpack-dev-middleware + много хелперов)
// 3. webpack-hot-middlware
// 4. configuration
// 5. webpack compiler
// 6. launch


const webpack = require('webpack')
const devServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware')
const chalk = require('chalk')

const getDevConfig = require('./config/webpack.dev');
const {HOST, PORT} = require('./constants')

const compiler = webpack(getDevConfig());

const server = new devServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true, // for SPA redirects to index.html
  overlay: true, // prints errors to page
  quiet: true, // remove excessive informative console.logs
  clientLogLevel: 'none', // remove excessive informative console.logs
  noInfo: true, // remove excessive informative console.logs
  after: (app) => { // hook for express middleware
    app.use(
      hot(compiler, {
        log: false,
      })
    )
  }
})

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('Server listening on')} ${chalk.blueBright(`http://${HOST}:${PORT}`)}`
  )
})