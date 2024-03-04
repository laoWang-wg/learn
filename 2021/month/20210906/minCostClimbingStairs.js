/**
 * @param {number[]} cost
 * @return {number}
 * 输入：cost = [10, 15, 20]
 输出：15
 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15
 */
var minCostClimbingStairs = function (cost) {
	let dp0 = cost[0]
	let dp1 = cost[1]
	let dp2 = 0

	for (let i = 2; i < cost.length; i++) {
		dp2 = Math.min(dp0, dp1) + cost[i]
		dp0 = dp1
		dp1 = dp2
	}

	return Math.min(dp0, dp1)
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
