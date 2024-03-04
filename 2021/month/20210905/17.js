/**
 * @param {string} digits
 * @return {string[]}
 */
const letterMap = [
	"", // 0
	"", // 1
	"abc", // 2
	"def", // 3
	"ghi", // 4
	"jkl", // 5
	"mno", // 6
	"pqrs", // 7
	"tuv", // 8
	"wxyz" // 9
]
var letterCombinations = function (digits) {
	let target = []
	let result = []
	const help = function (index) {
		if (index === digits.length) {
			result.push(target.join(""))
			return
		}
		let digit = digits[index] - "0"
		let letters = letterMap[digit]
		for (let i = 0; i < letters.length; i++) {
			target.push(letters[i])
			help(index + 1)
			target.pop()
		}
	}
	help(0)
	console.log(result)
}

letterCombinations("23")

//[['a', 'b'], ['n', 'm'], ['0', '1']] => [“an0”, “an1”, “am0”, “am1”, “bn0”, “bn1”, “bm0”, “bm1”]

function test(nums) {
	let target = []
	let result = []
	const help = function (index) {
		if (target.length === nums.length) {
			result.push(target.join(""))
			return
		}
		let _arr = nums[index]
		for (let i = 0; i < _arr.length; i++) {
			target.push(_arr[i])
			help(index + 1)
			target.pop()
		}
	}
	help(0)
	console.log(result)
	return result
}

test([
	["a", "b"],
	["n", "m", "f"],
	["0", "1", "2"]
])
