/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let sum = 0
	let result = -Infinity
	for (let i = 0; i < nums.length; i++) {
		if (sum > 0) {
			sum += nums[i]
		} else {
			sum = nums[i]
		}
		result = Math.max(result, sum)
	}
	console.log(result)
	return result
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

function compose(...fns) {
	if (fns.length === 1) {
		return fns[0]
	}

	return fns.reduce(
		(a, b) =>
			(...args) =>
				a(b(...args))
	)
}
