/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [-4,-1,0,3,10]
 输出：[0,1,9,16,100]
 解释：平方后，数组变为 [16,1,0,9,100]
 排序后，数组变为 [0,1,9,16,100]

 */
var sortedSquares = function (nums) {
	let result = []
	let start = 0
	let end = nums.length - 1
	let k = nums.length - 1
	while (start <= end) {
		if (nums[start] * nums[start] < nums[end] * nums[end]) {
			result[k--] = nums[end] * nums[end]
			end--
		} else {
			result[k--] = nums[start] * nums[start]
			start++
		}
	}
	return result
}
console.log(sortedSquares([-5, -3, -2, -1]))
