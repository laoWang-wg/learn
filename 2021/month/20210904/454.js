/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
	let map = {}
	for (const n1 of nums1) {
		for (const n2 of nums2) {
			map[n1 + n2] = (map[n1 + n2] || 0) + 1
		}
	}
	let count = 0
	for (const n3 of nums3) {
		for (const n4 of nums4) {
			if (map[-(n3 + n4)]) {
				count += map[-(n3 + n4)]
			}
		}
	}
	return count
}
