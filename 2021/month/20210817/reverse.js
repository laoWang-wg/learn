/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let target = Math.abs(x).toString()

	let ans = []

	while (target) {
		ans.push(target % 10)
		target = Math.floor(target / 10)
	}

	let result = x > 0 ? ans.join("") - 0 : 0 - ans.join("")
	if (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) {
		return 0
	}
	console.log(result, Number.MAX_SAFE_INTEGER)
	return result
}

reverse(1534236469)
