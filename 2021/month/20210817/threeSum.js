/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
	let ans = []
	nums = nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue
		}
		let target = -nums[i]
		let third = nums.length - 1

		for (let j = i + 1; j < nums.length; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue
			}
			while (j < third && nums[third] + nums[j] > target) {
				--third
			}
			if (j === third) {
				break
			}
			if (nums[j] + nums[third] === target) {
				ans.push([nums[j], nums[third], nums[i]])
			}
		}
	}
	console.log(ans)
	return ans
}

threeSum([-1, 0, 1, 2, -1, -4])
