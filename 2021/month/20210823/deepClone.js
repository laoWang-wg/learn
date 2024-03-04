function deepClone(obj) {
	let result = new Object()
	let weakMap = new WeakMap()
	let stack = [
		{
			parent: result,
			value: obj,
			key: null
		}
	]

	while (stack.length) {
		let { parent, key, value } = stack.pop()

		let res = parent
		if (key !== null) {
			res = parent[key] = {}
		}
		if (weakMap.has(value)) {
			parent[key] = weakMap.get(value)
			continue
		}
		weakMap.set(value, res)
		Object.keys(value).forEach((k) => {
			if (typeof value[k] !== "object") {
				res[k] = value[k]
			} else {
				stack.push({
					parent: res,
					key: k,
					value: value[k]
				})
			}
		})
	}

	return result
}

// let obj = {
// 	a: 1,
// 	b: {
// 		c: 2,
// 		d: {
// 			f: 12,
// 			g: obj
// 		}
// 	}
// }
let a = {
	b: 12
}
a.a = a

let b = deepClone(a)
console.log(b)
