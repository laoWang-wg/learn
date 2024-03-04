function deepCopy(obj, cache = new WeakMap()) {
	if (obj === null) return null
	if (cache.has(obj)) {
		return cache.get(obj)
	}
	if (
		Array.isArray(obj) ||
		Object.prototype.toString.call(obj) === '[object object]'
	) {
		let target = new obj.constructor()
		cache.set(obj, target)
		for (const key in obj) {
			if (Object.hasOwnProperty.call(obj, key)) {
				target[key] = deepCopy(obj[key], cache)
			}
		}
		return target
	}

	return obj
}

const c = {
	age: 1,
	name: undefined,
	sex: null,
	e: [1, 2, 3],
	tel: /^1[34578]\d{9}$/,
	f: {
		d: 1
	},
	say: () => {
		console.log('hahha')
	}
}
console.log(deepCopy(c))
