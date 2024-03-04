// ['a', 'b'], ['A', 'B'], ['1', '0']，
// 输出['aA1', 'aA0', 'aB1', 'aB0', 'bA1', 'bA0', 'bB1', 'bB0']

function fn(arr) {
	let result = arr.shift()
	while (arr.length) {
		let b = arr.shift()
		result = result.map((a) => {
			return b.map((c) => a + c)
		})
		result = result.flat(Infinity)
	}
	return result
}

let h = fn([
	['a', 'b', 'c'],
	['A', 'B', 'C'],
	['1', '0', '-1'],
])
console.log(h)
