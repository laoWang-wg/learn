/**
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 输出: 4
 解释: 9 出现在 nums 中并且下标为 4

 */

function a(arr, target) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		console.log(mid)
		if (arr[mid] === target) {
			return mid
		}
		if (target < arr[mid]) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return -1
}

console.log(a([-1, 0, 3, 5, 9, 12], 2))
