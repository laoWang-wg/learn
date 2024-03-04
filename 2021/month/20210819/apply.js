Function.prototype.apply = function (obj, args) {
	if (typeof this !== "function") {
		throw new TypeError("not function")
	}

	if (!Array.isArray(args)) {
		throw new TypeError(`${args} is not a array`)
	}
	let context = obj || window
	let fn = Symbol()

	context[fn] = this
	let result = null
	if (args) {
		result = context[fn](...args)
	} else {
		result = context[fn]()
	}
	delete context[fn]
	return result
}

console.log(...[])
