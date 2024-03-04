/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 输入: s = "anagram", t = "nagaram"
 输出: true
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false
	let map = new Map()
	for (const sElement of s) {
		map.set(sElement, map.has(sElement) ? map.get(sElement) + 1 : 1)
	}
	for (const tElement of t) {
		if (map.has(tElement)) {
			let value = map.get(tElement) - 1
			value === 0 ? map.delete(tElement) : map.set(tElement, value)
		}
	}
	return map.size === 0
}

console.log(isAnagram("anagram", "nagaram"))
