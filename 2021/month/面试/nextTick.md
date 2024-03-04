// https://zhuanlan.zhihu.com/p/108929260
nextTick函数其实做了两件事情
1. 一是生成一个timerFunc，把回调作为microTask或macroTask参与到事件循环中来
2. 二是把回调函数放入一个callbacks队列，等待适当的时机执行。


它会按照Promise、MutationObserver、setTimeout优先级去调用传入的回调函数。前两者会生成一个microTask任务，而后者会生成一个macroTask。（微任务和宏任务）

2.5
在中间 又遇到了 某些情况下  事件的执行甚至比 事件冒泡还快 （所以将相关事件的行为 改成统一走 宏任务）
同时也由于MutationObserver 的兼容性问题， 所以用MessageChannel 替换了 MutationObserver


那最后改完 貌似 带来的问题更多

2.6
那所以最近采用的策略是 统一走微任务， 那其中需要特殊处理的 就 利用时间戳的方式解决
又改回MutationObserver


