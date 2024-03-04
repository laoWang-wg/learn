function flatten(arr) {
	let result = []

	while (arr.length) {
		let item = arr.shift()
		if (Array.isArray(item)) {
			arr.unshift(...item)
		} else {
			result.push(item)
		}
	}
	return result
}
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

console.log(flatten(arr))
