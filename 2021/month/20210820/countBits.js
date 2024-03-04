/**
 * 0 --> 0
 1 --> 1
 2 --> 10
 3--> 11
 4-->100
 5 101
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let dp = []
	dp[0] = 0
	var addBinary = function (a, b) {
		var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2))
		return dec.toString(2)
	}
	let result = [0]
	for (let i = 1; i <= n; i++) {
		console.log(parseInt(dp[i - 1], 2))
		dp[i] = addBinary(dp[i - 1], 1)
		result.push(dp[i].split("1").length - 1)
	}
	return result
}

console.log(countBits(5))
