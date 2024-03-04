var binaryTreePaths = function (root) {
	let result = []
	const help = function (root, path) {
		path += "->" + root.val
		if (root.left === null && root.right === null) {
			result.push(path)
		}

		root.left && help(root.left, path)
		root.right && help(root.right, path)
	}
	if (!root) return
	return result
}
