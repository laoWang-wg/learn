function deepCopy(obj) {
	let result = {}
	let weakMap = new WeakMap()
	let stack = [
		{
			parent: result,
			data: obj,
			key: null
		}
	]

	while (stack.length) {
		let { parent, data, key } = stack.pop()

		let res = parent
		if (key !== null) {
			res = parent[key] = new data.constructor()
		}
		if (weakMap.has(data)) {
			parent[key] = weakMap.get(data)
			continue
		}
		weakMap.set(data, res)

		Object.keys(data).forEach((item) => {
			if (typeof data[item] === "object") {
				stack.push({
					data: data[item],
					key: item,
					parent: res
				})
			} else {
				res[item] = data[item]
			}
		})
	}
	return result
}

var a = {
	b: [1, 2, 3, 5, { f: 34 }]
}
a.a = a

var c = deepCopy(a)
console.log(c)
