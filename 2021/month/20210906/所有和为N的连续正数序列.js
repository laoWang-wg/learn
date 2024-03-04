/*
 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如：输入15
 * 结果：[[1,2,3,4,5],[4,5,6],[7,8]]
 */
function createArr(n) {
	let target = []
	let result = []
	const help = function (index) {
		if (target.reduce((a, b) => a + b, 0) === n) {
			result.push([...target])
		}
		for (let i = index; i < 10; i++) {
			if (target[target.length - 1] > i || target.includes(i)) {
				continue
			}

			target.push(i)
			help(index + 1)
			target.pop()
		}
	}

	help(1)
	console.log(result)
}

createArr(6)
