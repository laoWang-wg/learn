/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let dp = [[1]]
	for (let i = 1; i < numRows; i++) {
		dp[i] = [1]
		for (let j = 1; j < i; j++) {
			dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
		}
		dp[i].push(1)
		// dp[i] = [...res]
	}
	console.log(dp)
}

generate(5)
