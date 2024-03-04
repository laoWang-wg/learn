import h from './h.js'
import patch from './patch.js'
// import "./snabbdom";
// 创建虚拟节点

const vnode1 = h('ul', {}, [
	h('li', { key: 'A' }, 'A'),
	h('li', { key: 'B' }, 'B'),
	h('li', { key: 'C' }, 'C'),
])

const vnode2 = h('ul', {}, [
	h('li', { key: 'Q' }, 'Q'),
	h('li', { key: 'A' }, 'A'),
	h('li', { key: 'B' }, 'B'),
	h('li', { key: 'C' }, 'C'),
	h('li', { key: 'D' }, 'D'),
])
const container = document.getElementById('container')
patch(container, vnode1)

// 点击按钮时，将vnode1变为vnode2
btn.onclick = function () {
	patch(vnode1, vnode2)
}
// console.log(vnode1);

// 旧前  新前 匹配： 新旧start指针移动
// 旧后  新后 匹配： 新旧end指针移动
// 新后  旧前 匹配： （移动）旧的start  插入到旧的 end 后面
// 新前  旧后 匹配： （移动）旧的end  移动到 旧的 start 前面
// 都没有 匹配
// 1. 循环查找新节点是否在旧中存在
// 1）不存在：直接插入到旧的当前start前面
// 2）存在：（移动）找到node 移动到 旧的 当前start位置

// new多余项
// 还有新节点：直接插入到 最后一个old 节点前
// old 多余
// 直接移除 startIndex 和endIndex 之间的节点
