/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 输入: s = "cbaebabacd", p = "abc"
 输出: [0,6]
 */
var findAnagrams = function (s, p) {
	const getStr = (str, start = 0, end = str.length - 1) => {
		let result = Array.from({ length: 26 }, () => 0)
		console.log(str, start, end)
		for (let i = start; i <= end; i++) {
			result[str[i].charCodeAt(0) - "a".charCodeAt(0)]++
		}
		return result.join("")
	}
	let target = getStr(p)
	let start = 0
	let end = p.length - 1
	let result = []
	while (end < s.length) {
		if (target === getStr(s, start, end)) {
			result.push(start)
		}
		start++
		end++
	}

	return result
}
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 输入: s = "cbaebabacd", p = "abc"
 输出: [0,6]
 */
function findAnagrams2(s, p) {
	let map = new Map()
	for (const pElement of p) {
		map.set(pElement, map.has(pElement) ? map.get(pElement) + 1 : 1)
	}

	let start = 0
	let end = 0
	let result = []
	while (end < s.length) {
		if (map.get(s[end]) > 0) {
			map.set(s[end], map.get(s[end]) - 1)
			end++
		} else if (map.get(s[start]) >= 0) {
			map.set(s[start], map.get(s[start]) + 1)
			start++
		} else {
			start = end += 1
		}
		if (end - start === p.length) {
			result.push(start)
		}
	}
	return result
}
console.log(findAnagrams2("cbaebabacd", "abc"))
