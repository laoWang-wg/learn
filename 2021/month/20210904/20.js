/**
 * @param {string} s
 * @return {boolean}
 * s = "()[]{}"
 */
var isValid = function (s) {
	let stack = []
	let len = 0
	while (len < s.length) {
		let item = s[len++]

		switch (item) {
			case "(":
				stack.push(")")
				break
			case "[":
				stack.push("]")
				break
			case "{":
				stack.push("}")
				break
			default:
				if (item != stack.pop()) {
					return false
				}
		}
	}
	return stack.length === 0
}

console.log(isValid("()[]{}"))
