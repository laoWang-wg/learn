/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let map = new Map()
	for (const item of ransomNote) {
		map.set(item, map.has(item) ? map.get(item) + 1 : 1)
	}
	for (const item of magazine) {
		if (map.has(item)) {
			let value = map.get(item) - 1
			value === 0 ? map.delete(item) : map.set(item, value)

			if (map.size === 0) {
				return true
			}
		}
	}
	return false
}

//ransomNote = "aa", magazine = "aab"

console.log(canConstruct("aa", "aab"))
