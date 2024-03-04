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
var minDepth = function (root) {
	let stack = [root]
	let count = 0
	while (stack.length) {
		let len = stack.length
		count++
		for (let i = 0; i < len; i++) {
			let node = stack.shift()
			if (node.left === null && node.right === null) return count
			if (node.left) stack.push(node.left)
			if (node.right) stack.push(node.right)
		}
	}
}

var minDepth = function (root) {
	if (!root) return 0

	let leftDepth = minDepth(root.left)
	let rightDepth = minDepth(root.right)

	if (root.left === null && root.right !== null) {
		return 1 + rightDepth
	}
	if (root.left !== null && root.right === null) {
		return 1 + leftDepth
	}

	return Math.min(leftDepth, rightDepth) + 1
}
