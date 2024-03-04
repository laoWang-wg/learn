function decodeNum(num, base) {
	return num.toString(base)
}

console.log(decodeNum(12, 36))

//

function baseConvert(num, base) {
	if (num === 0) {
		return 0
	}
	let neg = ''
	if (num < 0) {
		neg = '-'
		num = Math.abs(num)
	}
	let arr = []

	while (num) {
		const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let ret = Math.floor(num % base)

		arr.unshift(digits[ret])

		num = Math.floor(num / base)
	}
	arr.unshift(neg)
	return arr.join('')
}

let a = baseConvert(1314, 36)
console.log(a)
