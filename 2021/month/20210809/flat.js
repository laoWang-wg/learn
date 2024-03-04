Array.prototype.flat = function (num = 1) {
	if (num < 0) return this
	return this.reduce((a, b) => {
		return a.concat(Array.isArray(b) ? b.flat(num - 1) : b)
		// return [...a, Array.isArray(b) ? ...b.flat(num - 1) : b]
	}, [])
}
let arr = [
	[1, 2],
	[3, 4],
	[5, [7, [8]]],
].flat(1)
console.log(arr) // [1,2,3,4,5,6]

const flatten = (arr) => {
	let result = []
	arr.forEach((item, i, arr) => {
		if (Array.isArray(item)) {
			result = result.concat(flatten(item))
		} else {
			result.push(arr[i])
		}
	})
	return result
}
// const flatten = (arr) => {
// 	while (arr.some((item) => Array.isArray(item))) {
// 		arr = [].concat(...arr)
// 	}
// 	return arr
// }
console.log(flatten(arr))
