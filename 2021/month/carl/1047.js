/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	let stack = []
	let start = 0
	while (start < s.length) {
		if (s[start] !== stack[stack.length - 1]) {
			stack.push(s[start])
		} else {
			stack.pop()
		}
		start++
	}

	return stack.join("")
}

removeDuplicates("abbaca")
