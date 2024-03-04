function myNew(fn, ...args) {
	let obj = Object.create(fn.prototype)
	let result = fn.call(obj, ...args)

	if (typeof result === "object" || typeof result === "function") {
		return result
	}
	return obj
}
