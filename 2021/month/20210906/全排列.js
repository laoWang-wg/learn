/**
 * 如输入[[1,2],[3,4],[5,6]]
 输出：
 [ 1, 3, 5 ]
 [ 1, 3, 6 ]
 [ 1, 4, 5 ]
 [ 1, 4, 6 ]
 [ 2, 3, 5 ]
 [ 2, 3, 6 ]
 [ 2, 4, 5 ]
 [ 2, 4, 6 ]
 */

function print(arr) {
	let result = []
	let target = []

	const help = function (arr, index) {
		if (target.length === arr.length) {
			result.push([...target])
			return
		}
		let item = arr[index]
		for (let i = 0; i < item.length; i++) {
			target.push(item[i])
			help(arr, index + 1)
			target.pop()
		}
	}

	help(arr, 0)
	console.log(result)
}

print([
	[1, 2, 7],
	[3, 4],
	[5, 6]
])

function printArr(arr, n, res) {
	for (var i = 0; i < arr[i].length; i++) {
		if (n == 0) {
			res = []
		}
		if (n < arr.length) {
			var _res = res.slice()
			_res.push(arr[n][i])
			if (n == arr.length - 1) {
				console.log(_res)
			} else {
				printArr(arr, n + 1, _res)
			}
		}
	}
}
// 测试：
var arr = [
	[1, 2],
	[3, 4],
	[5, 6]
]
printArr(arr, 0)

function step(n, res) {
	if (n == 0) {
		res = []
	}
	var i = 1
	while (i < 3) {
		if (n + i <= 10) {
			var _res = res.slice()
			_res.push(i)
			if (n + i == 10) {
				console.log(_res)
			} else {
				step(n + i, _res)
			}
		}
		i++
	}
}
step(0)
