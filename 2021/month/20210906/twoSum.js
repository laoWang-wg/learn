/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let map = {}
	numbers.unshift("")
	for (let i = 1; i < numbers.length; i++) {
		let value = target - numbers[i]
		if (map[value] !== undefined) {
			return [map[value], i]
		}
		map[numbers[i]] = i
	}
	return []
}

console.log(twoSum([2, 7, 11, 15], 9))
