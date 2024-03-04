Object.prototype.map = function (cb) {
	let result = {}
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			result[key] = cb(key, this[key])
		}
	}
	return result
}
const test1 = {
	a: 2,
	b: 3,
	c: 4,
	d: 5
}
const r1 = test1.map((key, value) => {
	if (value % 2 === 0) {
		return value / 2
	}
	return value
})
console.log(r1)
// r1 :  {a: 1, b: 3, c: 2, d: 5}
