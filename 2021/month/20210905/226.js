function invertTree(root) {
	if (!root) return
	let left = invertTree(root.left)
	let right = invertTree(root.right)

	root.left = right
	root.right = left
	return root
}
