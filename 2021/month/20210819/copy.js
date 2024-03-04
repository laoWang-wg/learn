function copy(obj) {
	return Object.assign({}, obj)
}

function copy1(obj) {
	if (!obj || typeof obj !== "object") return
	let result = new obj.constructor()

	for (const resultKey of obj) {
		result[resultKey] = obj[resultKey]
	}

	return result
}
