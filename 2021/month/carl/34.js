/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */
var searchRange = function (nums, target) {
	let left = 0
	let right = nums.length - 1
	let start = -2
	let end = 0
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (nums[mid] > target) {
			right = mid - 1
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			start = mid
			end = mid
			console.log(mid)
			while (start >= 0 && nums[start] === target) {
				start--
			}
			while (end < nums.length && nums[end] === target) {
				end++
			}
			break
		}
	}
	return [start + 1, end - 1]
}

console.log(searchRange([1], 1))
