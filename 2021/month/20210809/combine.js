// 返回1....n 中的所有k个组合
/**
 *
 * @param n
 * @param k
 * [
 * [2,4]
 * [3,4]
 * [2,3]
 * [1,2]
 * [1,3]
 * [1,4]
 * ]
 */
function combine(n, k) {
	let path = []
	let result = []
	const backtracking = function (n, k, startIndex) {
		if (path.length === k) {
			result.push([...path])
			return
		}
		for (let i = startIndex; i <= n; i++) {
			path.push(i)
			backtracking(n, k, i + 1)
			path.pop()
		}
	}
	backtracking(n, k, 1)
	return result
}

let a = combine(4, 2)
console.log(a)
