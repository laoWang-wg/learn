/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	if (target < nums[0]) {
		nums.unshift(target)
		return 0
	}
	if (nums[nums.length - 1] < target) {
		nums.push(target)
		return nums.length - 1
	}

	let left = 0
	let right = nums.length

	while (left < right) {
		let mid = Math.floor((left + right) / 2)
		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	nums.splice(left, 0, target)
	return left
}

searchInsert([1, 3, 5, 6], 2)
