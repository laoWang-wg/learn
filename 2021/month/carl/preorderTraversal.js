// 中 左 右
function preorderTraversal(root) {
	let stack = [root]
	let result = []
	while (stack.length) {
		let node = stack.pop()
		result.push(node.val)
		if (node.right) stack.push(node.right)
		if (node.left) stack.push(node.left)
	}
}

// 左 右 中

function inorderTraversal(root) {
	let stack = []
	let cur = root
	let result = []
	while (cur !== null || stack.length) {
		if (cur != null) {
			stack.push(cur)
			cur = cur.left
		} else {
			let node = stack.pop()
			result.push(node.val)
			cur = node.right
		}
	}
}

// 左 右 中
function postorderTraversal(root) {
	let stack = [root]
	let result = []
	while (stack.length) {
		let node = stack.pop()
		result.push(node.val)
		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
	}

	return result.reverse()
}
