/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 给定如下二叉树，以及目标 target = 22，

 5
 / \
 4   8
 /   / \
 11  13  4
 /  \    / \
 7    2  5   1

 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	let value = []
	let result = []
	const help = function (root) {
		if (!root) return
		value.push(root.val)
		let isTarget = value.reduce((a, b) => a + b, 0) === target
		if (isTarget && root.left === null && root.right === null) {
			result.push([...target])
		}

		root.left && help(root.left)
		root.right && help(root.right)
		value.pop()
	}
	help(root)
	console.log(result)
}
