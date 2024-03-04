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
 * @return {boolean}
 */
var isBalanced = function (root) {
	const h = function (root) {
		if (!root) return 0
		let leftH = h(root.left)
		if (leftH === -1) return -1
		let rightH = h(root.right)
		if (rightH === -1) return -1
		if (Math.abs(leftH - rightH) > 1) {
			return -1
		}
		return 1 + Math.max(leftH, rightH)
	}

	return h(root) === -1 ? false : true
}
