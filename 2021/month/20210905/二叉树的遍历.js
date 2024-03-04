// 中左 右
function preOrderReverse(root) {
	let stack = [root]
	let result = []
	while (stack.length > 0) {
		let node = stack.pop()
		result.push(node.val)
		if (node.right) stack.push(node.right)
		if (node.left) stack.push(node.left)
	}
}

// 左 中 右
function inorderTraversal(root) {
	let stack = [root]
	let result = []
	let cur = root
	while (cur || stack.length > 0) {
		if (cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			let node = stack.pop()
			result.push(node.val)
			cur = node.right
		}
	}
}
// 左右中
function postorderTraversal(root) {
	let stack = [root]
	let result = []
	while (stack.length > 0) {
		let node = stack.pop()
		result.push(node.val)

		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
	}
	return result.reverse()
}

function levelOrder(root) {
	let stack = [root]
	let result = []
	while (stack.length) {
		let len = stack.length
		let level = []
		for (let i = 0; i < len; i++) {
			let node = stack.shift()
			level.push(node.val)
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
		result.push(level)
	}
}
