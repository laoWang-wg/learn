function a() {
	console.log(this.a)
}

let obj = {
	a: 123,
}

Function.prototype.myCall = function (context, ...args) {
	context = context || window
	let sy = Symbol()
	context[sy] = this

	let result = context[sy](...args)
	delete context[sy]
	return result
}

a.myCall(obj)
