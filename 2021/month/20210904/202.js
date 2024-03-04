/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const getSum = function (n) {
		let sum = 0

		while (n) {
			sum += (n % 10) * (n % 10)
			n = Math.floor(n / 10)
		}
		return sum
	}

	let set = new Set()
	let sum = n
	while (true) {
		sum = getSum(sum)
		if (sum === 1) {
			return true
		}
		if (set.has(sum)) {
			return false
		}

		set.add(sum)
	}
}

console.log(isHappy(19))
