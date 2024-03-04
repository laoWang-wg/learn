/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map()

	for (const index of Object.keys(nums)) {
		let num = nums[index]
		let value = target - num
		if (map.has(value)) {
			return [map.get(value), index]
		}
		map.set(num, index)
	}
}

twoSum([2, 7, 11, 15], 9)
