/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
	let maxDepth = -Infinity
	let value = null
	const help = function (root, depth) {
		if (root.left === null && root.right === null) {
			if (depth > maxDepth) {
				maxDepth = depth
				value = root.val
			}
		}

		if (root.left) {
			help(root.left, depth + 1)
		}
		if (root.right) {
			help(root.right, depth + 1)
		}
	}
	help(root, 0)
	return value
}
