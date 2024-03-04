/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
	let dp = []
	dp[1] = 1
	dp[2] = 2
	dp[3] = 4
	for (let i = 4; i <= n; i++) {
		dp[i] = (((dp[i - 1] + dp[i - 2]) % 1000000007) + dp[i - 3]) % 1000000007
	}
	console.log(dp)
	return dp[n]
}

waysToStep(5)
