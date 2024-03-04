function deepCopy(obj, cache = new WeakMap()) {
	if (obj === null) return null
	if (cache.has(obj)) {
		return cache.get(obj)
	}
	if (typeof obj === "object") {
		if (obj instanceof Function) {
			return obj
		} else if (obj instanceof Date) {
			return new Date(obj)
		} else {
			let target = new obj.constructor()
			cache.set(obj, target)
			for (const key of Object.keys(obj)) {
				target[key] = obj[key]
			}
			return target
		}
	}
	return obj
}

let a = {
	b: 12
}
a.c = a

console.log(deepCopy(a))
