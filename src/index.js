// import * as C from './constant'

//- webpack 的require.context 方法 提取模块内容

// console.log('start')

// const module = webpack.require.context('.', true, /.js$/);

// const modules = {};

// module.keys().forEach((key) => {
//   if (key === './index.js' || key === './constant.js') {
//     return;
//   }
//   Object.assign(modules, module(key));
// });

// console.log(modules)

// export default modules;

const plugin = require("./plugin")

// import plugin from 

// export default plugin

module.exports = plugin

// export * from './plugin/index.js'