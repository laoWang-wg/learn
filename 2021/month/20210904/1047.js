/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	let stack = []
	let len = 0

	while (len < s.length) {
		let item = s[len++]
		if (item === stack[stack.length - 1]) {
			stack.pop()
		} else {
			stack.push(item)
		}
	}
	return stack.join("")
}

console.log(removeDuplicates("abbaca"))
