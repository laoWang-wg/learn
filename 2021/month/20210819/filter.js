Array.prototype.filter = function (cb) {
	if (typeof fn !== "function") {
		throw Error("参数必须是一个函数")
	}
	let result = []

	for (let i = 0; i < this.length; i++) {
		if (cb(this[i])) {
			result.push(this[i])
		}
	}
	return result
}

let a = [1, 2, 3, 4, 5]

console.log(a.filter((a) => a > 2))
