function myNew(fn, ...args) {
	let Ctor = Object.create(fn.prototype)
	let result = fn.call(Ctor, ...args)
	return typeof result === "object" ? result : Ctor
}
