function deepClone(obj) {
	let result = {}
	let stack = [
		{
			data: obj,
			parent: result,
			key: null
		}
	]
	let weakMap = new WeakMap()
	while (stack.length) {
		let { data, parent, key } = stack.pop()
		let res = parent

		if (key !== null) {
			res = parent[key] = new data.constructor()
		}
		if (weakMap.has(data)) {
			parent[key] = weakMap.get(data)
			continue
		}
		weakMap.set(data, res)

		Object.keys(data).forEach((key) => {
			if (typeof data[key] === "object") {
				stack.push({
					data: data[key],
					key: key,
					parent: res
				})
			} else {
				res[key] = data[key]
			}
		})
	}
	return result
}

let a = {
	b: [1, 2, 3, 5, { f: 34 }]
}
a.a = a

let c = deepClone(a)
console.log(c)
