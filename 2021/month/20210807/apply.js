Function.prototype.apply = function (context, args) {
	context = context || window
	let sy = Symbol()

	context[sy] = this
	let result = context[sy](...args)
	delete context[sy]
	return result
}
