const digitToInt = function (numStr) {
	// 36进制字符串转十进制
	const baseDigit = 36
	if (typeof numStr !== "string") {
		throw "非法36进制字符"
	}
	let result = 0
	for (let i = 0; i < numStr.length; i++) {
		const eachStr = numStr[i]
		const eachCharCode = eachStr.charCodeAt()
		let eachNum
		if (eachCharCode >= 48 && eachCharCode <= 57) {
			// 0 - 9;
			eachNum = +eachStr
		} else if (eachCharCode >= 65 && eachCharCode <= 90) {
			// 10 - 35
			eachNum = numStr[i].charCodeAt() - 55
		} else {
			throw "非法36进制字符"
		}
		result = result * baseDigit + eachNum
	}
	return result
}

let b = digitToInt("10I")
console.log(b)
