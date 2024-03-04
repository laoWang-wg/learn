/**
 * @param {string[]} tokens
 * @return {number}
 * 输入：tokens = ["2","1","+","3","*"]
 输出：9
 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 */
var evalRPN = function (tokens) {
	const s = new Map([
		["+", (a, b) => a * 1 + b * 1],
		["-", (a, b) => b - a],
		["*", (a, b) => b * a],
		["/", (a, b) => (b / a) | 0]
	])
	const stack = []
	for (const i of tokens) {
		if (!s.has(i)) {
			stack.push(i)
			continue
		}
		stack.push(s.get(i)(stack.pop(), stack.pop()))
	}
	return stack.pop()
}

console.log(
	evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
)

evalRPN(["4", "13", "5", "/", "+"])
