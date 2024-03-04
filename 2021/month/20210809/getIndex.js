// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
// 用最精炼的代码实现数组非零非负最小值 index
function getIndex(arr) {
	return arr.findIndex(
		(item) => item === arr.filter((item) => item > 0).sort((a, b) => a - b)[0],
	)
}
let b = getIndex([10, 21, 0, -7, 35, 7, 9, 23, 18])
console.log(b)
