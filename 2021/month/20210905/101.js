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
	//比较左右 两个节点
	const compare = function (left, right) {
		//左空 右有值
		if (left == null && right != null) return false
		else if (left != null && right == null) return false
		else if (left == null && right == null) return true
		else if (left.val != right.val) return false // 注意这里我没有使用else
		// 如果当前 都相等， 那就进行 下一层的比较
		// 左节点的左边 和右节点的右边 比较
		let out = compare(left.left, right.right)
		// 左节点的右边 和右节点的左边 比较
		let inside = compare(left.right, right.left)
		return out && inside
	}
	if (!root) return true
	return compare(root.left, root.right)
}
