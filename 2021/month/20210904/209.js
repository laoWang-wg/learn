// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let sum = 0
	let left = 0
	let len = Infinity
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		while (sum >= target) {
			len = Math.min(len, i - left + 1)
			sum -= nums[left++]
		}
	}
	console.log(len)
	return len === Infinity ? 0 : len
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
