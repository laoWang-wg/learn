/**
 * @param {string} s
 * @return {number}
 * 输入: s = "abcabcbb"
 输出: 3
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
var lengthOfLongestSubstring = function (s) {
	if (!s) return 0
	let str = ""
	let left = 0
	let len = -Infinity
	for (let i = 0; i < s.length; i++) {
		let _s = s.charAt(i)

		while (str.slice(left).includes(_s)) {
			left++
		}
		str += _s
		len = Math.max(len, i - left + 1)
	}
	return len
}

console.log(lengthOfLongestSubstring("bbbb"))
