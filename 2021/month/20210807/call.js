Function.prototype.call = function (context, ...args) {
	context = context || window
	let sy = Symbol()
	context[sy] = this
	let result = context[sy](...args)
	delete context[sy]
	return result
}

function test() {
	console.log(this.a)
}
let obj = {
	a: 123,
}
test.call(obj)
