//找出数组中都比左边大，且比右边大的数字 下标
function find(arr) {
	let result = []
	let left_max = [arr[0]]
	let right_min = [arr[arr.length - 1]]
	for (let i = 1; i <= arr.length; i++) {
		left_max[i] = Math.max.apply(Math, [...left_max, arr[i - 1]])
	}
	for (let i = arr.length - 2; i >= 0; i--) {
		right_min[i] = Math.min.apply(Math, [right_min[0], arr[i + 1]])
	}
	// for (let i = arr.length-2; i >=0; i--) {
	//     right_min[i] = Ma    th.min.apply(Math,arr.slice(i+1,arr.length))
	// }

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > left_max[i] && arr[i] < right_min[i]) {
			result.push(i)
		}
	}
	return result
}
let arr = [2, 3, 1, 8, 9, 20, 12]

console.log(find(arr))
