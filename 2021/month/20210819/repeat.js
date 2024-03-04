String.prototype.repeat = function (num) {
	let result = ""
	for (let i = 0; i < num; i++) {
		result += this
	}
	return result
}

console.log("abc".repeat(2))

console.log(new Array(4).join("ab"))
