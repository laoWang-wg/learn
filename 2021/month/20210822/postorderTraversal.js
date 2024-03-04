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
var postorderTraversal = function (root) {
	if (!root) return []
	let stack = []
	let result = []
	while (root) {
		stack.push(root)

		if (root.right) {
			stack.push(root.right)
		}
		if (root.left) {
			stack.push(root.left)
		}
		let node = stack.pop()
		result.push(node.val)
		root = node
	}
}
