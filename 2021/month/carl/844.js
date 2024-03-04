/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 输入：S = "ab#c", T = "ad#c"
 输出：true
 解释：S 和 T 都会变成 “ac”。
 */
var backspaceCompare = function (s, t) {
	let help = function (str) {
		let stack = []

		for (let i = 0; i < str.length; i++) {
			if (str[i] !== "#") {
				stack.push(str[i])
			} else if (stack.length > 0) {
				stack.pop()
			}
		}
		return stack.join("")
	}
	return help(s) === help(t)
}

backspaceCompare("ab#c", "ad#c")
