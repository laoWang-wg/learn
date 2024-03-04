/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 输入: k = 3, n = 9
 输出: [[1,2,6], [1,3,5], [2,3,4]]
 */
var combinationSum3 = function (k, n) {
	let target = []
	let result = []
	const help = function (start) {
		if (target.length === k && target.reduce((a, b) => a + b) === n) {
			result.push([...target])
			return
		}
		for (let i = start; i <= 9; i++) {
			target.push(i)
			help(i + 1)
			target.pop()
		}
	}

	help(1)
	console.log(result)
	return result
}
combinationSum3(3, 9)
