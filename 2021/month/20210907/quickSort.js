function quickSort(nums) {
	const help = function (arr) {
		if (arr.length <= 1) return arr
		let mid = Math.floor(arr.length / 2)
		let left = []
		let right = []
		let midValue = arr.splice(mid, 1)[0]
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < midValue) {
				left.push(arr[i])
			} else {
				right.push(arr[i])
			}
		}
		return [...help(left), midValue, ...help(right)]
	}

	return help(nums)
}

console.log(quickSort([1, 3, 5, 3, 2, 7, 0, 9]))
