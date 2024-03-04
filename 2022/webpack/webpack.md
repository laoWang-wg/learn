### webpack

webpack 本质上是一个 js 应用程序的静态模块打包器

# 1.webpack 中的 module 是什么

webpack 支持 ESModule CommonJs,AMD...

ESM: es6 模块化方案,ESM 模块输出的是值的引用
CommonJs: CommonJS 模块输出的是一个值的拷贝

### chunk bundle 区别是什么？

1.chunk 是 webpack 打包过程中 Module 的集合，是打包过程中的概念--> 入口模块开始，递归遍历各个引用模块，通过引用关系逐个打包模块，这些 module 就形成了一个 chunk

对于多入口模块，可能会产出多条打包路径，每条路径就会形成一个 chunk

2.bundle
是我们最终输出的一个或多个打包好的文件。

3.chunk 和 bundle 的关系是什么
chunk 是过程中的代码块，bundle 是打包输出的文件.

4.Split Chunk

### plugin 和 loader

1.loader 模块转换器，将非 js 模块转化为 webpack 能处理的 js 模块。
本质上，loader 将所有类型的文件，转换为应用程序的**依赖图**可以直接饮用的模块

2.plugin 扩展插件
webpack 在运行的各个阶段会广播出对应的时间，插件去监听对应的事件。

3.Compiler 对象，包含了 webpacb 环境的所有配置信息，包括 options，loader，plugins,全局唯一

4.compliation 包含了当前的模块资源，编译生成资源，
webpack 在开发模式下运行的人时候，没当检测到一个文件的变化，就会创建一次新的 compliation

## 描述 webpack 打包过程

### 1.初始化参数： shell webpack.config.js

### 2.开始编译：初始化一个 comliler 对象，加载所有的配置开始编译

### 3.确定入口：根据 entry 的配置，找出所有的入口文件

### 4.编译模块： 从入口文件开始，调用对应的 loader，转换相应文件，递归找到所有依赖

### 5.完成模块编译：得到每个模块被翻译后的最终内容以及他们之间的依赖关系。

### 6.输出资源： 根据得到的依赖关系，组装成一个个包含多个 module 的 chunk

### 7.输出完成： 根据配置，确定要输出的文件名以及文件路径
