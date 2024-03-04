function sumBigNumber(a, b) {
	let add = 0
	let aLen = a.length - 1
	let bLen = b.length - 1
	let sum = ""
	while (aLen >= 0 || bLen >= 0 || add != 0) {
		let _a = ~~a[aLen--]
		let _b = ~~b[bLen--]
		let temp = _a + _b + add
		sum = (temp > 10 ? temp % 10 : temp) + sum
		add = Math.floor(temp / 10)
	}
	return sum
}

console.log(sumBigNumber("123", "459"))
