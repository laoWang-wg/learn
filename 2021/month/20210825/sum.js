// 输入一个二叉树和一个整数，打印出二叉树中节点值的和等于输入整数所有的路径

function test(tree, target) {
	let result = []
	let path = []
	const help = function (root, target) {
		if (root) return result
		path.push(root.val)
		target = target - root.val

		if (target === 0) {
			result.push(...path)
		}
		test(root.left, target)
		test(root.right, target)
		path.pop()
	}

	help(tree, target)
}
