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
var sumOfLeftLeaves = function (root) {
	let result = 0
	const help = function (root) {
		let node = root.left
		if (node && node.left == null && node.right === null) {
			result += Number(node.val)
		}
		root.left && help(root.left)
		root.right && help(root.right)
	}
	if (!root) return 0
	help(root)
	return result
}
