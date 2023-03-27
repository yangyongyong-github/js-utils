## 如何构建库

## 开发

如何方便使用，自己的全局

导入导出

测试

## 如何发布和迭代？

##

day.js

## 架构设计

测试起见
参照了 jest、wepack-dev-server 等方式，这里直接使用 node(nodemon) test/file.js

**node(CMJ)中自动匹配 index.js 和 .js文件**

1. 使用 ESM
   问题：
   (1) 繁琐的文件引入
   每个文件处需要写上 .js 后缀名（CMJ 直接 /filename 即可，自动寻找 index.js 文件）

> ESM
```js
// src/plugin/index.js
export * from './Date/index.js'

// src/plugin/Date/index.js
export * from './format.js'

// src/plugin/Date/format.js
export function dateFormat(part = 0, date = +new Date()) {}
```
> CMJ

2. 使用 CommonJS

打包时， 输出 dist 文件，便于 npm 下载引入后直接使用
但是测试起见，如何使用呢？
使用了 html 中 script 引入文件后，直接使用函数
又或者

```js
const package = require('./jsTools.js')
console.log(package) // self not defined

import 报错 module:""
```

方法之间如何相互访问（避免写公共的utils方法）