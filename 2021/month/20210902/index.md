1. 关于公式编辑MathJax和katex的选择
   - katex肉眼可见的速度， 比较新，非常快
   
2. 编辑器的集成
   - 第一katex是插件形式的一个开源编辑器（并且公式是有标准的latex）
   - 其次katex有mathjax的集成插件，他主要包含渲染和编辑(插件缺陷:可编辑但是无法可视化编辑，需要懂latex的专业人士)
   - 所以我只需要修改弹窗，使弹出的编辑器是我需要的面板即可
   - ckeditor 加载弹窗可以是iframe加载通过message的方式交换数据
   - 构建编辑器面板的实现使用MathQuill
   - MathQuill 是一个使用公式形成一个可视化编辑 js公式库(参考JMEditor)
   - JMEditor 无法再次编辑
   

2. 配置中心
   - 原因：分布式部署，配置繁琐
   - 过程：Apollo配置 - webpack config - 自研配置中心
   - 目标：期望开发一个能产品使用的配置平台
   
3. 雪地合并两端代码
   - 早期发现问题，一力主导项目的合并
   - Lerna(英 [ˈlɜːnə] )勒纳
   - Monorepo 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。
   - Lerna是一种Monorepo的解决方案
   - Lerna是一个用来优化托管在 git\npm 上的多 package 代码库的工作流的一个管理工具,可以让你在主项目下管理多个子项目，从而解决了多个包互相依赖，且发布时需要手动维护多个包的问题。
   

4. 移动端优化
   - 早期使用原生，后期人员变化，使用vue
   - 图片压缩， 可行的情况下图标使用精灵图
   - 启用gzip, CDN
   - 合并css、js启用缓存， 提高复用
   - 不加载字体，必要使用图片替代
   - 期望：可以考虑服务器端渲染（团队人员，以及后期团队组织发生变化）
   - html 上传CDN， 后端接口配置html



5. 优化跟读高亮
   - 早期：setTimeout
   - 然后 timeupdate(频率过高) - currentTime
   - setInterval - audio.currentTime

6. position
   1. static  正常文档流
   2. relative 相对元素正常文档流偏移，原位置仍然保留
   3. absolute 脱离文档流，以最近的一个除static元素外的父元素定位
   4. fixed 以浏览器窗口定位，脱离文档流。位置跟随窗口变化
   5. sticky 元素按普通流定位， 然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。
      1. z－index 无效。

7. display //https://zhuanlan.zhihu.com/p/22005235
   1. inline  padding、margin、width、height都不会有效， 相邻inline之间的空隙换行会被解析
   2. block属性 跟块元素表现一致
   3. inline-block 行内块元素显示：元素的内容以块状显示，行内的其他元素显示在同一行。（只有这一个元素类型支持vertical-align属性）img,input(行内块元素)。


