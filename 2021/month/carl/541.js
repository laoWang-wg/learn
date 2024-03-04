/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	let arr = s.split("")
	let start = 0
	let end = k - 1
	for (let i = 0; i < s.length; ) {
		while (start < end) {
			;[arr[start], arr[end]] = [arr[end], arr[start]]
			end--
			start++
		}
		start = i = i + 2 * k
		end = start + k - 1
	}
	return arr.join("")
}

console.log(reverseStr("abcd", 2))
