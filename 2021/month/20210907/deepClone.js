function deepClone(obj) {
	let result = {}
	let stack = [
		{
			parent: result,
			key: null,
			data: obj
		}
	]

	while (stack.length) {
		let { parent, key, data } = stack.pop()
		let _parent = parent
		if (key !== null) {
			_parent = _parent[key]
		}
		Object.keys(data).map((item) => {
			if (typeof item === "object") {
				stack.push({
					key: item,
					data: data[item],
					parent: _parent
				})
			} else {
				_parent[item] = data[item]
			}
		})
	}
}

let obj = {
	a: 1,
	b: {
		c: 12
	}
}
