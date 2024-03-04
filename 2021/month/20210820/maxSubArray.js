function maxSubArray(nums) {
	// let pre = 0,
	// 	maxAns = nums[0]
	// for (let i = 1; i < nums.length; i++) {
	// 	let x = nums[i]
	// 	pre = Math.max(pre + x, x)
	// 	maxAns = Math.max(maxAns, pre)
	// }
	// return maxAns

	let sum = 0
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		if (sum > 0) {
			sum = sum + nums[i]
		} else {
			sum = nums[i]
		}

		max = Math.max(sum, max)
	}
	return max
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))
