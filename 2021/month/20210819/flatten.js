function flatten(arr, num = 1) {
	if (num == 0) return arr
	return arr.reduce(
		(a, b) => a.concat(Array.isArray(b) ? flatten(b, --num) : b),
		[]
	)
}

console.log(flatten([1, 2, 3, [[4, 5], 6], 7, 8, 9]))
