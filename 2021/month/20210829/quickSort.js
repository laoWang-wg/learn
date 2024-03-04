function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	let left = []
	let right = []

	let mid = Math.floor(arr.length / 2)
	//.splice(mid, 1)
	let target = arr[mid]
	for (let i = 0; i < arr.length; i++) {
		if (target != arr[i]) {
			arr[i] > target ? right.push(arr[i]) : left.push(arr[i])
		}
	}
	return [...quickSort(left), target, ...quickSort(right)]
}

console.log(quickSort([1, 3, 2, 6, 4, 10, -1]))
