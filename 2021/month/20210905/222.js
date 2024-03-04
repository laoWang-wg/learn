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
var countNodes = function (root) {
	const help = function (node) {
		if (!node) return 0

		let left = help(node.left)
		let right = help(node.right)

		return left + right + 1
	}

	return help(root)
}
