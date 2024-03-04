function myCall(obj, ...args) {
	obj = obj || globalThis
	let sy = Symbol()
	obj[sy] = this

	let result = obj[sy](...args)
	delete obj[sy]
	return result
}

function myApply(obj, args) {
	obj = obj || globalThis
	let sy = Symbol()
	obj[sy] = this
	let result
	if (!args) {
		result = obj[sy]()
	} else {
		if (Array.isArray(args)) {
			result = obj[sy](...args)
		} else {
			throw new SyntaxError("args must array")
		}
	}

	delete obj[sy]
	return result
}
