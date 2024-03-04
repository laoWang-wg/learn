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
var isSymmetric = function (root) {
	if (!root) return true
	const compare = function (left, right) {
		if (left === null && right === null) return true
		if (left !== null && right === null) return false
		if (left === null && right !== null) return false
		if (left.val !== right.val) return false

		let _left = compare(left.left, right.right)
		let _right = compare(left.right, right.left)

		return _left && _right
	}

	return compare(root.left, root.right)
}
