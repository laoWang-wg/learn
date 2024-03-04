function myNew(fn, ...args) {
	let obj = Object.create(fn.property)
	let result = fn.call(obj, ...args)
	return typeof result === "object" ? result : obj
}

Promise.resolve().finally(() => {})
