Array.prototype.myReduce = function (callback, arg) {
	if (!(callback instanceof Function)) {
		throw "err"
	}
	let index = 0
	if (!arg) {
		arg = this[0]
		index = 1
	}
	console.log(this)
	for (; index < this.length; index++) {
		console.log(arg, this[index])
		arg = callback(arg, this[index], index, this)
	}
	console.log(arg)
	return arg
}
;[1, 2].myReduce((a, b) => {
	return a + b
}, 0)
