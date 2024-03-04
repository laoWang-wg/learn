/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 输出：[9,4]
 */
var intersection = function (nums1, nums2) {
	let set1 = new Set()
	let set2 = new Set()
	for (const item of nums1) {
		set1.add(item)
	}
	for (const item of nums2) {
		if (set1.has(item)) {
			set2.add(item)
		}
	}

	return [...set2]
}
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
