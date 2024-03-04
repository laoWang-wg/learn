/**
 * 去除 n位后的 m 最大值
 * @param m
 * @param n
 * @returns {number}
 */
function findMax(m, n) {
	let arr = m.toString().split("")
	let stack = []
	let count = 0
	while (stack.length < arr.length - n) {
		let max = -Infinity
		let index = count
		for (let i = count; i <= count + n; i++) {
			if (arr[i] > max) {
				max = arr[i]
				index = i
			}
		}
		count === index ? count++ : (count = index + 1)
		stack.push(max)
	}
	console.log(stack)
	return Number(stack.join(""))
}
let m = 85269
let n = 4
console.log(findMax(m, n))
