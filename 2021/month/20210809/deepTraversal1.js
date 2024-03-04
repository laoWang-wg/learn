// function deepTraversal1(tree) {
// 	while (tree) {
// 		console.log(tree.value)
// 		deepTraversal1(tree.left)
// 		deepTraversal1(tree.right)
// 	}
// }

/*深度优先遍历三种方式*/
let deepTraversal1 = (node, nodeList = []) => {
	if (node !== null) {
		nodeList.push(node)
		let children = node.children
		for (let i = 0; i < children.length; i++) {
			deepTraversal1(children[i], nodeList)
		}
	}
	return nodeList
}
// 非递归
let deepTraversal3 = (node) => {
	let stack = []
	let nodes = []
	if (node) {
		// 推入当前处理的node
		stack.push(node)
		while (stack.length) {
			let item = stack.pop()
			let children = item.children
			nodes.push(item)

			for (let i = children.length - 1; i >= 0; i--) {
				stack.push(children[i])
			}
		}
	}
	return nodes
}
