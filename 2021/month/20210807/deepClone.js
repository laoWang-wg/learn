function deepClone(obj, cache = new WeakMap()) {
	if (obj === null || typeof obj !== 'object') return obj
	if (cache.has(obj)) {
		return cache.get(obj)
	}
	let target = new obj.constructor()
	cache.set(obj, target)
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			target[key] = deepClone(obj[key], cache)
		}
	}
	let sym = Object.getOwnPropertySymbols(obj)
	for (const i = 0; i < sym.length; i++) {
		if (obj.hasOwnProperty(sym[i])) {
			target[sym[i]] = deepClone(obj[sym[i]], cache)
		}
	}
	return target
}
