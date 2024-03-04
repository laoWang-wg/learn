/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let target = strs[0]
	let result = ""
	for (let i = 0; i < target.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) return result
		}
		result += strs[0][i]
	}
	console.log(result)
}
const strs = ["flower", "flow", "flight"]

longestCommonPrefix(strs)
