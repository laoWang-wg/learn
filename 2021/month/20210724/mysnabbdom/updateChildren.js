import patchVnode from './patchVnode.js'
import createElement from './createElement.js'

// 判断是否是同一个虚拟节点
function checkSameVnode(a, b) {
	return a.sel == b.sel && a.key == b.key
}

export default function updateChildren(parentElm, oldCh, newCh) {
	console.log('我是updateChildren')
	console.log(oldCh, newCh)

	// 旧前
	let oldStartIdx = 0
	// 新前
	let newStartIdx = 0
	// 旧后
	let oldEndIdx = oldCh.length - 1
	// 新后
	let newEndIdx = newCh.length - 1
	// 旧前节点
	let oldStartVnode = oldCh[0]
	// 旧后节点
	let oldEndVnode = oldCh[oldEndIdx]
	// 新前节点
	let newStartVnode = newCh[0]
	// 新后节点
	let newEndVnode = newCh[newEndIdx]

	let keyMap = null

	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		// 首先不是判断①②③④命中，而是要略过已经加undefined标记的东西
		if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
			oldStartVnode = oldCh[++oldStartIdx]
		} else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
			oldEndVnode = oldCh[--oldEndIdx]
		} else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
			newStartVnode = newCh[++newStartIdx]
		} else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
			newEndVnode = newCh[--newEndIdx]
		}
		// 旧前 和 新前
		if (checkSameVnode(oldStartVnode, newStartVnode)) {
			console.log(1)
			patchVnode(oldStartVnode, newStartVnode)
			oldStartVnode = oldCh[++oldStartIdx]
			newStartVnode = newCh[++newStartIdx]
		} else if (checkSameVnode(oldEndVnode, newEndVnode)) {
			// 旧后 新后
			console.log(2)
			patchVnode(oldEndVnode, newEndVnode)
			oldEndVnode = oldCh[--oldEndIdx]
			newEndVnode = newCh[--newEndIdx]
		} else if (checkSameVnode(oldStartVnode, newEndVnode)) {
			//  新后 旧前
			console.log(3)
			patchVnode(oldStartVnode, newEndVnode)
			parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
			oldStartVnode = oldCh[++oldStartIdx]
			newEndVnode = newCh[--newEndIdx]
		} else if (checkSameVnode(oldEndVnode, newStartVnode)) {
			// 新前 旧后
			console.log(4)
			patchVnode(oldEndVnode, newStartVnode)
			parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
			oldEndVnode = oldCh[--oldEndIdx]
			newStartVnode = newCh[++newStartIdx]
		} else {
			if (!keyMap) {
				keyMap = {}
				for (let i = oldStartIdx; i <= oldEndIdx; i++) {
					let key = oldCh[i].key
					if (key) {
						keyMap[key] = i
					}
				}
			}
			let idxInOld = keyMap[newStartVnode.key]
			if (idxInOld === undefined) {
				parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
			} else {
				const elmToMove = oldCh[idxInOld]
				if (elmToMove.elm.nodeType === 1) {
					patchVnode(elmToMove, newStartVnode)
					oldCh[idxInOld] = undefined
					parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
				}
			}
			newStartVnode = newCh[++newStartIdx]
			console.log(idxInOld)
		}
	}
	if (newStartIdx <= newEndIdx) {
		console.log('还有新节点')
		console.log(newEndIdx)
		// let before = newCh[newEndIdx+1]==null ? null : newCh[newEndIdx+1].elm
		// console.log(before);
		for (let i = newStartIdx; i <= newEndIdx; i++) {
			parentElm.insertBefore(
				createElement(newCh[i]),
				oldCh[oldStartIdx] ? oldCh[oldStartIdx].elm : null,
			)
		}
	} else if (oldStartIdx <= oldEndIdx) {
		for (let i = oldStartIdx; i <= oldEndIdx; i++) {
			if (oldCh[i]) {
				parentElm.removeChild(oldCh[i].elm)
			}
		}
	}
}
