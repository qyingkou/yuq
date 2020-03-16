/* ESLINT no-console:0 */
global.__WEBPACK_CONFIG__ = {
  rootDir: __dirname
};
const { rootDir } = global.__WEBPACK_CONFIG__;
const devConfig = require('./config/webpack.dev');
const prdConfig = require('./config/webpack.prd');

module.exports = argv => {
  const mode = argv;
  let config = devConfig;
  switch (mode) {
  case 'production':
    config = prdConfig;
    break;
  default:
    config = devConfig;
  }
  printInfo({
    mode,
    rootDir,
    // config
  });
  return config;
};

function printInfo(info) {
  console.warn('\n+++++++++++++++++++++ 调试信息 ++++++++++++++++++++++++\n');
  for (let i in info) {
    if (typeof info[i] === 'object') {
      console.log(`+ ${i} : `);
      console.dir(info[i]);
    } else {
      console.log(`+ ${i} : ${info[i]}`);
    }
  }
  console.warn('\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++\n');
}
