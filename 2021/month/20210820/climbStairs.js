/**
 * @param {number} n
 * @return {number}
 */
/**
 * 1 1
 * 2 1/2
 * @param n
 */
var climbStairs = function (n) {
	let dp = []
	dp[1] = 1
	dp[2] = 2

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	console.log(dp)
}

climbStairs(3)
