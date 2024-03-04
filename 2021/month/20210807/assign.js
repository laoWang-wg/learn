Object.prototype.assign = function (objA, ...args) {
	if (objA === null || objA === undefined) {
		throw new TypeError('error')
	}
	let result = Object(objA)
	args.forEach((item) => {
		for (const key in item) {
			if (Object.hasOwnProperty.call(item, key)) {
				result[key] = item[key]
			}
		}
	})
	return result
}

Object.assign(a, b)
