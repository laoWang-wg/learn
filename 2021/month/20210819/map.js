Array.prototype.map = function (cb) {
	if (typeof cb !== "function") {
		throw Error("参数必须是一个函数")
	}
	let result = []
	for (let i = 0; i < this; i++) {
		result.push(cb(this[i]))
	}
	return result
}
