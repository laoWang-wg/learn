function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	let left = []
	let right = []

	let mid = Math.floor(arr.length / 2)
	let midValue = arr.splice(mid, 1)[0]

	for (let i = 0; i < arr.length; i++) {
		arr[i] < midValue ? left.push(arr[i]) : right.push(arr[i])
	}

	return [...quickSort(left), midValue, ...quickSort(right)]
}

console.log(quickSort([1, 2, 0, 4, 5, 3, 7, 4, 4, 8]))
