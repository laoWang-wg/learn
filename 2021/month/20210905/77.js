/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let target = []
	let result = []
	const help = function (start, target) {
		if (target.length === k) {
			result.push([...target])
			return
		}

		for (let i = start; i <= n - k + target.length + 1; i++) {
			if (target.includes(i)) {
				continue
			}
			target.push(i)
			help(i + 1, target)
			target.pop()
		}
	}
	help(1, target)
	console.log(result)
	return result
}

combine(4, 2)
