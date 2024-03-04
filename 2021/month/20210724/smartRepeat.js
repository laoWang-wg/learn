// 试编写“智能重复”smartRepeat函数，实现：
// 将3[abc]变为abcabcabc
// 将3[2[a]2[b]]变为aabbaabbaabb
// 将2[1[a]3[b]2[3[c]4[d]]]变为abbbcccddddcccddddabbbcccddddcccdddd
//  3+(2+4)

function smartRepeat(templateStr) {
	let stackNum = []
	let stackStr = ['']
	for (let i = 0; i < templateStr.length; i++) {
		let str = templateStr[i]
		if (parseInt(str)) {
			stackNum.push(str)
		} else {
			if (str === '[') {
				stackStr.push('')
			} else if (str === ']') {
				let n = stackNum.pop()
				let s = stackStr.pop()
				stackStr[stackStr.length - 1] += s.repeat(n)
			} else {
				stackStr[stackStr.length - 1] += str
			}
		}
	}
	return stackStr[0]
}

const result = smartRepeat('3[abc]')
console.log(result)
