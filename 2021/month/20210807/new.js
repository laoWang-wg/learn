function myNew(fn, ...args) {
	const Ctor = Object.create(fn.prototype)
	const result = fn.call(Ctor, ...args)
	if (result === null) return Ctor
	return typeof result === 'object' || typeof result === 'function'
		? result
		: Ctor
}
