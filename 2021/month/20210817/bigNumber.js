function bigNumber(numA, numB) {
	let i = numA.length - 1
	let j = numB.length - 1
	let add = 0
	let result = 0
	let ans = []
	while (i >= 0 || j >= 0 || add != 0) {
		let _a = i >= 0 ? numA.charAt(i) - 0 : 0
		let _b = j >= 0 ? numB.charAt(j) - 0 : 0
		let result = _a + _b + add
		ans.push(result % 10)
		add = Math.floor(result / 10)
		i--
		j--
	}
	return ans.reverse().join("")
}

//246
console.log(bigNumber("123", "123"))
