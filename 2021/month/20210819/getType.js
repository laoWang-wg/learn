function getType(value) {
	if (value === null) {
		return value + ""
	}
	if (typeof value === "object") {
		let valueClass = Object.prototype.toString.call(value)
		let type = valueClass.split(" ")[1].split("")
		type.pop()
		return type.join("").toLowerCase()
	}

	return typeof value
}
let a = {}
console.log(getType(new Date()))
