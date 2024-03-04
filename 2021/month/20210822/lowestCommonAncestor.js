/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (root == null || p == root || q == root) {
		return root
	}

	let l = lowestCommonAncestor(root.left, p, q)
	let r = lowestCommonAncestor(root.right, p, q)

	return l == null ? r : r == null ? l : root
}
