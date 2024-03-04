/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入: [0,1,0,3,12]
 输出: [1,3,12,0,0]
 */
var moveZeroes = function (nums) {
	let start = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			;[nums[start], nums[i]] = [nums[i], nums[start]]
			start++
		}
	}
	return nums
}
//var moveZeroes = function (nums) {
// 	let start = 0
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] != 0) {
// 			if (i > start) {
// 				nums[start] = nums[i]
// 				nums[i] = 0
// 			}
// 			start++
// 		}
// 	}
// 	console.log(nums)
// }

console.log(moveZeroes([1, 0, 1]))
