String.prototype._reverse = function () {
	return this.split("").reverse().join("")
}

console.log("abc"._reverse())

function fn(num, n) {
	// return num.toLocaleString()
	if (num.length <= n) return num
	let len = num.length
	let result = []
	while (num.length > 0) {
		let str = ""
		while (str.length < n) {
			str += num[--len]
		}
		// len -= n
		result.push(str)
	}
	return result
}

console.log(fn("123456", 3))
