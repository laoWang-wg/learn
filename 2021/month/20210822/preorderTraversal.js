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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	if (!root) return []
	let stack = [root]
	let result = []
	while (root || stack.length > 0) {
		let node = stack.pop()
		result.push(node.val)
		if (node.left) {
			stack.push(node.left)
		} else {
			stack.push(node.right)
		}
	}
}
