/**
 * 输入：["h","e","l","l","o"]
 输出：["o","l","l","e","h"]
 */

function reverse(arr) {
	let a = 0
	let b = arr.length - 1
	while (a < b) {
		;[arr[a], arr[b]] = [arr[b], arr[a]]
		a++
		b--
	}
	return arr
}
reverse(["h", "e", "l", "l"])
