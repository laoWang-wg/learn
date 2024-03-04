/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
    子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
	let dp = []
	dp[0] = 1
	let max = -Infinity
	for (let i = 1; i < nums.length; i++) {
		dp[i] = 1
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		max = Math.max(max, dp[i])
	}
	return max
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18]

console.log(lengthOfLIS(nums))
