/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, t) {
	let result = []
	let target = []
	const help = function (start) {
		let sum = target.reduce((a, b) => a + b, 0)
		if (sum > t) return
		if (sum === t) {
			result.push([...target])
			return
		}
		for (let i = start; i < candidates.length; i++) {
			let item = candidates[i]
			target.push(item)
			help(i)
			target.pop()
		}
	}
	help(0)
	console.log(result)
}

combinationSum([2, 3, 6, 7], 7)
