function minDepth(root) {
	const help = function (root) {
		if (!root) return 0
		let leftH = help(root.left)
		let rightH = help(root.right)
		if (root.left === null && root.right !== null) {
			return 1 + rightH
		}
		if (root.left !== null && root.right === null) {
			return 1 + leftH
		}
		return 1 + Math.min(leftH, rightH)
	}
	return help(root)
}
