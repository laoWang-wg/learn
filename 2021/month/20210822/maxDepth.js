function maxDepth(tree) {
	if (!tree) {
		return 0
	}
	return Math.max(maxDepth(tree.left), maxDepth(tree.right)) + 1
}
