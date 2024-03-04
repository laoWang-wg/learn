/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 输出：5, nums = [0,1,2,3,4]
 */
var removeDuplicates = function (nums) {
	let start = 0
	for (let i = 1; i < nums.length; ) {
		if (nums[start] != nums[i]) {
			start++
			nums[start] = nums[i]
		} else {
			i++
		}
	}
	console.log(start, nums)
	return start
}

removeDuplicates([1, 1, 2])
